const express=require("express");
const connectDB=require("./config/database")
const app=express();
//const User=require("./models/user");
//const { validateSignUpData } = require("./utils/validation");
//const bcrypt=require("bcrypt");
const { ClientSession } = require("mongodb");

const cookieParser=require("cookie-parser")
// middleware .
app.use(express.json());
app.use(cookieParser());

//const jwt=require("jsonwebtoken");
//const { userAuth } = require("./middlewares/auth");


// app.post("/signup", async(req , res)=>{
//   //1 . validation of data 
//   try{
     
//     validateSignUpData(req);
//     // console.log(req.body);
//     // const user=new User(req.body);

//     //2. encrypt the password 
//     // const password=req.body.password;   correct synntax is 
//      const {firstName,lastName,emailId,password}=req.body;
//     const passwordHash=await bcrypt.hash(password,10);
//     console.log(passwordHash);

//     //3. creating a new 
    
//     const user=new User({
//       firstName,
//       lastName,
//       emailId,
//       password:passwordHash
//     })
//         await user.save();
//         res.send("user created ");
//     }
//     catch(err){
//         res.status(400).send("Error saving the user: "+ err.message);
//     }
// });

// LOGIN API 
// app.post("/login",async(req,res)=>{
//   try{
//     const{emailId,password}=req.body;
//     // checking user in db 
//     const user=await User.findOne({emailId:emailId});
//     if(!user){
//       throw new Error("invalid credentials");
//     }

//     // COMPARING PASSWORD 
//    // const isPasswordValid=await bcrypt.compare(password,user.password);
//    const isPasswordValid = await user.validatePassword(password);


// //cookie code here := 
//     if(isPasswordValid){

//       // CREATING TOKEN 
      
//       // HERE I HAVE USED getJWT THAT HAS BEEN CREATED IN /MODELS/USER.JS 
//       const token = await user.getJWT();

//      // const token =await  jwt.sign({_id:user._id},"DEV@Tinder$790",{expiresIn : '7D'});

//       // Adding token to cookie and send back to client along with response 

//       res.cookie("token",token,{expires : new Date(Date.now() + 8*3600000),

//        });

//       res.send("login successfull");
//       // res.cookie("token","abdbuidgfurgbuifvbiuvfvbu");
//       // res.send("login successfully !!!! ");
//     }
//     else{
//       throw new Error("Invalid credentials ")
//     }
//   }

//   catch(err){
//     res.status(400).send("ERROR : " + err.message);
//   }

// })



// NEW UPDATED /PROFILE 

// app.get("/profile",userAuth,async(req,res)=>{
//   try{
//     const user=req.user;
//     res.send(user);
//   }
//   catch(err){
//     res.status(400).send("Error : " + err.message);
//   }
// });

// app.post("/sendConnectionRequest", userAuth, async(req,res)=>{
//   const user=req.user;
//   // sending a connection request 
//   console.log("sending a connection request ");
//   res.send(user.firstName + " sent the connection request ! ");

// })



// OLD /PROFILE
// app.get("/profile", userAuth, async(req,res)=>{
//   // const cookies=req.cookies;
//   // console.log(cookies);
//   // res.send("reading cookies");
 
//   try{
//     const cookies=req.cookies;
//     const{token} = cookies
//     if(!token){
//       throw new Error("invalid token ")
//     }

//     // decoding / validating token to get the payload back
//     const decodedToken = await jwt.verify(token,"DEV@Tinder$790");
//     const{_id}=decodedToken

//     // find user profile based on id stored in token 
     
//     console.log("logged in user is : " +_id);
//     const user= await User.findById(_id)
//     if(!user){
//       throw new Error("user does not exist")
//     }
//     res.send(user)
//   }

//   catch(err){
//     res.status(400).send("Error " + err.message);
//   }
// });










// delete the user 


// app.delete("/user",async(req,res)=>{
//   const userId=req.body.userId;
//   try{
//     const user=await User.findByIdAndDelete(userId);
//     res.send("user deleted")
//   }

//   catch(err){
//     res.status(400).send("error");
//   }

// });

// update user 


// app.patch("/user",async(req,res)=>{
//   const userId=req.body.userId;
//   const data=req.body;
//   try{ 
//     const ALLOWED_UPDATES=["userId","firstName","gender"];
//     const isUpdateAllowed=Object.keys(data).every((k)=> 
//       ALLOWED_UPDATES.includes(k)
//     );
//     if(!isUpdateAllowed){
//       throw new Error("Update not allowed");
//     }



//     const user=await User.findByIdAndUpdate({_id:userId},data,{returnDocument:"after"});
//     console.log(user);
//     res.send("user updated successfully ");
//   }

//   catch(err){
//     res.status(400).send(" update not allowed  "+ err.message);
//   }
// });



// app.get("/user", async(req,res)=>{
//   const userEmail=req.body.emailId;
//   try{
//     const users=await User.find({emailId: userEmail });
//     if(users.length===0){
//       res.status(404).send("User not found");
//     }
//     else{
//       res.send(users);
//     }
//   }
//   catch(err){
//     res.status(400).send("something went wrong ");
//   }
// })

// app.get("/feed", async(req,res)=>{
//   try{
//     const users=User.find({});
//     res.send(users);
//   }
//   catch(err){
//     res.status(400).send("something went wrong ")
//   }
// });



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
  