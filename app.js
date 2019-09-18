  var vw = (window.innerWidth)*0.78;
  var vh = window.innerHeight;

//set up ScrollMagic
  var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
          triggerHook: 'onLeave'
      }
  });


  //pin the navigation
  var pin = new ScrollMagic.Scene({
      triggerElement: '#nav'
  }).setPin('#nav', {pushFollowers: false}).addTo(controller);


var tween = new TimelineLite({onUpdate:updatePercentage});
const acontroller = new ScrollMagic.Controller();

    tween.to('#logo-nav',1,{opacity:100},'=-.5')
    tween.to('#quote0, #text0',1,{x:-200, opacity:0},'=-1')
    tween.to('#quote1',1,{x:-vw, y:0, opacity:100},'=-1')

    tween.to('#quote1',1,{opacity:0},'=0')
    tween.to('#quote2',1,{x:-vw, y:0, opacity:100},'=-.5')

    tween.to('#quote2',1,{opacity:0},'=0')
    tween.to('#quote3',1,{x:-vw, y:0, opacity:100},'=-.5')

    tween.to('#quote3',1,{opacity:0},'=0')
    tween.to('#quote4',1,{x:-vw, y:0, opacity:100},'=-.5')
    
    tween.to('#quote4',1,{opacity:0},'=0')



const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    triggerHook: "onLeave",
    duration: "200%"
})

.setPin(".animation")
.setTween(tween)
.addTo(acontroller);

function updatePercentage(){
    tween.progress();
}

