// const { log } = require("console");
const fs = require("fs")

console.log("blocking 1");
// synchronous call -- blocking req
const block_res = fs.readFileSync('./abc.txt',"utf-8")
console.log(block_res);

console.log("blocking 2");
// text from blocking request --> observe carefully u first see data oof this file then after u can see the other output but in non blocking it is dfferent 

console.log("non blocking 1");
// asynchronous call -- non blocking req
fs.readFile("./xyz.txt","utf-8",(err,non_block_res)=>{
    console.log(non_block_res);
    
});
// text from non blocking request --> but here ot wont block any of the code u can both 1 & 2 of non blocking 
console.log("non blocking 2");