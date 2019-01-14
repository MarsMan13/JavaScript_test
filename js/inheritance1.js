(function(){
   
    function Person(name){
        this.name = name;
        this.introduce = function(){
            return "My name is "+ this.name;        }
    }
    
    var p1 = new Person("choiGun");
    document.write(p1.introduce()+"<br/>");
    
}())

(function(){
    
    function Person(name){
        this.name = name;
    }
    //Person.prototype.name = null;
    Person.prototype.introduce = function(){
        return "My name is "+this.name;
    }
    
    var p1 = new Person("CraziliaZettoman13");
    document.write(p1.introduce()+"<br/>");
    
}())