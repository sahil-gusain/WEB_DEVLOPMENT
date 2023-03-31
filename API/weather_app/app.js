const express = require("express");

const https = require("https");

const app = express();

app.get("/",function(req,res){
    url = " ";
    https.get(url,function(response){
        console.log(response);
    })
    res.send("server is running baby");
})



app.listen(8000, function(){
    console.log("server running at 8000");
})