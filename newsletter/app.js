const express = require("express");

const bodyParser =require("body-parser");

const request = require("request");

const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"//signup.html");
})


app.post("/",function(req,res){
    res.send(req.body.first+" have been hacked");
})

app.listen(8000);