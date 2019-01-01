var userName = prompt("Whats your name?", "");

var upperName = userName.toUpperCase();
document.write(upperName, "<br>");

var userNum = prompt("Whats your phone_num?", "");
var result = userNum.substring(0, userNum.length - 4) + "****";
document.write(result, "<br>");