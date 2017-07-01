import React from 'react';
import { Component } from 'react';
import { TweenMax, TimelineMax } from "gsap";


class About extends Component {
  componentDidMount(callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, { y: 100, opacity: 0 }, { y: -50, opacity: 1, onComplete: callback });
  }
  render() {
    return (
      <div id="test" className="test" ref={c => this.container = c}>
        <h2 className="about-bg-text">About</h2>
      </div>
    )
  }
}

export default About;
