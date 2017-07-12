import React from 'react';
import { Component } from 'react';
import { mobileAnimation, desktopAnimation } from "./component-animations/ContactAnimations.js";

class Contact extends Component {

    componentDidMount(callback) {
        const container = this.container;
        const email = this.email;
        const linkedin = this.linkedin;
        const github = this.github;
        const subhead = this.subhead;
        const textbg = this.textbg;

        if (window.matchMedia("(max-width:375px)").matches) {

            mobileAnimation(container, email, linkedin, github, subhead, textbg, callback);

        } else {

            desktopAnimation(container, email, linkedin, github, subhead, textbg, callback);

        }






    }

    render() {
        return (

            <div>
                <h1 ref={subhead => this.subhead = subhead} className="contact-subhead">Keep in touch</h1>
                <div ref={c => this.container = c}>
                    <h2 ref={email => this.email = email} className="email-text"><a href="mailto:iishasmall@gmail.com" rel="noopener noreferrer">Email:iishasmall@gmail.com</a></h2>
                    <h2 ref={linkedin => this.linkedin = linkedin} className="email-text"><a href="https://www.linkedin.com/in/iisha-small-3689931/" target="_blank" rel="noopener noreferrer">LinkedIn:Iisha Small</a></h2>
                    <h2 ref={github => this.github = github} className="email-text"><a href="https://github.com/iishasmall" target="_blank" rel="noopener noreferrer">Github:github.com/iishasmall</a></h2>
                    <h3 ref={textbg => this.textbg = textbg} className="contact-bg-text">Contact</h3>
                </div>

            </div>
        )
    }
}


export default Contact;
