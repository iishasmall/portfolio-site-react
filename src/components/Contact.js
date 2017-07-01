import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Component } from 'react';
import { TweenMax, TimelineMax } from "gsap";


class Contact extends Component {

    componentDidMount(callback) {
        const el = this.container;

        TweenMax.set(el, { x: -20 });
        TweenMax.fromTo(el, 0.3, { y: 100, opacity: 0 }, { y: -20, opacity: 1, onComplete: callback });

    }

    render() {
        return (

            <div ref={c => this.container = c}>
                <h3 className="contact-bg-text">Contact</h3>
            </div>
        )
    }
}


export default Contact;
