
var n = Math.random();
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
//calculator using internal function call

function calculator(num1,num2,oper)
{
    return oper(num1,num2);
}

function sub(num1,num2)
{
    return num1-num2;
}

function add(num1,num2)
{
    return num1+num2;
}

function mult(num1,num2)
{
    return num1*num2;
}

function div(num1,num2)
{
    return num1/num2;
}

console.log(calculator(69,60,div));

console.log(calculator(69,60,add));

console.log(calculator(69,60,sub));

console.log(calculator(69,60,mult));


// Classes and objects in javascript

//  A Class is the blueprint of an Object. It is a user defined data type that has
//  member variable and member function .

//  object is a instance of a class . when a class is created no memory is allocated
//  but when a object is created memory is allocated


// objectin js
var housekeeper = {
    name : "reena",
    age : 34,
    experience : 5,
    previous_job : ["fatu","galaxy"],
}
console.log(housekeeper.name);


function HouseKeeper(name,age,experience,previous_job){//constructor function
    this.name=name;
    this.age = age;
    this.experience =experience;
    this.previous_job = previous_job;
    this.clean = function()
    {
        console.log("cleaning");
    }
}
var housekeeper1 = new  HouseKeeper("reena",34,6,["fatu","galaxy"]);

var housekeeper2 = new  HouseKeeper("meena",30,11,["fatu","galaxy","stark"]);

console.log(housekeeper1.name);
console.log(housekeeper2.age);
housekeeper1.clean();

//A callback is a function passed as an argument to another function.This technique allows a function to call another function
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

