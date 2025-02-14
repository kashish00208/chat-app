import { json } from 'express';

const nodemailer = require('nodemailer');
export default function(req,res){
    const transportar = nodemailer.createTransport({
        port : 465,
        host : "smtp.gmail.com",
        secure:true,
        auth :{
            user : "gkashish083@gmail.com",
            pass : "Arushi@#123",
        },
    })
    const mailData = {
        from:"Chat app",
        to : req.body.email,
        text : req.body.message,
    };
    transportar.sendMail(mailData, function(err,info){
        if(err){
            return res.status(500).json({message:`An error occured ${err}`})
        }else{
            res.status(200).json({message:info})
        }
    }) 
}