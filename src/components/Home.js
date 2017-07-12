import React from 'react';
import { Component } from 'react';

import { mobileAnimation, desktopAnimation } from "./component-animations/HomeAnimations.js";


class Home extends Component {

    componentDidMount(callback) {

        const text1 = this.text1;
        const text2 = this.text2;
        const text2a = this.text2a;
        const text3 = this.text3;
        const text3a = this.text3a;
        const text3b = this.text3b;

        const resize = () => {
            console.log('resizing window');
        }
        window.onresize = resize;

        if (window.matchMedia("(max-width:375px)").matches) {

            mobileAnimation(text1, text2, text2a, text3, text3a, text3b);

        } else {

            desktopAnimation(text1, text2, text2a, text3, text3a, text3b);

        }
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
