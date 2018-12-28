var mon = prompt("현재는 몇 월입니까?", "0");

if(mon>= 9 && mon<= 11){
    document.write(mon+"월! 독서의 계절이네요");
}
else if(mon >= 6 && mon<=8){
    document.write(mon+"월! 따사로운 계절이네요");
}
else if(mon >= 3 && mon<=5){
    document.write(mon+"월! 싱그러운 계절이네요");
}
else{
    document.write(mon+"월! 크리스마스의 계절이네요");
}