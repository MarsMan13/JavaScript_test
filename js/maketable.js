var i;

document.write("<table border =1>");

for(i = 0; i<25; i++){
    if(i%5 == 0 && i != 0 && i != 24){
        document.write("</tr>"+"<tr>");
    }
    else if(i == 0) document.write("<tr>");
    
    document.write("<td>"+i+"</td>");
    
    if(i == 24) document.wrtie("</tr>");
}

document.write("</table>");