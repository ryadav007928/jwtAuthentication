const UserModel=require("../model/user");
const JWT=require("jsonwebtoken");
const Secrest_key="my_super_secret_jwt_key_123";


async function handleRegistration(req, res) {
    
    const {name,email,password,role}=req.body
    if (!name  ||  !email || !password  ||  ! role) return res.status(401).json({msg:"all fields are reuqired"})

try{

    const user= await UserModel.create({
        name,
        email,
        password,
        role})

    return  res.status(201).json({msg:"success",id:user.id})

}
catch(e){
   return res.status(501).json({msg:e})
}
}

async function handlelogin(req,res) {
  
 
     const {email,password}=req.body

      if ( !email || !password   ) return res.status(401).json({msg:"all fields are reuqired"})
try{
const user=await UserModel.findOne({email})
console.log(user)
if ( !user  ) return res.status(401).json({msg:"user not Found"})

    const paylod ={
    
    id: user.id,
    username: user.name,
    role: user.role
    }
    
const token = JWT.sign(paylod,Secrest_key,{ expiresIn: '10h'})
 return res.status(200).json({msg:"login successfully",token:token}) 
}
catch(e){
   return res.status(501).json({msg:e})
}

}

async function handleProfile(req,res) {
   
    try{
   const id=req.user.id
    const user =await UserModel.findById(id)
    
 return res.status(200).json({msg:"success :",Profile:user}) 
}
catch(e){
   return res.status(501).json({msg:e})
}
}

async function name(params) {
    
}

module.exports={handleRegistration,handlelogin,handleProfile}