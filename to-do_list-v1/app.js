const express = require("express");

const bodyParser = require("body-parser");
const date = require(__dirname + "//date.js");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

var listitems = [];


app.post("/",function(req,res){
       listitems.push(req.body.sample);
       res.redirect("/");
})


app.get("/",function (req,res) {
   
    // console.log(day);
    const currday = date.getDay();
    // console.log(currday);
    res.render("list",{kindofday : currday,listarray : listitems});
  })

app.listen(8000,function(req,res){
    console.log("working on port 8000");
});