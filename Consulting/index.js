var tl = new TimelineMax({paused:true});
elem = {
    "Arrow1Path":document.querySelector('#Arrow1 path'),
    "Arrow1Polyline":document.querySelector('#Arrow1 polyline'),
    "Person1":document.querySelector('#Person1'),
    "Arrow2Path":document.querySelector('#Arrow2 path'),
    "Arrow2Polyline":document.querySelector('#Arrow2 polyline'),
    "Person2":document.querySelector('#Person2'),
}
tl.to(elem.Arrow1Path,0.36,{strokeDashoffset:'-69px'})
  .to(elem.Arrow1Polyline,0.1,{strokeDashoffset:'-20px'})
  .to(elem.Person1,0.18,{transform:'translateY(5px)'})
  .to(elem.Person1,0.18,{transform:'translateY(0px)'})
  .to(elem.Arrow2Path,0.36,{strokeDashoffset:'-69px'})
  .to(elem.Arrow2Polyline,0.1,{strokeDashoffset:'-20px'})
  .to(elem.Person2,0.18,{transform:'translateY(5px)'})
  .to(elem.Person2,0.18,{transform:'translateY(0px)'})
  .to(elem.Arrow1Path,0.36,{strokeDashoffset:'-138px'})
  .to(elem.Arrow1Polyline,0.1,{strokeDashoffset:'-40px'})
  .to(elem.Person1,0.18,{transform:'translateY(5px)'})
  .to(elem.Person1,0.18,{transform:'translateY(0px)'})
  .to(elem.Arrow2Path,0.36,{strokeDashoffset:'-138px'})
  .to(elem.Arrow2Polyline,0.1,{strokeDashoffset:'-40px'})
  .to(elem.Person2,0.18,{transform:'translateY(5px)'})
  .to(elem.Person2,0.18,{transform:'translateY(0px)'})

var svg = document.querySelector('svg'); 
var mouseevent =  function (e){
    if(!tl.isActive()){
        tl.restart();
    }
}
svg.addEventListener('mouseenter', mouseevent,false);
