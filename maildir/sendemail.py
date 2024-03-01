from maildir.gmailapi import Create_Service
import base64
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from  pydantic import EmailStr
from fastapi import HTTPException, status

class SendCode:
    def __init__(self,  message,receipient:EmailStr, subject:str):
        self.email = receipient
        self.message = message
        self.subject = subject
        self.CLIENT_SECRET_FILE = 'maildir/gpt_email.json'
        self.API_NAME = 'gmail'
        self.API_VERSION = 'v1'
        self.SCOPES = ['https://mail.google.com/']

    def sendcode(self):
        service = Create_Service(self.CLIENT_SECRET_FILE, self.API_NAME, self.API_VERSION, self.SCOPES)

        emailMsg = self.message
        mimeMessage = MIMEMultipart()
        mimeMessage['to'] = self.email
        mimeMessage['subject'] = self.subject
        mimeMessage.attach(MIMEText(emailMsg, 'html'))
        raw_string = base64.urlsafe_b64encode(mimeMessage.as_bytes()).decode()
        try:
            message = service.users().messages().send(userId='me', body={'raw': raw_string}).execute()
            if message:
                return "Code sent to email"
            else:
                return None
        except Exception as e:
            raise HTTPException(status_code = status.HTTP_500_INTERNAL_SERVER_ERROR, detail = str(e))