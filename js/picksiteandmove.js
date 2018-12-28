var site = prompt("네이버, 다음, 네이트, 구글 중 즐겨찾는 사이트는?");

var url = null;

switch(site){
    case "구글":
        url = "www.google.com";
        break;
    case "다음":
        url = "www.daum.net";
        break;
    case "네이버":
        url = "www.naver.com";
        break;
    case "네이트":
        url = "www.nate.com";
        break;
    default: alert("입력 오류!");
}

if(url) location.href = "http://" +url; 