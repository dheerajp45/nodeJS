const http = require("http");
const fs = require("fs");
const url = require("url");

let i = 0
const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end()
    // i++;
    // console.log("new req recevied "+i+" time") ;
    const log = `new request received on --> ${new Date().toLocaleString()} to ${req.url} and the method is ${req.method}\n`
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    
    fs.appendFile("log.txt",log,()=>{
        // if(req.url==="/dheeraj")
        if(myUrl.pathname==="/dheeraj")
        {
            res.end("dheeraj p 45")
        }
        else if (myUrl.pathname==="/youtube"){
            res.end("welcome to youtube")
        }
        else if (myUrl.pathname==="/"){
            res.end("welcome to homepage")
        }
        else
        {
            res.end("404 not found")
        }
        
    })
    
});

myServer.listen(8000,()=>{
    console.log(("server started on port 8000"));
    
})

