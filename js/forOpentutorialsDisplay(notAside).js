
//
var targets = $('a', 'aside');
var href = [];
for(var i = 0; i<targets.length; i++){
	href.push(targets[i].getAttribute('href'));

};
//
//var Body = document.getElementsByTagName('body')[0];
var newElement = document.createElement('div');
newElement.innerHTML = '<input type="button" class="next_page" value="Btn" style="height:20px; width:50px; margin-bottom:10px; padding:0;">';
//Body.append(newElement);
var upperThing = document.getElementsByTagName('aside')[0].parentNode;
var between = document.getElementsByClassName('entry-area')[0];
upperThing.insertBefore(newElement, between);

//var newElement = document.createElement('div');
//newElement.innerHTML = '<input type="button" class="next_page" value="Btn" style="height:20px; width:50px; margin-bottom:5px; padding:0;">';

var targets2 = document.getElementsByClassName('movie');

//ytp-cued-thumbnail-overlay-image
for(var j = 0; j<targets2.length; j++){
    var newElement = document.createElement('div');
    newElement.innerHTML = '<input type="button" class="next_page" value="Btn" style="height:20px; width:60px; margin-bottom:2px; padding:0;">';

    targets2[j].parentNode.insertBefore(newElement, targets2[j]);
    targets2[j].style.margin = 0;
}

var newElement = document.createElement('div');
newElement.innerHTML = '<input type="button" class="next_page" value="Btn" style="height:20px; width:60px; margin-bottom:2px; padding:0;">';
var targets3 = document.getElementById('content');
targets3.parentNode.append(newElement);
targets3.style.margin = 0;
//targets2[targets2.length-1].parentNode.insertBefore(newElement, targets2[targets2.length-1]);
//targets2 = targets2.firstChild.parentNode;

var targets4 = document.getElementsByClassName('next_page');
var current_url = document.URL;

for(var i = 0; i<targets4.length; i++){
    targets4[i].addEventListener('click', function(){
        for(var j = 0; j<href.length; j++){
	        var current_url = document.URL;
            if(j == (href.length-1)) break;
            if(href[j] == current_url){
                console.log("check");
                console.log(href[j+1]);
                location.href = href[j+1];    
           }
        }
    });
    console.log("check2");
}

var Aside = document.getElementsByTagName('aside')[0];
Aside.parentNode.removeChild(Aside);
var Hentry = document.getElementsByClassName('entry-area')[0];
Hentry.style.margin = 0;
var Hentry = document.getElementsByClassName('hentry')[0];
Hentry.style.padding = 0;

var Iframe = document.getElementsByTagName('iframe');
for(var i = 0; i<Iframe.length; i++){
    Iframe[i].style.position = "relative";
    Iframe[i].style.left="-50px";
}