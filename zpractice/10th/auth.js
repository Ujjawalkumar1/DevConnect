// before 10th lecture

const adminAuth=(req,res,next)=>{
    console.log("auth process started ");
    const token="xyz";
    const isAdmin=token==="xyz";
    if(!isAdmin){
        res.status(401).send("unauthorized request ");
    }
    else{
        next();
    }
};

const userAuth=(req,res,next)=>{
    console.log("auth process started for user  ");
    const token="xikyz";
    const isAdmin=token==="xyz";
    if(!isAdmin){
        res.status(401).send("unauthorized request ");
    }
    else{
        next();
    }
};



module.exports={
    adminAuth,
    userAuth
}




//==============================================================================

// now in 10th lecture 

const User=require ("../models/user");
const jwt=require("jsonwebtoken");

const userAuth=async(req, res, next)=>{
    try{
        // getting token and valid it 
        const{token}= req.cookies
        if(!token){
            throw new Error("invalid token");
        }
        const decodedToken =await jwt.verify(token,"DEV@Tinder$790")
        const{_id}=decodedToken;
        //getting user
        const user= await User.findById(_id)
        if(!user){
            throw new Error("User not found ");
        }
        //sending user
        req.user=user
        next();
    }
    catch(err){
        res.status(400).send("Error " + err.message )
    }
};

module.exports={
    userAuth
}



// const adminAuth=(req,res,next)=>{
//     console.log("auth process started ");
//     const token="xyz";
//     const isAdmin=token==="xyz";
//     if(!isAdmin){
//         res.status(401).send("unauthorized request ");
//     }
//     else{
//         next();
//     }
// };

// const userAuth=(req,res,next)=>{
//     console.log("auth process started for user  ");
//     const token="xikyz";
//     const isAdmin=token==="xyz";
//     if(!isAdmin){
//         res.status(401).send("unauthorized request ");
//     }
//     else{
//         next();
//     }
// };



// module.exports={
//     adminAuth,
//     userAuth
// }