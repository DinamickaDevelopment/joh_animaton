var arrows = document.querySelector('#Arrows')
var animation = TweenMax.to(arrows,3,{paused:true,rotation:-360,transformOrigin:"50% 50%",ease:Power2.easeInOut})
var svg = document.querySelector('svg'); 
var mouseevent =  function (e){
    if(!animation.isActive()){
        animation.restart();
    }
}
svg.addEventListener('mouseenter', mouseevent,false);