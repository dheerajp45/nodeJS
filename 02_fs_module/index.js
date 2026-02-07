const fs = require("fs")

// synchronous call
fs.writeFileSync('./abc.txt','dheeraj p 45')

// asynchronous call
fs.writeFile("./xyz.txt","dheeraj github linkedin",(err)=>{});

const res= fs.readFileSync("./contacts.txt","utf-8");
console.log(res);


fs.readFile("./info.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error:",err);
    }
    else{
        console.log(result);
    }
})

// fs.readFile cannot return the values from the file as readFileSync does
// fs.readFileSync can return values into a varibale
// as fs.readFile cannot return we log the values through the call back fucntion
// and in fs.writeFile and fs.writeFileSync the case is somewhat different



fs.appendFileSync("./date.txt",`${new Date().toLocaleString()}\n`);

fs.cpSync("./date.txt","./copy.txt");

// fs.unlink("./dhee.txt")  -> to delete the file throws an error if file is not available