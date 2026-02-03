# Render Deployment Guide

## ⚠️ Quick Start - Just Need 3 Variables!

**If you just want to get started, you only need these 3 Supabase variables. See `RENDER_DEPLOYMENT_SIMPLE.md` for the minimal setup.**

---

## Full Environment Variables List

Set these environment variables in your Render dashboard (Settings → Environment):

### ✅ Required - Supabase Configuration (MUST HAVE)
```
SUPABASE_URL=https://egkjvbjdwcgjdizivdnz.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVna2p2Ympkd2NnamRpeml2ZG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NDg1NTcsImV4cCI6MjA4NTAyNDU1N30.jlaKxZmRAkr8LUieYNtsZOkYFtTm7P3olBgaK-1ELXg
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVna2p2Ympkd2NnamRpeml2ZG56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTQ0ODU1NywiZXhwIjoyMDg1MDI0NTU3fQ.ydHjzvDH7FlmXyTMIaDoKQGMbgVbQCRUUd7eM1beyEU
```

### ⚙️ Server Configuration (Recommended)
```
PORT=5000
NODE_ENV=production
```

### ❌ Optional - Cloudinary (only if you upload images)
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### ❌ Optional - Google OAuth (only if you use Google login)
```
GOOGLE_CLIENT_ID=your_google_client_id
```

### ❌ Optional - Email Configuration (only if you send emails)
```
EMAIL_PROVIDER=smtp
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_NAME=Certifurb Admin
SMTP_HOST=webmail.logisol.tech
SMTP_PORT=587
SMTP_SECURE=false
```

### ❌ Optional - Daily.co (only if you use video calls)
```
DAILY_API_KEY=your_daily_api_key
```

## Render Setup Steps

1. **Create a new Web Service** in Render
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
   - **Root Directory:** Leave empty (or set to `backend` if deploying only backend)
4. **Add all environment variables** from above
5. **Deploy!**

## Important Notes

- ✅ **No database password needed!** The Supabase client uses API keys only
- The server will automatically use the Supabase URL and keys you provide
- Make sure your Supabase project allows connections from Render's IP addresses
- For production, update CORS origins in `server.js` to include your Render URL

## Testing After Deployment

### 1. Test Locally First

Before deploying, test the Supabase connection locally:

```bash
cd backend
npm run test:supabase
```

This will test:
- ✅ Supabase client connection
- ✅ Querying users table
- ✅ Querying products table
- ✅ Insert capability (if tables exist)

### 2. Test Server Endpoints

Start the server locally:
```bash
cd backend
npm run dev
```

Then test these endpoints:

**Health Check:**
```bash
curl http://localhost:5000/api/health
```

**Supabase Connection Test:**
```bash
curl http://localhost:5000/api/test-supabase
```

**Get Users:**
```bash
curl http://localhost:5000/api/users
```

**Get Products:**
```bash
curl http://localhost:5000/api/products
```

### 3. Test After Deployment on Render

Once deployed, test your Render URL:

**Health Check:**
```
https://your-render-url.onrender.com/api/health
```

**Supabase Connection Test:**
```
https://your-render-url.onrender.com/api/test-supabase
```

**Get Users:**
```
https://your-render-url.onrender.com/api/users
```

### 4. Check Render Logs

In Render dashboard → Logs, you should see:
- ✅ "Supabase client initialized"
- ✅ "Pool.query() now uses Supabase client (no password required!)"
- ✅ "Supabase client connected successfully"

If you see errors, check:
- Environment variables are set correctly
- Supabase project is active
- CORS settings in Supabase dashboard
