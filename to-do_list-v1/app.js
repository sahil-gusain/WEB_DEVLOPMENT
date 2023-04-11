const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/",function (req,res) {
    const today = new Date();
    var day = today.getDay();
    var currday = "";
    // console.log(day);
    switch(day){
        case 0 : currday = "sunday";
                    break;
        case 1 : currday = "Monday";
                 break;
        case 2 : currday = "Tuesday";
                break;
        case 3 : currday = "Wedday";
                break;
        case 4 : currday = "Thursday";
                break;
        case 5 : currday = "Friday";
                break;
        case 6 : currday = "satday";
    }
    // console.log(currday);
    res.render("list",{kindofday : currday});
  })

app.listen(8000,function(req,res){
    console.log("working on port 8000");
});