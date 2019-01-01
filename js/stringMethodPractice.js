var str = "web he she he she";

document.write(str.charAt(4), "<br>");
//
document.write(str.indexOf("he"), "<br>");
//
document.write(str.lastIndexOf("he"), "<br>");
//
document.write(str.lastIndexOf("he"), "<br>");
//
document.write(str.match("s"), "<br>");
//
document.write(str.replace("hSe", "She"), "<br>");
//
document.write(str.slice(3, 7), "<br>");
//
document.write(str.substring(5, 1), "<br>");
//
var arr = str.split(" ");
document.write(arr, "<br>");
//
document.write(str.toUpperCase(), "<br>");
//
document.write(str, "<br>");
//
var str2 = "My_name_is_Choi_Gun";
document.write(str.concat(str2), "<br>");
//
document.write(str.charCodeAt(0), "<br>");
document.write(str.charCodeAt(1), "<br>");
//
document.write(String.fromCharCode(65), "<br>");
//
str3 = " ttt";
document.write((str3.trim())[0] == " ");