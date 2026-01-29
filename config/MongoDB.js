const mongoose=require("mongoose");


async function Connection() {
   await mongoose.connect("mongodb://localhost:27017/JWTAUTH").then(()=>{
        console.log("MongoDB connected succsessfuly")
    }).catch((e)=>{
 console.log(e)
    })
};

module.exports={Connection};