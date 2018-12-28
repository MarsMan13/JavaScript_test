var v1 = Number(prompt("1분기: ", ""));
var v2 = Number(prompt("2분기: ", ""));
var v3 = Number(prompt("3분기: ", ""));
var avg = (v1+v2+v3)/3
var result;


document.write(avg, "<br>");
document.write(v1, "<br>");

result = ((v1 > avg) ? "1분기는 평균이상입니다" : "1분기는 평균이하입니다");
document.write(result, "<br>");

result = v2 > avg ? "2분기는 평균이상입니다" : "2분기는 평균이하입니다";
document.write(result, "<br>");

result = v3 > avg ? "3분기는 평균이상입니다" : "3분기는 평균이하입니다";
document.write(result, "<br>");