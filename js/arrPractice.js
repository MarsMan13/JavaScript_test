var arr1 = ["a", "b", "c", "d", "e", "f"];
var arr2 = ["A", "B", "C"];


document.write(arr1.join("-"), "<br>");
//
document.write(arr1.reverse(), "<br>");
//
document.write(arr1.sort(), "<br>");
//
document.write(arr1.concat(arr2), "<br>");
//
document.write(arr1.pop(), "<br>");
//
document.write(" : ", arr1, "<br>");

//
arr1.unshift("z");
document.write(arr1, "<br>");
//
document.write(arr1.includes("z"), "<br>");
//
document.write(arr1.slice(1,4), "<br>");
//
arr1.splice(1,4, "tttt");
document.write(arr1, "<br>");