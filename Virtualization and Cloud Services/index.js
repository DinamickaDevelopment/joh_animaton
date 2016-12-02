var VerticalLine = document.querySelector('#VerticalLine'),
    Horizontal1 = document.querySelector('#Horizontal1'),
    Horizontal2 = document.querySelector('#Horizontal2'),
    RightSnake = document.querySelector('#RightSnake'),
    MiddleSnake = document.querySelector('#MiddleSnake'),
    LeftSnake = document.querySelector('#LeftSnake'),
    MainSnake = document.querySelector('#MainSnake');

var tl = new TimelineMax({paused:true})

tl.set([RightSnake,MiddleSnake,LeftSnake],{strokeDashoffset:'72px'})
  .staggerTo([RightSnake,MiddleSnake,LeftSnake],0.33, {strokeDashoffset:'36px'})
  .set(Horizontal2,{strokeDashoffset:'54px'})
  .addLabel("LineDisapear")
  .to(Horizontal1,0.16,{strokeDashoffset:'27px'},'LineDisapear')
  .to(Horizontal2,0.16,{strokeDashoffset:'27px'},'LineDisapear')
  .to(VerticalLine,0.33,{strokeDashoffset:'15px'},'LineDisapear')
  .to(MainSnake,0.33,{strokeDashoffset:'47px'})
  .to(MainSnake,0.99,{delay:0.5,strokeDashoffset:'94px'})
  .addLabel("LineApear")
  .to(Horizontal1,0.48,{delay:0.45,strokeDashoffset:'0'},'LineApear')
  .to(Horizontal2,0.48,{delay:0.45,strokeDashoffset:'54px'},'LineApear')
  .to(VerticalLine,0.99,{strokeDashoffset:'0'},'LineApear')
  .staggerTo([RightSnake,MiddleSnake,LeftSnake],0.99, {strokeDashoffset:'0'})

var svg = document.querySelector('svg'); 
var mouseevent =  function (e){
    if(!tl.isActive()){
        tl.restart();
    }
}
svg.addEventListener('mouseenter', mouseevent,false);