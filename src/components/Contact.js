import React from 'react';
import { Component } from 'react';
import { TweenMax } from 'gsap';


class Contact extends Component {

    componentDidMount(callback) {
        const container = this.container;
        const email = this.email;
        const linkedin = this.linkedin;
        const github = this.github;
        const subhead = this.subhead;

        TweenMax.set(container, { x: -20, height: 10 });
        TweenMax.set(email, { x: -100, y: 290, opacity: 0 });
        TweenMax.set(linkedin, { x: -100, y: 260, opacity: 0 });
        TweenMax.set(github, { x: -100, y: 235, opacity: 0 });
        TweenMax.set(subhead, { x: 80, y: 200, opacity: 0 });

        TweenMax.to(subhead, .5, { y: 20, opacity: 1 });

        TweenMax.fromTo(container, 0.3, { y: 300, opacity: 0 }, { y: -300, opacity: 1, onComplete: callback });
        TweenMax.to(email, .5, { opacity: 1, x: 100, delay: .3 });
        TweenMax.to(linkedin, .5, { opacity: 1, x: 100, delay: .45 });
        TweenMax.to(github, .5, { opacity: 1, x: 100, delay: .65 });
    }

    render() {
        return (

            <div>
                <h1 ref={subhead => this.subhead = subhead} className="contact-subhead">Keep in touch</h1>
                <div ref={c => this.container = c}>
                    <h2 ref={email => this.email = email} className="email-text">Email:iishasmall@gmail.com</h2>
                    <h2 ref={linkedin => this.linkedin = linkedin} className="email-text">LinkedIn:Iisha Small</h2>
                    <h2 ref={github => this.github = github} className="email-text">Github:github.com/iishasmall</h2>
                    <h3 ref={textbg => this.textbg = textbg} className="contact-bg-text">Contact</h3>
                </div>

            </div>
        )
    }
}


export default Contact;
