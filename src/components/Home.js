import React from 'react';
import { Component } from 'react';
import { TweenMax } from "gsap";



class Home extends Component {
    componentDidMount(callback) {

        const text1 = this.text1;
        const text2 = this.text2;
        const text3 = this.text3;

        TweenMax.set(text1, { x: -300, y: 10, opacity: 0, zIndex: 4 });
        TweenMax.set(text2, { x: -300, y: -60, opacity: 0, zIndex: 4 });
        TweenMax.set(text3, { x: 215, y: 300, opacity: 0, zIndex: 4 });


        TweenMax.to(text1, .25, { x: 20, opacity: 1 });
        TweenMax.to(text2, .25, { x: 20, opacity: 1, delay: .2 });
        TweenMax.to(text3, .5, { y: -220, opacity: 1, delay: .4 });
    }

    render() {
        return (
            <div>

                <h2 ref={text1 => this.text1 = text1} className="home-hello-text">Hello</h2>
                <h2 ref={text2 => this.text2 = text2} className="home-hello-text">I'm a</h2>
                <h2 ref={text3 => this.text3 = text3} className="home-hello-text">Front End Developer</h2>
            </div >
        )
    }


}

export default Home;
