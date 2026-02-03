# Google OAuth Setup Guide

## Step 1: Create Google Cloud Project & OAuth Credentials

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Create a new project** or select an existing one
3. **Enable Google+ API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it
4. **Create OAuth 2.0 Credentials**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add your domain to "Authorized JavaScript origins":
     - `http://localhost:3000` (for development)
     - Your production domain (when deployed)
   - Add redirect URIs if needed
5. **Copy the Client ID** (looks like: `xxxxxxxxx.apps.googleusercontent.com`)

## Step 2: Configure Your Application

1. **In your backend server.js**, replace the environment variable:
   ```javascript
   // Add this to your .env file or directly in server.js
   const googleClient = new OAuth2Client('your_actual_google_client_id_here.apps.googleusercontent.com');
   ```

2. **In your login page.jsx**, replace the Client ID:
   ```javascript
   const GOOGLE_CLIENT_ID = "your_actual_google_client_id_here.apps.googleusercontent.com"
   ```

## Step 3: Create .env file (Optional but Recommended)

Create a `.env` file in your backend directory:
```
GOOGLE_CLIENT_ID=your_actual_google_client_id_here.apps.googleusercontent.com
DB_SERVER=user-110
DB_NAME=Certifurb
PORT=5000
```

Then update server.js to use:
```javascript
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
```

## Step 4: Test the Implementation

1. Start your backend server: `npm start`
2. Start your Next.js app: `npm run dev`
3. Go to login page and click "LOGIN WITH GOOGLE"
4. Complete Google sign-in flow
5. User should be created/logged in automatically

## How It Works

1. User clicks "LOGIN WITH GOOGLE"
2. Google OAuth popup appears
3. User signs in with Google
4. Google returns an ID token
5. Frontend sends token to your backend `/api/auth/google`
6. Backend verifies token with Google
7. Backend creates/finds user in database
8. User is logged in and redirected to home page

## Troubleshooting

- Make sure your domain is added to Google Cloud Console
- Check browser console for any JavaScript errors
- Verify the Client ID is correct in both frontend and backend
- Ensure Google+ API is enabled in Google Cloud Console 