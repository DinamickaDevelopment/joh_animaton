var arrows = document.querySelector('#Arrows'),
    server = {
        "top":document.querySelector('#top_server'),
        "mid":document.querySelector('#middle_server'),
        "bot":document.querySelector('#bottom_server')
    }
var cloud = document.querySelector('#Cloud');


var arrowtl =  new TimelineMax({paused:true,}),
    cloudtw = TweenMax.to(cloud,1.15,{y:-4,paused:true,repeat:1,yoyo:true}),
    serverTl = new TimelineMax({paused:true,});

serverTl.to(server.top,0.7,{scale:0.96,y:10,transformOrigin:"50% 50%",ease:Linear.easeNone})
        .addLabel('moveTogether')
        .to(server.mid,0.7,{scale:0.96,y:10,transformOrigin:"50% 50%",ease:Linear.easeNone},'moveTogether')
        .to(server.top,0.7,{y:20,transformOrigin:"50% 50%",ease:Linear.easeNone},'moveTogether')
        .addLabel("delay",'+=1')
        .to(server.mid,0.7,{scale:1,y:0,transformOrigin:"50% 50%",ease:Linear.easeNone},"delay")
        .to(server.top,0.7,{y:10,transformOrigin:"50% 50%",ease:Linear.easeNone},"delay")
        .to(server.top,0.7,{scale:1,y:0,transformOrigin:"50% 50%",ease:Linear.easeNone})


arrowtl.to(arrows,0.9,{y:-4})
       .to(arrows,0.25,{opacity:0})
       .set(arrows,{opacity:0,y:4})
       .to(arrows,1.15,{opacity:1,y:0})

var svg = document.querySelector('svg'); 
var mouseevent =  function (e){
    if(!arrowtl.isActive()){
        arrowtl.restart();
        cloudtw.restart();
        serverTl.restart();
    }
}
svg.addEventListener('mouseenter', mouseevent,false);