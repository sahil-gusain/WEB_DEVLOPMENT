const express = require("express");

const https = require("https");

const bodyParser =require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"//index.html");
    // res.send("server is running baby");
})

app.post("/",function(req,res){
    const country = req.body.country_name;
    const units = "metric";
    const Api = "";

    url = "https://api.openweathermap.org/data/2.5/weather?q="+country+"&APPID="+Api+"&units="+units;
    https.get(url,function(response){

    response.on("data",function(data){
        const weather_data = JSON.parse(data);
        const icon = weather_data.weather[0].icon;
        const iconurl = "https://openweathermap.org/img/wn/" + icon +"@2x.png";

        res.write("<h1> weather in "+country +" is "+weather_data.main.temp+"</h1>")
        res.write("<h2> weather description is "+ weather_data.weather[0].description+"</h2");
        res.write( "<img src="+iconurl+"></img>");
        res.send();

    })
})


})




app.listen(8000, function(){
    console.log("server running at 8000");
})