
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