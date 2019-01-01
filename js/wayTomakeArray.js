var arr = new Array();
arr[0] = "ChoiGun";
arr[1] = 20;
arr[2] = "Seoul, Korea";

var arr2 = new Array("ChoiGun", 20, "Seoul, Korea");

var arr3 = ["ChoiGun", 20, "Seoul, Korea"];

document.write(arr[0], "<br>");
document.write(arr2[1], "<br>");
document.write(arr3[2], "<br>");

document.write("////////////////", "<br>");

for(var i = 0; i<arr.length; i++){
    document.write(arr2[i], "<br>");
}

document.write("////////////////", "<br>");


for(i in arr3){
    document.write(arr3[i], "<br>");
}