var arrows = document.querySelector('#Arrows');
var cloud = document.querySelector('#Cloud');
var arrowtl =  new TimelineMax({paused:true,});
var cloudtw = TweenMax.to(cloud,1.15,{y:-4,paused:true,repeat:1,yoyo:true});
arrowtl.to(arrows,0.9,{y:-4})
       .to(arrows,0.25,{opacity:0})
       .set(arrows,{opacity:0,y:4})
       .to(arrows,1.15,{opacity:1,y:0})
var svg = document.querySelector('svg'); 
var mouseevent =  function (e){
    if(!arrowtl.isActive()){
        arrowtl.restart();
        cloudtw.restart();
    }
}
svg.addEventListener('mouseenter', mouseevent,false);