var gage = document.querySelector('#Gage');

var tl = new TimelineLite({paused:true});
tl.to(gage,0.45,{rotation:-125,transformOrigin:"50% 80%"})
  .to(gage,1.06,{rotation:125,transformOrigin:"50% 80%",ease:Power4.easeIn})
  .to(gage,0.17,{rotation:100,transformOrigin:"50% 80%"})
  .to(gage,0.17,{rotation:125,transformOrigin:"50% 80%"})
  .to(gage,0.17, {rotation:100,transformOrigin:"50% 80%"})
  .to(gage,0.17,{rotation:125,transformOrigin:"50% 80%"})
  .to(gage,0.66,{rotation:0,transformOrigin:"50% 80%"})
  .to(gage,0.15,{rotation:0,transformOrigin:"50% 80%"})
var svg = document.querySelector('svg'); 
var mouseevent =  function (e){
    if(!tl.isActive()){
        tl.restart();
    }
}
svg.addEventListener('mouseenter', mouseevent,false);