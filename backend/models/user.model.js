import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
     {
          username: {
               type: String,
               required: [true, "Username is required !"],
          },
          name: {
               type: String,
               required: [true, "Username is required !"],
          },
          bio: {
               type: String,
               required: [true, "Username is required !"],
          },
          image: {
               type: String,
               required: false,
          },
     },
     {
          timestamps: true,
     }
);

const User = mongoose.model("User", userSchema);
//export const User = mongoose.model("User", userSchema); //named import

export default User;
