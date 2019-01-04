//window_object

//open("https://www.naver.com", "NAVER", "width=350, height=400, left = 50, top = 10; scrollbars = no, status = no, location = no");

window.open("windowPopUp.html", "pop1", "width=300, height=300, \
left=300, top = 30, toolbars= yes");

window.alert("!!!");

var t1 = prompt("What is your name?", "");
document.write(t1, "<br>");
//

var t2 = confirm("Let's go!!");
document.write(t2, "<br>");

//
window.moveTo(100, 200);