const http = require("http");
const fs = require("fs");
let i = 0
const myServer = http.createServer((req,res)=>{
    i++;
    console.log("new req recevied "+i+" time") ;
    const log = `new request received on --> ${new Date().toLocaleString()}\n`
    fs.appendFile("log.txt",log,()=>{
        res.end("hi from the server")
    })
    
});

myServer.listen(8000,()=>{
    console.log(("server started on port 8000"));
    
})