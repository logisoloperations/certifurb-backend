# Certifurb Backend - Simple Setup

Simple Express.js backend to connect to your existing SQL Server database using Windows Authentication.

## Quick Setup

1. **Install dependencies:**
   ```bash
   cd app/backend
   npm install
   ```

2. **Create .env file:**
   ```env
   DB_SERVER=localhost
   DB_NAME=Certifurb
   DB_PORT=1433
   PORT=5000
   
   # Optional: Only needed if connecting to a different domain
   # DB_DOMAIN=your_domain
   # DB_USERNAME=your_username
   # DB_PASSWORD=your_password
   ```

3. **Start the server:**
   ```bash
   npm run dev
   ```

## Windows Authentication Setup

This backend uses Windows Authentication to connect to SQL Server. Make sure:

- Your SQL Server instance is configured to allow Windows Authentication
- The user running the Node.js application has access to the database
- If running on a different machine, you may need to specify domain credentials in the .env file

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID  
- `GET /api/products/search/:name` - Search products by name
- `GET /api/health` - Health check

## Test the API

Open your browser or use curl:

```bash
# Get all products
http://localhost:5000/api/products

# Get specific product
http://localhost:5000/api/products/01

# Search products
http://localhost:5000/api/products/search/Thinkpad

# Health check
http://localhost:5000/api/health
```

## Troubleshooting

If you get connection errors:

1. **Check SQL Server Configuration:**
   - Ensure Windows Authentication is enabled
   - Verify SQL Server Browser service is running
   - Check if TCP/IP is enabled in SQL Server Configuration Manager

2. **Check User Permissions:**
   - The Windows user running the app needs database access
   - Grant appropriate permissions in SQL Server Management Studio

3. **Network Issues:**
   - Verify the server name and port
   - Check Windows Firewall settings

The server will connect to your existing `Certifurb` database and fetch data from the `Product` table using Windows Authentication. 