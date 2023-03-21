//jQuery is a fast, small, and feature-rich JavaScript library.
//document.querySelector(".drum") is replaced by $(".drum") and jQuery(".drum")


// $("h1").css("color","red");

//sometimes when we link jquery in the head it might take much longer to execute hence,
//ready function is used or script link is provided in the beginning 
//$("document").ready(function(){
//     $("h1").css("color","red");
// })
$("h1").addClass("bigger margin");


setTimeout(function() {
    $("h1").removeClass("bigger");
}, 10000);

//jquery shortens the .textContent to .text and .innerhtml to html;

// $("button").text("don't click me ");


// setTimeout(function() {
//     $("button").html("<strong> click me now</strong>")
// }, 1000);

// $("a").attr("href","https://www.yahoo.com");



//addEventlistner is converted into the .click  or .press method

// $("h1").click(function()
// {
//     $("button").text("press button not h1");
// };

// $("body").keydown(function (event) { 
//     $("h1").text(event.key);
// });


//on event listner is used to create  flexible actionlistner in jQuery

// $("h1").on("mouseover", function () {
//   $("h1").text("click buttons");
// });

//we can  use jQuery to add new elements on the fly.in four ways .before .front .prepend .apend

$("h1").after("<button>new</button>");
$("h1").before("<button>new</button>");
$("h1").prepend("<button>new</button>");
$("h1").append("<button>new</button>");

//jquery also makes it easier to emplement animations,every function has the toggle

// $("button").click(function(){
//     $("h1").hide(); .shoew to display
// });

// $("button").click(function(){
//     $("h1").slideUp(); //slideDown to slide down animation 
// });

// $("button").click(function(){
//    $("h1").fadeIn(); //fadeOut opps
// });

// $("button").click(function(){
//    $("h1").animate({opacity : 0.5});
//  });

//we can also do comibnations of the animation function

$("button").click(function(){
   $("h1").slideUp().slideDown().animate({opacity : 0.5});
 });