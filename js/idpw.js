var id = "cds06126";
var pw = "xx1245";

var user_id = prompt("아이디 : ", "");
var user_pw = prompt("비밀번호 : ", "");

if(id == user_id){
    if(pw == user_pw){
        document.write(user_id+"님 반갑습니다", "<br>");
    }else{
        alert("비밀번호가 일치하지 않습니다");
        location.reload();
    }
}
else{
    alert("아이디가 일치하지 않습니다");
    location.reload();
}