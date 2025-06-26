# scheduler.py

import smtplib
from email.mime.text import MIMEText
import schedule
import time
from email_config import EMAIL_ADDRESS, EMAIL_PASSWORD, EMAIL_SUBJECT, EMAIL_BODY, TO_EMAIL


def send_email(time_of_day):
    subject = f"{EMAIL_SUBJECT} - {time_of_day}"
    body = f"Hello Vipul,\n\nThis is your {time_of_day} scheduled email.\n\nRegards,\nYour Python Script 🚀"

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = TO_EMAIL

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)
        print(f"[{time_of_day}] Email sent successfully ✅")
    except Exception as e:
        print(f"[{time_of_day}] Error sending email ❌: {e}")


# ⏰ Schedule emails for morning, afternoon, evening, and night
schedule.every().day.at("07:00").do(send_email, time_of_day="Morning")
schedule.every().day.at("12:00").do(send_email, time_of_day="Afternoon")
schedule.every().day.at("18:00").do(send_email, time_of_day="Evening")
schedule.every().day.at("22:00").do(send_email, time_of_day="Night")

print("Email scheduler started for morning, afternoon, evening, and night... 🕒")

while True:
    schedule.run_pending()
    time.sleep(1)
