import React from 'react';
import { Component } from 'react';
import { TweenMax, TimelineMax } from "gsap";



class Home extends Component {
    componentDidMount(callback) {
        const el = this.container;
        TweenMax.fromTo(el, 0.3, { y: 100, opacity: 0 }, { y: -250, opacity: .5, onComplete: callback });


    }

    render() {
        return (
            <div id="test" className="test" ref={c => this.container = c}>
                <h3 className="home-bg-text" ref={el => this.bgtext = el}>Front End Developer</h3>
            </div >
        )
    }


}

export default Home;
