(function(){
    
    function checkweight(name, height, weight){
        
        this.userName = name;
        this.userHeight = height;
        this.userWeight = weight;
        this.minWeight = 0;
        this.maxWeight = 0;
        
        this.getInfo = function(){
            var str = "";
            str += "이름: "+this.userName+", ";
            str += "키: "+this.userHeight+", ";
            str += "몸무게: "+this.userWeight+", ";
            return str;
        }
        
        this.getResult = function(){
            this.minWeight = (this.userHeight - 100)*0.9 - 5;
            this.maxWeight = (this.userHeight - 100)*0.9 + 5;
            
            if(this.userWeight>=this.minWeight &&
             this.userWeight<=this.maxWeight){
                return "정상 몸무게";
            }
            else if(this.userWeight > this.maxWeight){
                return "정상 몸무게 초과입니다";
            }
            else if(this.userWeight < this.minWeight){
                return "정상 몸무게 미달입니다"
            }
        }
        
        
    }
    
    
    var tempName = prompt("Name: ", "");
    var tempHeight = prompt("Height: ", "");
    var tempWeight = prompt("Weight: ", "");
    
    var x = new checkweight(tempName, tempHeight, tempWeight);
    console.log(x);
    
    document.write(x.getInfo(), "<br/>");
    document.write(x.getResult());
    
    
}())