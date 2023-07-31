import {Router,Request,Response} from "express";

const app=Router()


app.get('/',(req,res)=>{
    res.json({status:true,message:"v111"})
})


export const Routerv1=app