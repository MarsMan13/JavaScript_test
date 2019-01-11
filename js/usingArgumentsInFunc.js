function sum(){
    var sum = 0;
    for(var i in arguments){
        sum += arguments[i];
    }
    
    return sum;
}

document.write("sum: "+sum(10,20,30,40), "<br>");