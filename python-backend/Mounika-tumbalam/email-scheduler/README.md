# Email Scheduler

A Python script that sends scheduled emails using Gmail SMTP.

## Setup Instructions

### 1. No Installation Required
This project uses only built-in Python modules, so no external packages need to be installed.

### 2. Gmail Configuration Required

**Important:** The script uses Gmail SMTP, which requires proper authentication setup.

#### Steps to configure Gmail:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for this script
   - Use this app password in the `password` variable, not your regular Gmail password

3. **Update the script:**
   - Replace `sender` with your Gmail address
   - Replace `password` with your generated app password
   - Replace `receiver` with the recipient's email

## Usage

```bash
# Navigate to the project directory
cd python-backend/Mounika-tumbalam/email-scheduler

# Run the script
python scheduler.py
```

## Troubleshooting

### Connection Errors
If you get SMTP connection errors:
- Ensure you're using an app password, not your regular password
- Check your internet connection
- Verify 2-factor authentication is enabled on Gmail
- Make sure "Less secure app access" is NOT enabled (use app passwords instead)

### Authentication Errors
- Double-check your app password
- Ensure the sender email is correct
- Verify your Gmail account has 2FA enabled

## How it Works

The script sends two scheduled emails:
1. First email sent immediately
2. Second email sent after a 60-second delay

You can modify the `subjects` and `bodies` arrays to customize the email content. 