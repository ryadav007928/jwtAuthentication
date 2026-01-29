const express=require("express")
const app=express();
const Jwtauth=require("./middleware/Auth")
const PORT=5000;
const {Connection}=require("./config/MongoDB")
app.use(express.json());
const router=require("./router/user");

app.use("/",router)





Connection()
app.listen(PORT,()=>{
    console.log("server is runnin on port 5000")
});