const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// allow us to pass the information.that we get sent from the post request.



app.listen(8000,function(){
    console.log("sever running at port 80000");
})
app.post("/",function(req,res){
    var num1 = Number(req.body.num1);//explicit conversion
    var num2 = Number(req.body.num2);
    res.send("Thankyou for submitting ans is "+(num1+num2));
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"\\index.html");//send to used to send text wheareas sendFile is used 
    //send File as a respond
    //console.log(__dirname+"\\index.html");
})