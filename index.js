require('dotenv')
const express = require("express")

const app = express()
const PORT =4000;

app.get('/',(req,res)=>{
    res.send("Hello Express")
})

app.listen(process.env.PORT,()=>{
    console.log(`Port running on ${PORT}`);
})