const express = require("express");

const app = express();

app.listen(8000,function(){
    console.log("sever running at port 80000");
})

app.get("/",function(req,res){
    res.send("<h1>hello world</h1>");
})