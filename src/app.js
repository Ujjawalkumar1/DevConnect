const express=require("express");
const connectDB=require("./config/database")
const app=express();
require("dotenv").config(); // in app.js only



const cors=require("cors");

//const { ClientSession } = require("mongodb");

const cookieParser=require("cookie-parser")
// middleware .

app.use(cors({
origin : "http://localhost:5173",      //  "http://localhost:5173/", this is wrong dont use / at the end
credentials: true,
})
);

app.options("*", cors({
  origin: "http://localhost:5173",
  credentials: true
}));



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
  