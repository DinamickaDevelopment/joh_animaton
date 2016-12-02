var tl = new TimelineMax({paused:true});
elem = {
    "Arrow1Path":document.querySelector('#Arrow1 path'),
    "Arrow1Polyline":document.querySelector('#Arrow1 polyline'),
    "Person1":document.querySelector('#Person1'),
    "Arrow2Path":document.querySelector('#Arrow2 path'),
    "Arrow2Polyline":document.querySelector('#Arrow2 polyline'),
    "Person2":document.querySelector('#Person2'),
}
tl.set(elem.Arrow1Path,{strokeDashoffset:'140px'})
  .to(elem.Arrow1Path,0.36,{strokeDashoffset:'70px'})
  .set(elem.Arrow1Polyline,{strokeDashoffset:'42px'})
  .to(elem.Arrow1Polyline,0.1,{strokeDashoffset:'21px'})
  .to(elem.Person1,0.18,{transform:'translateY(5px)'})
  .to(elem.Person1,0.18,{transform:'translateY(0px)'})
  .set(elem.Arrow2Path,{strokeDashoffset:'140px'})
  .to(elem.Arrow2Path,0.36,{strokeDashoffset:'70px'})
  .set(elem.Arrow2Polyline,{strokeDashoffset:'42px'})
  .to(elem.Arrow2Polyline,0.1,{strokeDashoffset:'21px'})
  .to(elem.Person2,0.18,{transform:'translateY(5px)'})
  .to(elem.Person2,0.18,{transform:'translateY(0px)'})
  .to(elem.Arrow1Path,0.36,{strokeDashoffset:'0'})
  .to(elem.Arrow1Polyline,0.1,{strokeDashoffset:'0'})
  .to(elem.Person1,0.18,{transform:'translateY(5px)'})
  .to(elem.Person1,0.18,{transform:'translateY(0px)'})
  .to(elem.Arrow2Path,0.36,{strokeDashoffset:'0'})
  .to(elem.Arrow2Polyline,0.1,{strokeDashoffset:'0'})
  .to(elem.Person2,0.18,{transform:'translateY(5px)'})
  .to(elem.Person2,0.18,{transform:'translateY(0px)'})

var svg = document.querySelector('svg'); 
var mouseevent =  function (e){
    if(!tl.isActive()){
        tl.restart();
    }
}
svg.addEventListener('mouseenter', mouseevent,false);
