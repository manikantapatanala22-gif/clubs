import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createProxyMiddleware } from "http-proxy-middleware";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5173;

// Serve static files from the dist directory
app.use(express.static(join(__dirname, "dist")));

// Proxy API requests to your backend
app.use(
  "/api",
  createProxyMiddleware({
    target: process.env.API_BASE_URL || "http://localhost:3000",
    changeOrigin: true,
  })
);

// Handle client-side routing - return index.html for all non-API routes
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
