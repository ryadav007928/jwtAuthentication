const JWT=require("jsonwebtoken");

const Secrest_key="my_super_secret_jwt_key_123";

async function Jwtauth(req,res,next) {

    const  authHeader = req.headers.authorization;
    if(!authHeader) return res.status(401).json({msg:"headers authorization is required"})
      
    const token = authHeader.split(' ')[1];
    console.log(token)

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try{

    const decode=JWT.verify(token,Secrest_key);
     console.log(decode)
    req.user=decode
next();
  }
  catch(e){(e)=>{
 return res.status(500).json({ message: e });
  }}
    

}

const Device_Check= async (req,res,next) => {
  const Details=req.user.id

}

module.exports=Jwtauth;