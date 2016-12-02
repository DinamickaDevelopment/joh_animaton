var stackDevices = document.querySelector("#Devices");
var devices = [document.querySelector("#monitor"),
               document.querySelector("#Phone"),
               document.querySelector("#tablet")];
var stackAnim = TweenMax.to(stackDevices,3,{paused:true,rotation:360,transformOrigin:"50% 50%",ease:Linear.easeNone})
var devAnim = TweenMax.staggerTo(devices,3,{paused:true,rotation:-360,transformOrigin:"50% 50%",ease:Linear.easeNone})
var svg = document.querySelector('svg'); 

var mouseevent =  function (e){
    if(!stackAnim.isActive()){
        stackAnim.restart();
        for(element in devAnim){        
            devAnim[element].restart();
        }
    }
}
svg.addEventListener('mouseenter', mouseevent,false);