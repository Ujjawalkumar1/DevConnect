const express=require("express");
const connectDB=require("./config/database")
const app=express();
const User=require("./models/user")


// middleware .
app.use(express.json());

app.post("/signup", async(req , res)=>{
    // console.log(req.body);
    const user=new User(req.body);
    try{
        await user.save();
        res.send("user created ");
    }
    catch(err){
        res.status(400).send("Error saving the user: "+ err.message);
    }
});



// delete the user 
app.delete("/user",async(req,res)=>{
  const userId=req.body.userId;
  try{
    const user=await User.findByIdAndDelete(userId);
    res.send("user deleted")
  }

  catch(err){
    res.status(400).send("error");
  }

});

// update user 

app.patch("/user",async(req,res)=>{
  const userId=req.body.userId;
  const data=req.body;
  try{
    const user=await User.findByIdAndUpdate({_id:userId},data,{returnDocument:"after"});
    console.log(user);
    res.send("user updated successfully ");
  }

  catch(err){
    res.status(400).send("error is there ")
  }
});







app.get("/user", async(req,res)=>{
  const userEmail=req.body.emailId;
  try{
    const users=await User.find({emailId: userEmail });
    if(users.length===0){
      res.status(404).send("User not found");
    }
    else{
      res.send(users);
    }
  }
  catch(err){
    res.status(400).send("something went wrong ");
  }
})

app.get("/feed", async(req,res)=>{
  try{
    const users=User.find({});
    res.send(users);
  }
  catch(err){
    res.status(400).send("something went wrong ")
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
