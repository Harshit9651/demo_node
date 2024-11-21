const express = require('express');
const app = express();
require('dotenv').config()

app.listen(process.env.PORT,()=>{
    console.log(`app listing on port number ${process.env.PORT}`)
})
app.get('/',(req,res)=>{
    res.send("hii this is ec2 server")
})