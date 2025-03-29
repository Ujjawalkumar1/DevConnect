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