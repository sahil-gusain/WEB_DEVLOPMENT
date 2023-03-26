var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var i=0;
function nextSequence()
{
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = buttonColors[randomNumber];
    var sound = new Audio("sounds//"+randomColor+".mp3");
    $('#'+randomColor).fadeOut(100).fadeIn(100);
    sound.play();
    gamePattern[i] = randomColor;
    i++;
}
