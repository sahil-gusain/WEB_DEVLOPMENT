// REPL stands for Read Evaluation Print Loop, and it basically allows you to 
// execute code in bite sized

// it's also got short cuts, like, for example, if we didn't 
// feel like writing out the entirety of console.log

// we can write con, tab
// in order to exit the REPL, you can either say .exit and hit enter,
// or you can simply hit Ctrl +C twice

// Node  comes bundled with a whole bunch of built in modules.

// These are essentially libraries of code that the Node team wrote so that they can help you with day to

// day things that you might want to do using Node.

//native  node module
// const fs = require("fs");

// fs.copyFileSync("text1.txt","file2.txt");

//supervillan node module

const Villan = require('supervillains');

var villanName  = Villan.random();

console.log(villanName);