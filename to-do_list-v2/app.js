const express = require("express");

const bodyParser = require("body-parser");
const date = require(__dirname + "//date.js");
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

main().catch(err=> console.log(err));

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/todolistDB");
  console.log("connected to the database");
};

var listitems = [];

const listSchema = new mongoose.Schema({
  name : String,
});

const items = new mongoose.model('list',listSchema);

const item1 = new items({
  name : "welcome to the to-do list",
});

const item2 = new items({
  name : "press + to add items in the list",
});

const item3 = new items({
  name : "<-- hit this to delete the item",
});



app.post("/",function(req,res){
      const newitem = req.body.sample;

      const docnewitem =new items({
        name : newitem,
      });
      docnewitem.save();
      res.redirect("/");

})


app.get("/",function (req,res) {
  items.find().then(function(item){
    
    if(item.length === 0){
      items.insertMany([item1,item2,item3]).then(function(){
        console.log("succesfully added 3 items");
      })
      res.redirect("/");
    }else{
           // console.log(day);
     const currday = date.getDay();
     // console.log(currday);
     res.render("list",{kindofday : currday,listarray : item});
      }
    }
    )   
   
  });

app.listen(8000,function(req,res){
    console.log("working on port 8000");
});