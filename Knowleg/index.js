var block = document.querySelector('#main');

var setAnimation = {
    reset:function(){

    },
    TweenLite: function(){
        var anim = TweenLite.to(block,2,{rotation:360,x:400,transformOrigin:'50% 50%'})
    },
    TweenMax: function(){
        var anim = TweenMax.to(block,2,{rotation:360,x:400,transformOrigin:'50% 50%',repeat:-1,yoyo:true,ease:Linear.easeNone})
    },
    TimelineLite:function(){
        var anim = new TimelineLite()
        anim
        .to(block,0.7,{rotation:360,x:400,transformOrigin:'50% 50%'})
        .to(block,0.7,{rotation:0,y:400,transformOrigin:'50% 50%'})
        .to(block,0.7,{rotation:360,x:0,transformOrigin:'50% 50%'})
        .to(block,0.7,{rotation:0,y:0,transformOrigin:'50% 50%'})
    },
    TimelineLite:function(){
        var anim = new TimelineMax()
        anim
        .to(block,0.7,{rotation:360,x:400,transformOrigin:'50% 50%'})
        .to(block,0.7,{rotation:0,y:400,transformOrigin:'50% 50%'})
        .to(block,0.7,{rotation:360,x:0,transformOrigin:'50% 50%'})
        .to(block,0.7,{rotation:0,y:0,transformOrigin:'50% 50%'})
    },
    Timeline:function(){
        var anim = new TimelineMax()
        anim
        .to(block,0.7,{rotation:360,x:400,transformOrigin:'50% 50%'})
        .to(block,0.7,{rotation:0,y:400,transformOrigin:'50% 50%'})
        .to(block,0.7,{rotation:360,x:0,transformOrigin:'50% 50%'})
        .to(block,0.7,{rotation:0,y:0,transformOrigin:'50% 50%'})
    },
    tryHard: function(){
        block.addEventListener('mouseenter',function(){
            TweenLite.to(block,0.2,{x:getRandomValue(),y:getRandomValue(),})
        },false)
    }
}

getRandomValue = function(){
    return Math.floor((Math.random() * window.innerHeight));
}