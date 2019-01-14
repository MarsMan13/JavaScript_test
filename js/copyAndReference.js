(function(){
    
    var a = 1;
    test(a);
    function test(b){
        b = 10;
        console.log("b: "+b);
    };
    console.log("a: "+a);
    
}());

console.log("************");

(function(){
    
    var a = {'id':1};
    function test(b){
        b = {'id':2};
    };
    
    test(a);
    console.log(a.id);
    
}());

console.log("************");

(function(){
    
    var a = {'id':1};
    function test(b){
        b.id = 2;
    };
    
    test(a);
    console.log(a.id);
    
}());