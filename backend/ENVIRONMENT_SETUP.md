# Backend Environment Variables

## Required Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Database Configuration
MONGOURI=mongodb://localhost:27017/clubs

# Server Configuration
PORT=3000

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# CORS Configuration (Frontend URL)
VITE_BASE_URL=http://localhost:5173

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

## Environment Variables Usage

The following files use environment variables:

### server.js

- `process.env.VITE_BASE_URL` - CORS origin configuration
- `process.env.MONGOURI` - MongoDB connection string
- `process.env.PORT` - Server port

### middleware/auth.middleware.js

- `process.env.JWT_SECRET` - JWT token verification

### controllers/auth.controller.js

- `process.env.JWT_SECRET` - JWT token generation

### controllers/admin.controller.js

- `process.env.JWT_SECRET` - JWT token generation

### config/cloudinary.js

- `process.env.CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `process.env.CLOUDINARY_API_KEY` - Cloudinary API key
- `process.env.CLOUDINARY_API_SECRET` - Cloudinary API secret

## Production Security Notes

1. **JWT_SECRET**: Use a strong, random secret (at least 32 characters)
2. **MONGOURI**: Use MongoDB Atlas or another secure database service
3. **Cloudinary**: Use production credentials with proper permissions
4. **CORS**: Update VITE_BASE_URL to your production frontend URL
5. **HTTPS**: Ensure all production URLs use HTTPS
