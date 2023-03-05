const express=require('express');
const clc=require('cli-color');
const mongoose=require('mongoose');
require('dotenv').config();



const app=express();
//Port dynamic
const PORT=process.env.PORT;

//file-imports
const db=require('./db');
//home route
app.get('/',(req,res)=>{
    res.send('this is blogging assistment');
})


//server listner
app.listen(PORT,()=>{
    console.log(clc.bold('server is listning now at '));
    console.log(clc.underline(`http://localhost:${PORT}`));
})