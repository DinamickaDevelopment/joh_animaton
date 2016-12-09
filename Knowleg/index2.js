var elem1 = document.querySelector('.animation1'),
    elem2 = document.querySelector('.animation2'),
    yoda = document.querySelector('.yoda'),
    boom = document.querySelector('.boom');

TweenMax.to(elem2, 1, {css:{backgroundPosition :"-1288px 0px"}, ease:SteppedEase.config(7), repeat:-1});
TweenMax.to(elem1, 0.1, {css:{backgroundPosition :"340px 0px"}, ease:SteppedEase.config(4), repeat:-1});
TweenMax.to(yoda, 0.9, {css:{backgroundPosition :"-96px -8px"}, ease:SteppedEase.config(3), repeat:-1});
TweenMax.to(boom, 0.2, {css:{backgroundPosition :"-1427px 0px"}, ease:SteppedEase.config(15), repeat:-1});
