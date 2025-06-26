import smtplib
import ssl
from email.message import EmailMessage
import time

sender = 'tumbalammounika@gmail.com'
password = 'kvug olfv rsjc muyl'
receiver = 'imkuldeepahlawat@gmail.com'

subjects = ['Sending mail using python','Again Sending mail']
bodies = [
    "Hi! Good evening sir!\nHave a nice weekend!😊",
    "Hello again! ✨\nThis is the second and final scheduled message.!"
]

def send_email(ind):
    subject = subjects[ind]
    body = bodies[ind]

    em = EmailMessage()
    em['From'] = sender
    em['To'] = receiver
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(sender, password)
        smtp.sendmail(sender, receiver, em.as_string())

send_email(0)
time.sleep(60) 
send_email(1)
