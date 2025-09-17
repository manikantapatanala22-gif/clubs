import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

//db connection
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("DB Connected!");
  } catch (error) {
    console.log(error.message);
  }
};

dbConnection();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
import AuthRoutes from './routes/auth.route.js';
import ClubRoutes from './routes/club.route.js';
import EventRoutes from './routes/event.route.js';
import OpeningRoutes from './routes/opening.route.js';
import AdminRoutes from './routes/admin.route.js';

// Public Routes (Visitors)
app.use('/api/clubs', ClubRoutes);
app.use('/api/events', EventRoutes);
app.use('/api/openings', OpeningRoutes);

// Auth Routes (Members & Admins)
app.use('/api/auth', AuthRoutes);

// Protected Routes (Club Members)
app.use('/api/club-members/events', EventRoutes);
app.use('/api/club-members/openings', OpeningRoutes);

// Protected Routes (Admin)
import { protect } from './middleware/auth.middleware.js';
app.use('/api/admin', protect, AdminRoutes);

//running on the port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`running on http://localhost:${port}/`);
});