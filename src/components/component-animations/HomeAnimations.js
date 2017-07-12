// THIS IS WHERE THE MOBILE DESKTOP ANIMATIONS SHOULD BE KEPT

import { TweenMax, Elastic } from "gsap";

// MOBILE ANIMATION ===============

export function mobileAnimation(text1, text2, text2a, text3, text3a, text3b) {
    TweenMax.set(text1, {
        scale: 0,
        transformOrigin: "20px 150px",
        x: 20,
        y: 160,
        opacity: 0,
        zIndex: 4
    });

    TweenMax.set(text2, {
        x: 20,
        y: 160,
        opacity: 0,
        zIndex: 4
    });
    TweenMax.set(text2a, {
        x: 95,
        y: -50,
        opacity: 0,
        zIndex: 4
    });
    TweenMax.set(text3, {
        x: 20,
        y: 30,
        opacity: 0,
        zIndex: 4
    });

    TweenMax.set(text3a, {
        x: 20,
        y: 30,
        opacity: 0,
        zIndex: 4
    });

    TweenMax.set(text3b, {
        x: 20,
        y: 30,
        opacity: 0,
        zIndex: 4
    });
    TweenMax.to(text1, 1, { scale: 1, y: 30, opacity: 1, ease: Elastic.easeInOut });
    TweenMax.to(text2, .25, { y: -10, opacity: 1, delay: .7 });
    TweenMax.to(text2a, .25, { y: -99, opacity: 1, delay: .8 });
    TweenMax.to(text3, .25, { y: -135, opacity: 1, delay: .9 });
    TweenMax.to(text3a, .5, { y: -170, opacity: 1, delay: 1 });
    TweenMax.to(text3b, .5, { y: -203, opacity: 1, delay: 1.1 });
}

//DESKTOP ANIMATION =================

export function desktopAnimation(text1, text2, text2a, text3, text3a, text3b) {
    TweenMax.set(text1, {
        scale: 0,
        transformOrigin: "20px 150px",
        x: 20,
        y: 160,
        opacity: 0,
        zIndex: 4
    });
    TweenMax.set(text2, {
        x: 20,
        y: 160,
        opacity: 0,
        zIndex: 4
    });
    TweenMax.set(text2a, {
        x: 150,
        y: -150,
        opacity: 0,
        zIndex: 4
    });
    TweenMax.set(text3, {
        x: 220,
        y: 300,
        opacity: 0,
        zIndex: 4
    });

    TweenMax.set(text3a, {
        x: 433,
        y: 300,
        opacity: 1,
        zIndex: 4
    });

    TweenMax.set(text3b, {
        x: 585,
        y: 300,
        opacity: 1,
        zIndex: 4
    });


    TweenMax.to(text1, 1, { scale: 1, y: 10, opacity: 1, ease: Elastic.easeInOut });
    TweenMax.to(text2, .25, { y: -60, opacity: 1, delay: .7 });
    TweenMax.to(text2a, .25, { y: -200, opacity: 1, delay: .8, });
    TweenMax.to(text3, .5, { y: -345, opacity: 1, delay: .9 });
    TweenMax.to(text3a, .5, { y: -490, opacity: 1, delay: 1 });
    TweenMax.to(text3b, .5, { y: -630, opacity: 1, delay: 1.1 });
}
