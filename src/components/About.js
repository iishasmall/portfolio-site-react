import React from 'react';
import { Component } from 'react';
import { TweenMax } from "gsap";


class About extends Component {
  componentDidMount(callback) {
    const el = this.container;
    const subhead = this.subhead;
    const bodyContent = this.bodyContent;

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

    TweenMax.fromTo(el, 0.3, { y: 100, opacity: 0 }, { y: -320, opacity: .5, onComplete: callback });
    TweenMax.to(subhead, 1, { rotationX: 0, opacity: 1 });
    TweenMax.to(bodyContent, .65, { scale: 1, opacity: 1, delay: .25 });
  }
  render() {
    return (
      <div>

        <div ref={subhead => this.subhead = subhead}>
          <h1 className="about-subhead">About Me</h1>
        </div>
        <div ref={bodyContent => this.bodyContent = bodyContent}>
          <p className="about-content">
            I have extensive experience in Front End Development creating many multimedia kiosks, responsive HTML emails, Veeva IVA presentations and banners using HTML5, Sass, Javascript, JQuery, Bootstrap and Angular for advertising agencies. I am also well versed in the front end styling and maintenance of WordPress websites. I have guided creative teams in the best technical practices to achieve their creative goals and satisfy the technical specs required for the digital space.
          </p>
        </div>
        <div ref={c => this.container = c}>
          <h2 className="about-bg-text">About</h2>
        </div>
      </div>
    )
  }
}

export default About;
