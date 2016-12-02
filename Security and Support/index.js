var Shield = document.querySelector('#Shield'),
    Circle = document.querySelector('#Circle'),
    Human ={
        'All':document.querySelector('#Human'),
        'Head':document.querySelector('#Head'),
        'Body':document.querySelector('#Body'),
    }
var tl = new TimelineMax({paused:true})
  tl.staggerTo([Shield,Circle,Human.All],0.2,{scale:0,opacity:0,transformOrigin:"50% 50%",ease:Power3.easeIn})
    .set(Human.Head,{strokeDashoffset:'48px'})
    .set(Human.Body,{strokeDashoffset:'35px'})
    .staggerTo([Circle,Human.All],0.7,{delay:0.2,scale:1.3,opacity:1,transformOrigin:"50% 50%",ease:Power3.easeOut})
    .addLabel('HimanAppear')
    .to(Human.Head,0.5,{strokeDashoffset:'0'},'HimanAppear')
    .to(Human.Body,0.5,{strokeDashoffset:'0'},'HimanAppear')
    .addLabel('GrowOther')
    .set(Shield,{scale:0.4})
    .to(Shield,0.4,{scale:1,opacity:1,transformOrigin:"50% 50%",ease:Power3.easeOut},'GrowOther')
    .to(Circle,0.4,{scale:1,opacity:1,transformOrigin:"50% 50%",ease:Power3.easeOut},'GrowOther')
    .to(Human.All,0.4,{scale:1,opacity:1,transformOrigin:"50% 50%",ease:Power3.easeOut},'GrowOther')
var svg = document.querySelector('svg'); 
var mouseevent =  function (e){
    if(!tl.isActive()){
        tl.restart();
    }
}
svg.addEventListener('mouseenter', mouseevent,false);