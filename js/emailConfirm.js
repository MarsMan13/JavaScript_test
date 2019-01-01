var userEmail = prompt("Whats your EmailAddress?", "");
var arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

var check1 = false;
var check2 = false;

if(userEmail.indexOf("@")>0){
   check1 = true;
}
   
var i = 0;
for(i in arrUrl){
    if(userEmail.indexOf(arrUrl[i]) > 0){
        check2 = true;
    }
}

if(check1 && check2){
    document.write(userEmail + " is confirmed", "<br>");
}
else{
    alert("Email was not confirmed")
}