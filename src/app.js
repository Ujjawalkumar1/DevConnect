const express=require("express");
const connectDB=require("./config/database")
const app=express();
const User=require("./models/user")

app.post("/signup", async(req , res)=>{
    // creating a new instance of user model 
   const user=new User({
     firstName:"ujjawal",
    lastName:"kumar",
    emailId:"a@gmail.com",
    password:"sdkjfdjkuh",
});

try{
    await user.save();
    res.send("user created ");
}
catch(err){
    res.status(400).send("Error saving the user: "+ err.message);
}


});




connectDB()  
  .then(()=>{
    console.log("database connected successfully ");
       
      app.listen(3000,()=>{
      console.log("server is successfully litening on port 3000..... ");
       });
  })   
  .catch((err)=>{
    console.error("error is there ");
  })
