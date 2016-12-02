var VerticalLine = document.querySelector('#VerticalLine'),
    Horizontal1 = document.querySelector('#Horizontal1'),
    Horizontal2 = document.querySelector('#Horizontal2'),
    RightSnake = document.querySelector('#RightSnake'),
    MiddleSnake = document.querySelector('#MiddleSnake'),
    LeftSnake = document.querySelector('#LeftSnake'),
    MainSnake = document.querySelector('#MainSnake');

var tl = new TimelineMax({paused:true})

tl.set([RightSnake,MiddleSnake,LeftSnake],{strokeDashoffset:'72px'})
  .staggerTo([RightSnake,MiddleSnake,LeftSnake],0.33, {strokeDashoffset:'38px'})
  .set(Horizontal2,{strokeDashoffset:'56px'})
  .addLabel("LineDisapear")
  .to(Horizontal1,0.16,{strokeDashoffset:'29px'},'LineDisapear')
  .to(Horizontal2,0.16,{strokeDashoffset:'29px'},'LineDisapear')
  .to(VerticalLine,0.33,{strokeDashoffset:'17px'},'LineDisapear')
  .to(MainSnake,0.33,{strokeDashoffset:'50px'})
  .to(MainSnake,0.99,{delay:0.5,strokeDashoffset:'99px'})
  .addLabel("LineApear")
  .to(Horizontal1,0.48,{delay:0.45,strokeDashoffset:'0'},'LineApear')
  .to(Horizontal2,0.48,{delay:0.45,strokeDashoffset:'56px'},'LineApear')
  .to(VerticalLine,0.99,{strokeDashoffset:'0'},'LineApear')
  .staggerTo([RightSnake,MiddleSnake,LeftSnake],0.99, {strokeDashoffset:'0'})

var svg = document.querySelector('svg'); 
var mouseevent =  function (e){
    if(!tl.isActive()){
        tl.restart();
    }
}
svg.addEventListener('mouseenter', mouseevent,false);