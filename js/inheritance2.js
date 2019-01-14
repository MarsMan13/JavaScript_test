(function(){
    
    function Person(name){
        this.name = name;
    }
    Person.prototype.name = null;
    Person.prototype.introduce = function(){
        return "My name is "+this.name;
    }
    //
    
    function Programmer(name){
        this.name = name;
    }
    Programmer.prototype = new Person();
    Programmer.prototype.coding = function(){
        return "hello world";
    }
    
    //
    function Designer(name){
        this.name = name;
    }
    Designer.prototype = new Person();
    Designer.prototype.design = function(){
        return "beautiful!";
    }
    
    
    
    var p1 = new Programmer("choiGun");
    document.write(p1.introduce()+"<br/>");
    document.write(p1.coding()+"<br/>");
    
    var p2 = new Designer("CraziliaZettoman13");
    document.write(p2.introduce()+"<br/>");
    document.write(p2.design()+"<br/>");
    
}())
