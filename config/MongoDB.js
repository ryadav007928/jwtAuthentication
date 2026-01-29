const mongoose=require("mongoose");


async function Connection() {
   await mongoose.connect("mongodb+srv://Sumit9625:GQzdSIuPymr3dZSD@sumit.xro5h.mongodb.net/jwtWork").then(()=>{
        console.log("MongoDB connected succsessfuly")
    }).catch((e)=>{
 console.log(e)
    })
};

module.exports={Connection};