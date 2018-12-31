var bmw = new Object();

bmw.color = "dark blue";
bmw.price = 80000000;
bmw.info = function(){
    document.write("color is "+this.color, "<br>");
    document.write("price is "+this.price, "<br>");
}

bmw.info();

///////////////////////////////////////////
var day = new Date();

document.write(day.getFullYear(), day.getMonth()+1, day.getDate(), "<br>");
document.write(day.getHours(), day.getMinutes(), day.getSeconds(), "<br>",day.getMilliseconds(), "<br>");