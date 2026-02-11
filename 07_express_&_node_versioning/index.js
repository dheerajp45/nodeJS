const http = require("http");

const express = require('express')

const app = express();

app.get("/",function(req,res){
    return res.send("hello word from home page")
})


app.listen(8000,()=>console.log("server started on port 8000"));


// const myServer = http.createServer(app)
// myServer.listen(8000,()=>{
//     console.log(("server started on port 8000"));
    
// })

