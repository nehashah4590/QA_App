from google.oauth2 import id_token
from google.auth.transport import requests
from core.config import settings


async def get_details(token):
    try:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), settings.GOOGLE_CLIENT_ID)

        # Print the extracted user ID
        print("User ID:", idinfo['sub'])
        print("Email:", idinfo['email'])  # If available
        print("User Name:", idinfo['name'])
    except ValueError:
        print("Invalid token or other error occurred")