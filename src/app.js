const express=require("express");
const app=express();

const { adminAuth, userAuth }=require("./middlewares/auth.js")



app.use("/admin",adminAuth);


app.get("/user",userAuth, (req,res)=>{
    res.send("here i am checking for user  ");
})


app.get("/user/login", (req,res)=>{
    res.send("you can login , here no auth , because everyone can go to this login page    ");
})



app.get("/admin/delete",(req,res)=>{
    res.send("user deleted ");
})

app.get("/admin/add",(req,res)=>{
    res.send("user added ");
})



   
app.listen(3000,()=>{
    console.log("server is successfully litening on port 3000..... ");
});
