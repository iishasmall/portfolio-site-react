import { TweenMax } from "gsap";


//MOBILE ANIMATION =================

export function mobileAnimation(container, email, linkedin, github, subhead, textbg, callback) {

    TweenMax.set(container, {
        x: -20,
        height: 10
    });
    TweenMax.set(email, {
        x: -100,
        y: 330,
        opacity: 0
    });
    TweenMax.set(linkedin, {
        x: -100,
        y: 320,
        opacity: 0
    });
    TweenMax.set(github, {
        x: -100,
        y: 310,
        opacity: 0
    });
    TweenMax.set(subhead, {
        x: 10,
        y: 200,
        opacity: 0
    });

    TweenMax.to(subhead, .5, {
        y: 20,
        opacity: 1
    });

    TweenMax.set(textbg, {
        opacity: 0,
        display: "none"
    });

    TweenMax.fromTo(container, 0.3, { y: 300, opacity: 0 }, { y: -300, opacity: 1, onComplete: callback });
    TweenMax.to(email, .5, { opacity: 1, x: 30, delay: .3 });
    TweenMax.to(linkedin, .5, { opacity: 1, x: 30, delay: .45 });
    TweenMax.to(github, .5, { opacity: 1, x: 30, delay: .65 });

}






//DESKTOP ANIMATION =================

export function desktopAnimation(container, email, linkedin, github, subhead, textbg, callback) {

    TweenMax.set(container, {
        x: -20,
        height: 10
    });
    TweenMax.set(email, {
        x: -100,
        y: 290,
        opacity: 0
    });
    TweenMax.set(linkedin, {
        x: -100,
        y: 260,
        opacity: 0
    });
    TweenMax.set(github, {
        x: -100,
        y: 235,
        opacity: 0
    });
    TweenMax.set(subhead, {
        x: 80,
        y: 200,
        opacity: 0
    });

    TweenMax.to(subhead, .5, {
        y: 20,
        opacity: 1
    });
    TweenMax.set(textbg, {
        opacity: 1,
        display: "block"
    });

    TweenMax.fromTo(container, 0.3, { y: 300, opacity: 0 }, { y: -300, opacity: 1, onComplete: callback });
    TweenMax.to(email, .5, { opacity: 1, x: 100, delay: .3 });
    TweenMax.to(linkedin, .5, { opacity: 1, x: 100, delay: .45 });
    TweenMax.to(github, .5, { opacity: 1, x: 100, delay: .65 });
}