const express = require("express");

const bodyParser =require("body-parser");

// const request = require("request");
const https = require("https");

const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"//signup.html");
})


app.post("/",function(req,res){
    const firstname = req.body.first;
    const lastname =req.body.lname;
    const email = req.body.email;

    var data={
      members : [
        {
            email_address : email,
            status : "subscribed",
            merge_field :{
                FNAME : firstname,
                LNAME : lastname
            }
        }
      ]
    }
    var jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/4cea9c113f";
 
    const options = {
      method : "POST",
      auth :"sahil07:4dd08824379bc87bb813474357a0b50d-us21"
    }

    const request = https.request(url,options,function(response){
      response.on("data",function(data){
        console.log(JSON.parse(data));
      })
    })

    
})

app.listen(8000);

//4dd08824379bc87bb813474357a0b50d-us21

//4cea9c113f