from db.models import Collection
from fastapi import HTTPException, status
from fastapi.responses import JSONResponse
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
            last_chat = await chat.find_one({}, sort=[('_id', -1)])
            chat_id = 1
            if last_chat:
                chat_id = last_chat["chat_id"]+1
            await chat.insert_one({"email":user["email"], "question":question, "answer":answer, "date":datetime.utcnow(),"chat_id":chat_id})
            dict = {
                "question": question,
                "answer": answer,
                "chat_id": chat_id
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
            list_dict["chat_id"] = qa["chat_id"]
            list_history.append(list_dict)
        return list_history

    async def get_history_by_id(self, chatid, email):
        chat_data = await chat.find_one({"email":email, "chat_id": int(chatid)})
        print(chat_data)
        if chat_data is None:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="No such id found")
        return {"question":chat_data["question"],"answer":chat_data["answer"],"chatid":chat_data["chat_id"]}

    async def delete_history(self,email):
        history = chat.find({"email":email})
        if history is None:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No chat found for the authenticated user")
        result = await chat.delete_many({"email":email})
        print(result.deleted_count)
        return JSONResponse(status_code=status.HTTP_200_OK, content="Deleted successfully")