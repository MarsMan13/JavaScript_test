(function(){
 
    var o = new Object();
    var p = new Object();
    
    function func(){
        switch(this){
            case o:
                console.log('o');
                break;
            case p:
                console.log('p');
                break;
            case window:
                console.log('window');
                break;
            default:
                console.log('else');
                break;
        }
    }
    
    func();
    func.apply(o);
    func.apply(p);
    
    
}())