const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())

app.get("/",(req,res)=>{
    res.json({notification:101,message:115})
})

app.listen(3000,()=>{
    console.log("server started!!!!");
})