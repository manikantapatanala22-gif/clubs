import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



const app = express();

//db connection
const dbConnection = async () => {
  try{
  await mongoose.connect(process.env.MONGOURI)
    console.log("DB Connected!");
  }
  catch(error){
    console.log(error.message);
  }
 
}

dbConnection()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes

import AdminRoutes from './routes/user.route.js'
import EventRoutes from './routes/event.route.js'
import ClubRoutes from './routes/club.route.js'

app.use('/api/users', AdminRoutes)
app.use('/api/events', EventRoutes)
app.use('/api/clubs', ClubRoutes)

//running on the port
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`running on http://localhost:${port}/`);
});


