(function(){

    function Person(){
        this.name = "";
        this.age = "";
        this.phonenumber = "";

        for(var i = 0; i<arguments.length; i++){
            switch(i){
                case 0:
                    this.name = arguments[i];
                    break;
                case 1:
                    this.age = arguments[i];
                    break;
                case 2:
                    this.phonenumber = arguments[i];
                    break;
            }   
        }
        
        this.introduce = function(){
            //console.log('Im'+this.name+this.age+this.phonenumber);
            return 'Im'+this.name+this.age+this.phonenumber;
        }
    }
    
    var p1 = new Person("choiGun", "21", "01093110513");
    
    var p2 = new Person("SecondMan", "21");
    
    console.log(p1.introduce());
    console.log(p2.introduce());
    
}())