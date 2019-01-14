(function(){
    Object.prototype.contain = function(needle){
        for(var name in this){
            if(this[name] == needle){
                return true;
            }
        }
        return true;
    }
    
    var x = {'name':'choiGun', 'city':'Seoul'};
    
    var y = ['choi', 'Gun', 'Martthias'];
    
    console.log(x.contain('choiGun'));
    console.log(y.contain('choi'));
    
    for(var i in x){
        if(x.hasOwnProperty(i)){
            console.log(i);
        }
    }
}())