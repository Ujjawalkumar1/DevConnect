const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength:3,
        maxLength:20
    },
    lastName:{
        type: String,
    },
    emailId: {
        type: String,
        required:true,
        unique: true,
        index:true,
        lowercase:true,
        trim:true

        
    },
    password:{
        type: String,
        required:true,
        
    } ,
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        trim:true,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("not a valid gender")
            }
        }
    },
    about:{
        type:"String",
        default:"htis is for all"
    },
    skills:{
        type:[String]
    }
},
{
    timestamps:true
}
);

const userModel=mongoose.model("user",userSchema);
module.exports=userModel;
