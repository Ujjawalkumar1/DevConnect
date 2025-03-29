const express=require("express");
const app=express();


app.get("/user/:userId/:name/:password",(req,res)=>{
   console.log(req.params);
})

app.post("/user",(req,res)=>{
   console.log("req.query");
})





// // app.use((req,res)=>{
// //     res.send("hello world ");
// // })



// app.get("/user",(req,res)=>{
//     res.send("hello from the server ");
// })



// app.post("/user",(req,res)=>{
//     res.send(" data successfully saved to the DB ");
// })

// app.delete("/user",(req,res)=>{
//     res.send("deleted successfull");
// })




// // app.use("/hello",(req,res)=>{
// //     res.send("hello welcome to my project area ");
// // })

// // app.use("/test",(req,res)=>{
// //     res.send("hello from the server   ");
// // })

// // app.use("/hello",(req,res)=>{
// //     res.send("hello Ujjawal Kumar  ");
// // })



app.listen(3000);
