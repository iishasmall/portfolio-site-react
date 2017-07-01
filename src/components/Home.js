import React from 'react';
import { Component } from 'react';
import { TweenMax } from "gsap";



class Home extends Component {
    componentDidMount(callback) {
        const bgtext = this.bgtext;
        const hello = this.hellotext;
        TweenMax.set(hello, { y: 10, zIndex: 4 });
        TweenMax.set(bgtext, { zIndex: 1 });

        TweenMax.fromTo(bgtext, 0.3, { y: 100, opacity: 0 }, { y: -300, opacity: .5, onComplete: callback });


    }

    render() {
        return (
            <div>
                <h2 className="home-hello-text" ref={hello => this.hellotext = hello}>Hello</h2>
                <h3 className="home-bg-text" ref={bgtext => this.bgtext = bgtext}>Front End Developer</h3>

            </div >
        )
    }


}

export default Home;
