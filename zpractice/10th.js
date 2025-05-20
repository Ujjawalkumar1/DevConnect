// OLD LOGIN AND /PROFILE CODE (WITH RANDOM TOKEN )



// LOGIN API 
app.post("/login",async(req,res)=>{
  try{
    const{emailId,password}=req.body;
    // checking user in db 
    const user=await User.findOne({emailId:emailId});
    if(!user){
      throw new Error("invalid credentials");
    }

    // COMPARING PASSWORD 
    const isPasswordValid=await bcrypt.compare(password,user.password);


//cookie code here := 
    if(isPasswordValid){

      res.cookie("token","abdbuidgfurgbuifvbiuvfvbu");



      res.send("login successfully !!!! ");
    }
    else{
      throw new Error("Invalid credentials ")
    }
  }

  catch(err){
    res.status(400).send("ERROR : " + err.message);
  }

})



app.get("/profile",async(req,res)=>{
  const cookies=req.cookies;
  console.log(cookies);
  res.send("reading cookies");
});






//---------------------------------------------------------------------------------------------------

// NEW LOGIN AND /PROFILE CODE 


