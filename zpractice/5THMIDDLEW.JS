const express=require("express");
const app=express();




//HERE I HAVE WRITTEN ALL HTE MIDDLEWARE CODE IN DIFFERENT FILE , AND NOW OF CODE 
// IS LOOKING LIKE VERY STRUCTURED WAY .   
 
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



//----------------------------------------------------------------------------------


// GOOD WAY OF WRITTING MIDDLEWARE , FIRST OF ALL WE WILL CREATE A  MIDDLEWARE 
// AND IN THAT WE WILL WRITE AUTH CODE . 
// THEN AFTER THAT WE WILL CREATE DIFF-DIFF REQ HANDLES WITH USING ROUTE OF MIDDLEWARE 
// CODE . SO IT WILL AUTOMATICALLY CHECK THAT AUTH CODE (IF WE RUN ANY REQ-HANDLER )

// IF REQ-HANDLER DOES NOT HAVE THTA ROUTE NAME , THEN IT WILL NOT GO FOR CHECKING 
// AUTH PART ;


// Middleware 2: Authorization Check
//Handle user authentication for all admin routes using middlewares
//  (all the routes that is starting with /admin)

// app.use("/admin",(req,res,next)=>{
//     console.log("auth process started ");
//     const token="xydz";
//     const isAdmin=token==="xyz";
//     if(!isAdmin){
//         res.status(401).send("unauthorized request ");
//     }
//     else{
//         next();
//     }
// })
// app.get("/user",(req,res)=>{
//     res.send("here i am checking ");
// })
// // THIS /USER WILL NOT CHECK THE AUTH PART CODE . 



// app.get("/admin/delete",(req,res)=>{
//     res.send("user deleted ");
// })

// app.get("/admin/add",(req,res)=>{
//     res.send("user added ");
// })


// -----------------------------------------------------------------------------


// HERE BELOW WE CAN SEE THAT THE WAY WE HAVE WRITTEN THIS . WE HAVE USED THIS 
// AUTH PART IN EACH REQ HANDLER , IT IS NOT GOOD THING TO CHECKING AUTH IN EACH 
// REQ HANDLER . 

// app.get("/admin/alldata",(req,res)=>{
//     //Login of checking if the req is authorized 
//     const token = "xcyz";
//     const isAdmin=token==="xyz";
//     if(isAdmin){
//         res.send("All data sent ");
//     } else{
//         res.status(401).send("Unauthorized request ");
//     }
// }) ;
// app.get("/admin/delete",(req,res)=>{
//     //Login of checking if the req is authorized 
//     const token = "xyz";
//     const isAdmin=token==="xyz";
//     if(isAdmin){
//         res.send("delete the data  ");
//     } else{
//         res.status(401).send("Unauthorized request ");
//     }
// })




// -----------------------------------------------------------------------
// for running second , we have to use==>  "next"


// here first one is the middleware, similarly second one is also middleware, 
// and last third one is request handler , because it send the data (responding).

// HERE BELOW WRITTEN POART IS THE 



// app.use("/user",
//     (req,res,next)=>{
//          console.log("first");
//         // res.send("first");
//         next();
//     },
//     (req,res,next)=>{
//         console.log("second");
//        next();
//     },
//     (req,res,next)=>{
//         console.log("second");
//        res.send("third");
//     },
    
// )


   
app.listen(3000,()=>{
    console.log("server is successfully litening on port 3000..... ");
});
