
var n = MAth.random();
/*
A random no is genterated b/w 0-0.9999999999999999.
It is pseudo random no generater 
*/

// console.log(n);

/* program to generate random between 1-100*/

var n = Math.random();
n = n*100;
n= Math.floor(n+1);

console.log(n);

if(n===100){
    console.log("lovescore : " + n+"% you love yourself like kanye loves kanye ");
}else{
    console.log("lovescore : " + n);
}
/* ==  checks for equality but does not cares about data type */

/* ARRAY'S in javascript
 An array is a single variable which can store multiple values of same type at a time

 var arrayName = [value 1, value 2, …];
 var arrayName = new Array();
 var arrayName =new Array("element1","element2",..."elementn");

 Array includes() method:
 Use: To check whether the given array contains the specified element.*/

var guestlist = ["Neha","Raj","Rahul","Sahil","Rakesh"];

var name= prompt("What is your name");

if(guestlist.includes(name))
{
    console.log("welcome");
}else{
    console.log("you are not invited");
}

/* we use arr.push(n) :  To Add to the end of an Array*/

//fizzBuzz program

var n=1;
var arr= [];
function pushinarray(){
    if(n%3==0 && n%5==0){
        arr.push("fizzbuzz");
    }else{
        if(n%3==0){
            arr.push("fizz");
        }else{
            if(n%5==0){
                arr.push("Buzz");
            }
            else arr.push(n);
        }
    }
    n++;
    console.log(arr);
}

