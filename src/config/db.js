import mongoose from "mongoose";
 const conectDB =async () =>{
 mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

 }

 export default conectDB;