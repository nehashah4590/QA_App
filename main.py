from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from userdir.routes import UserRoutes
from chat.routes import ChatRoutes
from db import ping_server


app = FastAPI()


@app.on_event("startup")
async def on_start():
    await ping_server()


allowed_origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = allowed_origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)
usr_router = UserRoutes()
usr_router.setup_routes()
chat_router = ChatRoutes()
chat_router.setup_routes()

app.include_router(usr_router.router)
app.include_router(chat_router.router)

@app.get("/")
def redirect_url():
    return RedirectResponse(url = '/docs/')