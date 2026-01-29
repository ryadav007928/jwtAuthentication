const express=require("express")
const router=express().router
const {handleRegistration,handlelogin,handleProfile}=require("../controller/user")
const Jwtauth=require("../middleware/Auth")


router.post("/user/registration",handleRegistration)
router.post("/user/login",handlelogin)
router.get("/user",Jwtauth,handleProfile)


module.exports=router;