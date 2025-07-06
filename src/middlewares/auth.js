const User = require("../models/user");
const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).send("Please login!");
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    const { _id } = decodedToken;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

module.exports = {
  userAuth,
};


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