const express = require("express");

const https = require("https");

const app = express();

app.get("/",function(req,res){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=delhi,India&APPID=7793601142131e844521fc537e7b9316";
    https.get(url,function(response){
        console.log(response);
    })
    res.send("server is running baby");
})



app.listen(8000, function(){
    console.log("server running at 8000");
})