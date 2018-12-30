document.write("<h2>난수 생성 32~44</h2>");
var ret;

for(var i = 0; i<1000; i++){
    ret = Math.floor(Math.random()*13+32);
    document.write("resul: "+ret, "<br>");
}