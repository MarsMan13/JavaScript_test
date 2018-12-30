var now = new Date();
var nowYear = now.getFullYear();
var lastMoment = new Date(nowYear, 11, 31);

var diff = lastMoment - now;

var result = Math.ceil(diff/(1000*60*60*24));

document.write("the last time is "+result, "<br>");