const express=require("express");
const connectDB=require("./config/database")
const app=express();

//const { ClientSession } = require("mongodb");

const cookieParser=require("cookie-parser")
// middleware .
app.use(express.json());
app.use(cookieParser());



const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");





app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()  
  .then(()=>{
    console.log("database connected successfully ");

       
      app.listen(3000,()=>{
      console.log("server is successfully litening on port 3000..... ");
       });
  })   
  .catch((err)=>{
    console.error("Database connection failed. Error:", err);
  });
  