const mongoose=require('mongoose');
const clc=require('cli-color');


//connection for mongodb
mongoose.connect(process.env.uri)
.then((res)=>{
    console.log(clc.yellow('mongodb is connected'));
})
.catch((err)=>{
    console.log(clc.red('problem with connecting mongodb'));
})