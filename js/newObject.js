var tv = new Object();

tv.color = "white";
tv.price = 300000;
tv.info = function(){
    document.write("tv 색상 : "+this.color, "<br>");
    document.write("tv 가격 : "+this.price, "<br>");
}

var car = {
    color:"black",
    price:500000000,
    info:function(){
        document.write("car 색상 : "+this.color, "<br>");
        document.write("car 가격 : "+this.price, "<br>");
    }
    
};

document.write("<h2>tv 객체 메서드 호출</h2>");
tv.info();
document.write("<h2>car 객체 메서드 호출</h2>");
car.info();