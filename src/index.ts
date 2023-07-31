import express,{Request,Response} from "express";
import dotenv from "dotenv";
import { Routerv1 } from "./Router/V1/app";

dotenv.config()
const port =process.env.PORT || 5000
const app=express()

app.get('/',(req,res)=>{
    res.json({status:true,message:"hey"})
})

app.use('/api/v1',Routerv1)

app.listen(port,()=>{
    console.log(`app litsenig at http://localhost:${port}`);
    
})
