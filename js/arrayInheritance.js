(function(){
    
    var arr = new Array("Seoul", "new york", "ladarkh", "pusan", "Tsukuba");

    function getRandomArr(arr){
        var index = Math.floor(Math.random()*(arr.length));
        return arr[index];
    }
    console.log(getRandomArr(arr));
    
}());

(function(){

    var arr = new Array("Seoul", "new york", "ladarkh", "pusan", "Tsukuba");
    
    Array.prototype.random = function(){
        var index = Math.floor(this.length*Math.random()); 
        return this[index];
    }
    
    console.log(arr.random());
    
    
}());