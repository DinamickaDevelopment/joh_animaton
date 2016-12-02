var Top = document.querySelector('#Top');
var Middle = document.querySelector('#Middle');
var TopAnim =  TweenMax.to(Top,3,{rotation:360,transformOrigin:"50% 50%",paused:true,ease:Power3.easeInOut});
var MiddleAnim = TweenMax.to(Middle,3,{rotation:-360,transformOrigin:"50% 50%",paused:true,ease:Power3.easeInOut});

var svg = document.querySelector('svg'); 
var mouseevent =  function (e){
    if(!TopAnim.isActive()){
        TopAnim.restart();
        MiddleAnim.restart();
    }
}
svg.addEventListener('mouseenter', mouseevent,false);