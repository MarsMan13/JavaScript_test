var num = 1;
function gallery(direct){
    if(direct){
        if(num == 3) return;
        num++;
    }else{
        if(num == 1) return;
        num--;
    }
    
    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src", "JS/testImage"+num+".png");
}