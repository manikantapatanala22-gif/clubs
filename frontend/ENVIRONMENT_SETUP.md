# Environment Variables Setup

## Frontend Environment Variables

Create a `.env` file in the frontend directory with the following variables:

```env
# Frontend Environment Variables
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_NAME=Clubs Platform
VITE_APP_VERSION=1.0.0

# Production URLs (uncomment and modify for production)
# VITE_API_BASE_URL=https://your-production-api.com
```

## Important Notes:

1. **Development Mode**: The API service uses relative URLs (empty baseURL) to work with Vite's proxy
2. **Production Mode**: The API service uses the full VITE_API_BASE_URL
3. **Vite Proxy**: In development, all `/api/*` requests are proxied to the backend server
4. **Environment Variables**: Only variables prefixed with `VITE_` are accessible in the frontend code

## Backend Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Database
MONGOURI=mongodb://localhost:27017/clubs

# Server Configuration
PORT=3000

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# CORS Configuration
VITE_BASE_URL=http://localhost:5173

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

## Production Considerations

1. **Security**: Use strong, unique secrets for JWT_SECRET
2. **Database**: Use MongoDB Atlas or another production database service
3. **CORS**: Update VITE_BASE_URL to your production frontend URL
4. **Cloudinary**: Use production Cloudinary credentials
5. **HTTPS**: Ensure all production URLs use HTTPS

## API Service

The frontend now uses a centralized API service (`src/services/api.js`) that provides:

- Automatic token injection
- Error handling and response interceptors
- Organized endpoint methods
- File upload support
- Retry mechanisms
- Batch request utilities

All API calls should now go through the `apiService` instead of direct axios/fetch calls.
