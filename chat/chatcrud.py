from db.models import Collection
from fastapi import HTTPException, status
from chat.model import generate_answer
from datetime import datetime

collection = Collection()
chat = collection.load_chat_collection()

class CRUD:
    async def ask_question(self,question, user):
        try:
            if len(question) >255:
                raise HTTPException(status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE, detail="Question too long")
            answer = generate_answer(question)
            await chat.insert_one({"email":user["email"], "question":question, "answer":answer, "date":datetime.utcnow()})
            dict = {
                "question": question,
                "answer": answer
            }
            return dict
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail= str(e))

    async def get_history(self, email):
        history = chat.find({"email":email})
        list_history = []
        async for qa in history:
            list_dict = {}
            list_dict["question"] = qa["question"]
            list_dict["answer"] = qa["answer"]
            list_dict["date"] = qa["date"]
            list_history.append(list_dict)
        return list_history