
var btnarr = document.querySelectorAll(".drum");

for(var i=0;i<btnarr.length;i++)
{
    btnarr[i].addEventListener("click",onclickfun);
}

function onclickfun()
{
    alert("sup bitches listen");
}