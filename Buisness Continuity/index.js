var arrows = document.querySelector('#Arrows'),
    powbtn = document.querySelector('#Power_Button');

var arrowAn = TweenMax.to(arrows,3,{paused:true,rotation:-360,transformOrigin:"50% 50%",ease:Power2.easeInOut}),
    powbtTl = new TimelineLite({paused:true});

powbtTl.to(powbtn,1,{scale:0.8,transformOrigin:"50% 50%",ease:Power2.easeIn})
    .to(powbtn,1,{scale:1.2,transformOrigin:"50% 50%", ease:Linear.easeNone})
    .to(powbtn,1,{scale:1,transformOrigin:"50% 50%", ease:Power2.easeOut})

var svg = document.querySelector('svg'); 
var mouseevent =  function (e){
    if(!arrowAn.isActive()){
        arrowAn.restart();
        powbtTl.restart();
    }
}
svg.addEventListener('mouseenter', mouseevent,false);