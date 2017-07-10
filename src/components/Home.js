import React from 'react';
import { Component } from 'react';
import { TweenMax, Bounce, Elastic } from "gsap";



class Home extends Component {
    componentDidMount(callback) {

        const text1 = this.text1;
        const text2 = this.text2;
        const text2a = this.text2a;
        const text3 = this.text3;
        const text3a = this.text3a;
        const text3b = this.text3b;

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
            y: -200,
            opacity: 0,
            zIndex: 4
        });
        TweenMax.set(text3, {
            x: 215,
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
        TweenMax.to(text2a, .25, { y: -220, opacity: 1, delay: .8, });
        TweenMax.to(text3, .5, { y: -380, opacity: 1, delay: .9 });
        TweenMax.to(text3a, .5, { y: -540, opacity: 1, delay: 1 });
        TweenMax.to(text3b, .5, { y: -699, opacity: 1, delay: 1.1 });
    }

    render() {
        return (
            <div>

                <h2 ref={text1 => this.text1 = text1} className="home-hello-text">Hello</h2>
                <h2 ref={text2 => this.text2 = text2} className="home-hello-text">I'm </h2>
                <h2 ref={text2a => this.text2a = text2a} className="home-hello-text"> a</h2>
                <h2 ref={text3 => this.text3 = text3} className="home-hello-text">Front</h2>
                <h2 ref={text3a => this.text3a = text3a} className="home-hello-text">End</h2>
                <h2 ref={text3b => this.text3b = text3b} className="home-hello-text">Developer</h2>
            </div >
        )
    }


}

export default Home;
