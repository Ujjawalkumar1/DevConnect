// const mongoose= require("mongoose");

// const connectDB=async ()=>{
//     await mongoose.connect(
//         "mongodb+srv://namastedev:FYVfQBbOg7fNU5kA@namastenode.i7odqtt.mongodb.net/devTinder"
//     );
// };

// module.exports=connectDB;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_SECRET);
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Database connection failed. Error:", err);
  }
};

module.exports = connectDB;































// OLD WAY TO  CONNECT DATABASE 

// const mongoose= require("mongoose");

// const connectDB=async ()=>{
//     await mongoose.connect(
//         "mongodb+srv://namastedev:FYVfQBbOg7fNU5kA@namastenode.i7odqtt.mongodb.net/devTinder"
//     );
// };


// connectDB()
//   .then(()=>{
//     console.log("database connected successfully ");
       
  
//   })

//   .catch((err)=>{
//     console.error("error is there ");
//   })
