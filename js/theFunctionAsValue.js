(function(){
    function cal(mode){
        var funcs = {
            'plus': function(left, right){return left+right},
            'minus': function(left, right){return left-right}
        }
        
        return funcs[mode];
    }
    
    alert(cal("plus")(2, 1));
    alert(cal("minus")(2, 1));
    
}());

(function(){
    var ary = [
        function(a, b){return a+b},
        function(a, b){return a-b},
        function(a, b){return a*b},
    ];
    
    for(var i = 0; i<3; i++){
        input = ary[i](2,3);
        alert(input);
    }
    
}());