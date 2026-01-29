const mongoose=require("mongoose");

const usershcema=new mongoose.Schema({

    name :{
        type: String,
        require:true,
        Unique:true
    },
      email :{
        type: String,
        require:true,
        Unique:true
    },

      passsword :{
        type: String,
        require:true,
        
    },
      role :{
        type: String,
        require:true,
        
    }
},{timestamps:true})

const UserModel=mongoose.model("user",usershcema);
module.exports=UserModel;