var count = 0;

myFuc();

function myFuc(){
    count++;
    document.write("hello"+count, "<br>");
}

myFuc();

var theFnc = function(){
    count++;
    document.write("world"+count, "<br>");
}

theFnc();