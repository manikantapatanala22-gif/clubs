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


app.use((req, res, next) => {
  console.log("middleware")
  next();
});


app.use((req, res, next) => {
  console.log("middleware")
  return res.json({message:"hey"})
});



//routes

import AdminRoutes from './routes/user.route.js'
import EventRoutes from './routes/event.route.js'

app.use('/api/users', AdminRoutes)
app.use('/api/events', EventRoutes)

//running on the port
const port = process.env.PORT || 3000 
app.listen(port, () => {
  console.log(`running on http://localhost:${port}/`);
});


