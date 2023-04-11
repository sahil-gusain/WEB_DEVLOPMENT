const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.get("/",function (req,res) {
    const today = new Date("April 09, 2023 01:15:00");
    var day = today.getDay()
    if(day!=0 && day!=6){
    res.send("<h1>boo! I have to work today ");
    }
    else res.send("heee hayy")
  })

app.listen(8000,function(req,res){
    console.log("working on port 8000");
});