from fastapi import HTTPException, status, Depends, APIRouter, FastAPI
from core.security import get_current_user
from db import get_db
from db.models import Collection
from chat.chatcrud import CRUD
from db.schemas import Question

collection =Collection()
user_collection = collection.load_collection()

class ChatRoutes:
    def __init__(self):
        self.router = APIRouter()
        self.chat_crud = CRUD()

    def setup_routes(self):
        self.router.post("/chat/", dependencies=[Depends(get_current_user)], tags=["Chat"])(self.chat)
        self.router.get("/history/", dependencies=[Depends(get_current_user)], tags=["Chat"])(self.chat_history)

    async def chat(self,question:Question, token: str = Depends(get_current_user), db = Depends(get_db)):
        user = await user_collection.find_one({ "email": token.get("email") })
        if not user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail = "No user found")

        response = await self.chat_crud.ask_question(question=question.question, user=user)
        return response

    async def chat_history(self, token: str = Depends(get_current_user), db = Depends(get_db)):
        user = await user_collection.find_one({"email": token.get("email")})
        if not user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No user found")
        response = await self.chat_crud.get_history(email=user["email"])
        return response