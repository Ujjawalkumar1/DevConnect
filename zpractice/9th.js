

// LOGIN API 
app.post("/login",async(req,res)=>{
    try{
      const{emailId,password}=req.body;
      const user=await User.findOne({emailId:emailId});
      if(!user){
        throw new Error("invalid credentials");
      }
      const isPasswordValid=await bcrypt.compare(password,user.password);
      if(isPasswordValid){
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
  
  