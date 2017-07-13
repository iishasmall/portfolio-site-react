import React from 'react';
import { Component } from 'react';

import { mobileAnimation, desktopAnimation } from "./component-animations/AboutAnimations.js";

class About extends Component {
  componentDidMount(callback) {
    const el = this.container;
    const subhead = this.subhead;
    const bodyContent = this.bodyContent;

    if (window.matchMedia("(max-width:375px)").matches) {

      mobileAnimation(subhead, bodyContent, el);

    } else {

      desktopAnimation(subhead, bodyContent, el);

    }

    window.addEventListener("resize", resizeHandler);


    function resizeHandler() {

    }

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
