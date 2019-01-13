var funcThis = null;

function Func(){
    if(this == window) console.log('!!');
    else if(this == o2) console.log('??');
    funcThis = this;
}

var o1 = Func();
if(funcThis == window) console.log('window');

var o2 = new Func();
if(funcThis == o2) console.log('o2');