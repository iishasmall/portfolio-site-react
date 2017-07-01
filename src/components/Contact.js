import React from 'react';
import { Component } from 'react';
import { TweenMax } from "gsap";


class Contact extends Component {

    componentDidMount(callback) {
        const contact = this.contact;
        const email = this.email;
        const linkedin = this.linkedin;
        const github = this.github;

        TweenMax.set(contact, { x: -20 });
        TweenMax.set(email, { x: -100, y: 100, opacity: 0 });
        TweenMax.set(linkedin, { x: -100, y: 80, opacity: 0 });
        TweenMax.set(github, { x: -100, y: 60, opacity: 0 });

        TweenMax.fromTo(contact, 0.3, { y: 300, opacity: 0 }, { y: -250, opacity: .5, onComplete: callback });
        TweenMax.to(email, .5, { opacity: 1, x: 100, delay: .3 });
        TweenMax.to(linkedin, .5, { opacity: 1, x: 100, delay: .45 });
        TweenMax.to(github, .5, { opacity: 1, x: 100, delay: .65 });
    }

    render() {
        return (

            <div>

                <h2 ref={email => this.email = email} className="email-text">Email:iishasmall@gmail.com</h2>
                <h2 ref={linkedin => this.linkedin = linkedin} className="email-text">LinkedIn:Iisha Small</h2>
                <h2 ref={github => this.github = github} className="email-text">Github:github.com/iishasmall</h2>
                <h3 ref={c => this.contact = c} className="contact-bg-text">Contact</h3>

            </div>
        )
    }
}


export default Contact;
