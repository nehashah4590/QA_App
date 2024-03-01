from fastapi import APIRouter, Body, Depends, HTTPException, status
from fastapi.encoders import jsonable_encoder
from db.models import UserModel
from db.schemas import LoginSchema, Verification, ResetPassword
from userdir.usercrud import User
from pydantic import EmailStr
from db import get_db


class UserRoutes:
    def __init__(self):
        self.router = APIRouter()
        self.user = User()

    def setup_routes(self):
        self.router.post("/register/", tags = ['User Creation'])(self.create_user)
        self.router.post("/login/", tags = ['User Authentication'])(self.login_user)
        self.router.post("/verify/", tags = ['User Authentication'])(self.verify)
        self.router.post("/reset/code/", tags = ["Forgot Password"])(self.forgot_pwd)
        self.router.post("/reset/password/", tags = ["Forgot Password"])(self.reset_pwd)

    async def create_user(self, user:UserModel = Body(...), db = Depends(get_db)):
        #converting the pydantic model into json compatible dictionary
        user = jsonable_encoder(user)
        response = await self.user.create_user(user = user)
        return response

    async def login_user(self, credentials: LoginSchema = Body(...), db = Depends(get_db)):
        if await self.user.is_verified(email = credentials.email):
            access_token = await self.user.authenticate(email = credentials.email, password = credentials.password)
            return access_token
        else:
            raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = "Please verify your account")

    async def verify(self, verify: Verification = Body(...), db = Depends(get_db)):
        response = await self.user.user_verification(email = verify.email, code = verify.code)
        return response

    async def forgot_pwd(self, email:EmailStr, db = Depends(get_db)):
        response = await self.user.forgot_password(email = email)
        return response

    async def reset_pwd(self, reset: ResetPassword = Body(...), db = Depends(get_db)):
        response = await self.user.reset_password(reset = reset)
        return response