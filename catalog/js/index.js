// Run Tabslet
$('.tabs').tabslet({
  animation: true
});

// Animation with Greensock

var tl1 = new TimelineMax({ delay: .5 });

tl1.from('.animate-one', .6, {opacity:0,x:-25,ease: Power1.easeOut});
tl1.from('#animate-two', .6, {opacity:0,x:-20,ease:Power1.easeOut},'-=.35');