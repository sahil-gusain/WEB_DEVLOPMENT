
var btnarr = document.querySelectorAll(".drum");

for(var i=0;i<btnarr.length;i++)
{
    btnarr[i].addEventListener("click",function ()
    {
        var audio = new Audio("sounds//crash.mp3");
        audio.play();
    });
}

