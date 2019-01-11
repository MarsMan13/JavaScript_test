var colors = ["white", "yellow", "aqua", "purple"];
var i = 0;   

function changeColor(){
    i++;
    if(i >=colors.length){
        i = 0;
    }

    var bodyTag = document.getElementById("theBody");
    bodyTag.style.backgroundColor = colors[i];
    var buttonTag = document.getElementsByTagName("button");
    buttonTag.style.backgroundColor= colors[i];
}