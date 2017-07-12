
import { TweenMax } from "gsap";


//MOBILE ANIMATION =================
export function mobileAnimation(subhead, bodyContent, el) {

    TweenMax.set(el, {
        opacity: 0
    });

    TweenMax.set(subhead, {
        x: 0,
        perspective: 800,
        opacity: 0,
        transformOrigin: "0px 50px",
        transformStyle: "preserve-3d",
        rotationX: -180
    });

    TweenMax.set(bodyContent, {
        x: 0,
        transformOrigin: "-50px 50px",
        scale: 0,
        opacity: 0
    });

    TweenMax.to(subhead, 1, { rotationX: 0, opacity: 1 });
    TweenMax.to(bodyContent, .65, { scale: 1, opacity: 1, delay: .25 });
}

//DESKTOP ANIMATION ================
export function desktopAnimation(subhead, bodyContent, el) {

    TweenMax.set(subhead, {
        x: 80,
        perspective: 800,
        opacity: 0,
        transformOrigin: "0px 50px",
        transformStyle: "preserve-3d",
        rotationX: -180
    });

    TweenMax.set(bodyContent, {
        x: 80,
        transformOrigin: "-50px 50px",
        scale: 0,
        opacity: 0
    });

    TweenMax.fromTo(el, 0.3, { y: 100, opacity: 0 }, { y: -290, opacity: 1 });
    TweenMax.to(subhead, 1, { rotationX: 0, opacity: 1 });
    TweenMax.to(bodyContent, .65, { scale: 1, opacity: 1, delay: .25 });
}

