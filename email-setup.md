# Email Setup Guide for Certifurb CMS

## 📧 Real Email Configuration

Create a `.env` file in the `app/backend` folder with these settings:

```env
# ===== REAL EMAIL CONFIGURATION =====

# Email Provider (gmail, outlook, yahoo)
EMAIL_PROVIDER=gmail

# Your Email Credentials
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_NAME=Your Name
```

## 🔧 Provider Setup Instructions

### GMAIL SETUP:
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable **2-Factor Authentication**
3. Go to Security → 2-Step Verification → App passwords
4. Generate an "App Password" (16 characters)
5. Use these settings:
   ```env
   EMAIL_PROVIDER=gmail
   EMAIL_USER=youremail@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   EMAIL_NAME=Your Name
   ```

### OUTLOOK/HOTMAIL SETUP:
1. Go to [Microsoft Account Security](https://account.microsoft.com/security)
2. Enable **2-Factor Authentication**
3. Generate an "App Password"
4. Use these settings:
   ```env
   EMAIL_PROVIDER=outlook
   EMAIL_USER=youremail@outlook.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_NAME=Your Name
   ```

### YAHOO SETUP:
1. Go to [Yahoo Account Security](https://login.yahoo.com/account/security)
2. Enable **2-Factor Authentication**
3. Generate an "App Password"
4. Use these settings:
   ```env
   EMAIL_PROVIDER=yahoo
   EMAIL_USER=youremail@yahoo.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_NAME=Your Name
   ```

## ✅ What This System Does:

- **SEND**: Real emails to Gmail, Outlook, Yahoo, any email provider
- **RECEIVE**: Automatically fetches emails from your inbox every 5 minutes
- **STORE**: All emails saved in your CMS database
- **MANAGE**: Star, mark read/unread, delete, organize emails
- **REAL-TIME**: Live email client within your CMS

## 🚀 After Setup:

1. Restart your backend server
2. Go to `/cms/Email/Compose` 
3. Send a test email to any real email address
4. Check your CMS inbox for incoming emails
5. All emails will be real and work with any email client!

## 🔒 Security Notes:

- **NEVER** use your main email password
- **ALWAYS** use App Passwords with 2FA enabled
- App passwords are safer and work better with applications 