# Render Deployment - Simple Guide

## ✅ REQUIRED Environment Variables (Only These!)

You **MUST** set these 3 variables for the server to work:

```
SUPABASE_URL=https://egkjvbjdwcgjdizivdnz.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVna2p2Ympkd2NnamRpeml2ZG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NDg1NTcsImV4cCI6MjA4NTAyNDU1N30.jlaKxZmRAkr8LUieYNtsZOkYFtTm7P3olBgaK-1ELXg
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVna2p2Ympkd2NnamRpeml2ZG56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTQ0ODU1NywiZXhwIjoyMDg1MDI0NTU3fQ.ydHjzvDH7FlmXyTMIaDoKQGMbgVbQCRUUd7eM1beyEU
```

That's it! Just these 3. 🎉

## ⚙️ Optional - Server Config (Recommended)

```
PORT=5000
NODE_ENV=production
```

## ❌ What About All The Other Stuff?

**You DON'T need these right now!** The server will work without them:

- ❌ **Cloudinary** - Only needed if you upload images. Server has fallback values.
- ❌ **Google OAuth** - Only needed for Google login. Server has a default client ID.
- ❌ **Email** - Only needed for sending emails. Server will just skip email features.
- ❌ **Daily.co** - Only needed for video calls. Server will skip video features.

**You can add these later when you need them!**

## 🚀 Render Setup Steps

1. **Create a new Web Service** in Render
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
   - **Root Directory:** Leave empty
4. **Add ONLY the 3 Supabase environment variables** (see above)
5. **Add PORT and NODE_ENV** (optional but recommended)
6. **Deploy!**

## ✅ Testing

After deployment, test:
- `https://your-render-url.onrender.com/api/health`
- `https://your-render-url.onrender.com/api/test-supabase`

That's it! Simple and clean. 🎯
