document.write("========Start========", "<br>");

document.write("<br>");

for(var i = 0; i<10; i++){
    document.write("<p>");
    for(var j = 0; j<20; j++){
        if(j >= 10-i && j<= 10+i){
            document.write("*");
        }
        else {
            document.write(" ");
    
        }
    }
    document.write("</p>");
}

document.write("========End========");