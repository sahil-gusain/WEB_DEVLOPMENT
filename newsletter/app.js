const express = require("express");

const bodyParser =require("body-parser");

const request = require("request");

const app=express();

app.get("/",function(req,res){
    res.send("server is running baby");
})

app.listen(8000);