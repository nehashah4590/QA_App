from core.security import get_hash_password, verify_password, create_access_token
from db.models import Collection
from fastapi.responses import JSONResponse
from fastapi import status, HTTPException
from pydantic import EmailStr
from db.schemas import UserParse, ResetPassword
from pymongo.errors import DuplicateKeyError
import random, string
from string import Template
from  maildir.sendemail import SendCode

collection = Collection()
usr_collection = collection.load_collection()
code_collection = collection.load_code_collection()


class User:
    async def is_verified(self, email: EmailStr):
        verify = await usr_collection.find_one({ "email": email })
        if verify is None:
            raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "User not found")
        if verify["is_verified"]:
            return True
        return False
    async def generate_code(self, length:int = 6):
        # Ensure at least one letter and one digit
        code = [random.choice(string.ascii_letters), random.choice(string.digits)]

        # Fill the rest of the code with a mix of letters and digits
        characters = string.ascii_letters + string.digits
        code += [random.choice(characters) for _ in range(length - 2)]

        # Shuffle the code to avoid predictable patterns (letter first, digit second)
        random.shuffle(code)

        return ''.join(code)

    async def send_code(self, email:EmailStr, sub: str, action: str):
        code = await self.generate_code()
        with open("userdir/html_code.html", 'r') as file:
            html_content = file.read()
        template = Template(html_content)
        message = template.safe_substitute(code = code,action = action)
        sending_code = SendCode(receipient = email, subject = sub, message = message)
        try:
            response = sending_code.sendcode()
            await code_collection.insert_one({ "user": email, "code": code })
        except Exception as e:
            raise HTTPException(status_code = status.HTTP_500_INTERNAL_SERVER_ERROR, detail = str(e))


    async def raise_error(self):
        raise HTTPException(
            status_code = status.HTTP_401_UNAUTHORIZED,
            detail = "Incorrect email or password",
            headers = { "WWW-Authenticate": "Bearer" })


    async def create_user(self, user):
        try:
            # Hash the user's password
            user["password"] = await get_hash_password(user["password"])
            # Insert the new user into the database
            new_user = await usr_collection.insert_one(user)
            # Retrieve the created user's data
            created_user = await usr_collection.find_one({ "_id": new_user.inserted_id })
            # Parse the user data
            usr_parse = UserParse(user = created_user)
            data = await usr_parse.parsedata()  # Assuming parsedata is not an async function
            await self.send_code(email = user["email"], sub = "Account confirmation email", action = "Thank you for registering with us")
            # Return a JSON response with the created user data
            return JSONResponse(status_code = status.HTTP_201_CREATED, content = "User Created! Check your email for verification code")
        except DuplicateKeyError:
            # Handle duplicate key error (e.g., email already exists)
            raise HTTPException(status_code = 400, detail = "Email already exists")
        except Exception as e:
            # Handle other unexpected errors
            raise HTTPException(status_code = 500, detail = str(e))

    async def authenticate(self, email: EmailStr, password: str):
        user = await usr_collection.find_one({ "email": email })
        if not user:
            # User not found
            raise HTTPException(status_code = 401, detail = "Incorrect email or password")

        if not await verify_password(hash_password = user["password"], password = password):
            # Password verification failed
            raise HTTPException(status_code = 401, detail = "Incorrect email or password")

        usr_parse = UserParse(user = user)
        parsed_data = await usr_parse.parsedata()
        token = await create_access_token(data = { "id": parsed_data["id"] })
        user ={
                 "access_token": token,
                 "token_type": "bearer",
                 "name":parsed_data["name"],
                 "email": parsed_data["email"]
             }
        return user

    async def user_verification(self, email:EmailStr, code:str):
        user = await usr_collection.find_one({ "email": email })
        if user is None:
            raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "No user found")
        db_code = await code_collection.find_one({"user":email})
        if not user["is_verified"]:
            try:
                if db_code.get("code") == code:
                    code = await usr_collection.update_one({"email":email},{'$set':{'is_verified':True}})
                    delete = await code_collection.delete_one({"_id":db_code.get('_id')})
                    return JSONResponse(status_code = status.HTTP_200_OK, content = "User verified")
                else:
                    raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "Wrong verification code")
            except Exception as e:
                raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = str(e))
        else:
            return JSONResponse(status_code = status.HTTP_208_ALREADY_REPORTED, content = "User verified already")

    async def forgot_password(self,email:EmailStr):
        user = await usr_collection.find_one({"email":email})
        if user is None:
            raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "User not found")
        if not user["is_verified"]:
            raise HTTPException(status_code = status.HTTP_405_METHOD_NOT_ALLOWED, detail = "Verify your account to proceed")
        await self.send_code(email = email, sub = "Password verification code", action = "Your password verification code is")
        return JSONResponse(status_code = status.HTTP_200_OK, content = "Verification code sent to associated account")

    async def reset_password(self, reset:ResetPassword):
        try:
            user = await usr_collection.find_one({ "email": reset.email })
            if user is None:
                raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "No user found")
            db_code = await code_collection.find_one({ "user": reset.email })
            if not user["is_verified"]:
                raise HTTPException(
                    status_code = status.HTTP_405_METHOD_NOT_ALLOWED, detail = "Verify your account to proceed"
                    )
            if db_code.get("code") == reset.code:
                password = await get_hash_password(reset.password)
                code = await usr_collection.update_one({ "email": reset.email }, { '$set': { 'password': password } })
                delete = await code_collection.delete_one({ "_id": db_code.get('_id') })
                return JSONResponse(status_code = status.HTTP_200_OK, content = "Password updated successfully")
            else:
                raise HTTPException(status_code = status.HTTP_501_NOT_IMPLEMENTED, detail = "Wrong verification code")
        except Exception as e:
            raise HTTPException(status_code = status.HTTP_500_INTERNAL_SERVER_ERROR, detail = str(e))


    async def create_user_google(self, token):
        pass