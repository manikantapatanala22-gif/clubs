import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
     {
          username: {
               type: String,
               required: [true, "Username is required !"],
               unique: true, 
          },
          email: {
               type: String,
               required: [true, "Email is required !"],
               unique: true,
               lowercase: true,
          },
          password: {
               type: String,
               required: [true, "Password is required !"],
          },
          name: {
               type: String,
               required: [true, "Name is required !"],
          },
          bio: {
               type: String,
               required: false,
          },
          image: {
               type: String,
               required: false,
          },
          isAdmin: {
               type: Boolean,
               required: true,
               default: false,
          }
     },
     {
          timestamps: true,
     }
);

const User = mongoose.model("User", userSchema);

export default User;