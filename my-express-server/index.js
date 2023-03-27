//expressjs.com

const express = require("express");

const app = express();

app.listen(8000,function(){
    console.log("sever running at 8000");
});

app.listen(3000);