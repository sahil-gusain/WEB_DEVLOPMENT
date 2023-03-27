//expressjs.com

const express = require("express");

const app = express();

app.listen(8000,function(){
    console.log("sever running at 8000");
});

app.get("/",function(req,res){
    // console.log(req);
    res.send("<h1>hello world</h1>");
})

app.get("/contacts",function(req,res){
    res.send("<h1>contact me : sahil@gmail.com</h1>");
})

app.get("/about",function(req,res){
    res.send("<h1>This website is made by sahil Gusain</h1>");
})
