import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Component } from 'react';
import { TweenMax } from 'gsap';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';




import './App.css';


class App extends Component {

    componentDidMount() {




    }



    mouseOver(e) {
        const btn = e.currentTarget;
        TweenMax.to(btn, .25, { color: "#000" });

    }

    mouseOut(e) {
        const btn = e.currentTarget;
        TweenMax.to(btn, .25, { color: "#fff" });

    }

    iconMouseOver(e) {
        const btn = e.currentTarget;
        TweenMax.to(btn, .25, { scale: 2 });

    }

    iconMouseOut(e) {
        const btn = e.currentTarget;
        TweenMax.to(btn, .25, { scale: 1 });
    }


    render() {
        return (



            < Router >
                <div>
                    {/*   SECTION NAV CONTAINER CONTENT STARTS ==============*/}
                    <div className="nav-container">
                        <div className="site-nav-container">
                            <nav className="nav-styling">
                                <NavLink exact to="/"
                                    onMouseOver={this.mouseOver.bind(this)}
                                    onMouseOut={this.mouseOut.bind(this)}>
                                    Home
                                   </NavLink>
                                <NavLink to="/about"
                                    onMouseOver={this.mouseOver.bind(this)}
                                    onMouseOut={this.mouseOut.bind(this)}>
                                    About
                                </NavLink>
                                <span>
                                    <a href="http://www.google.com"
                                        target="_blank" rel="noopener noreferrer"
                                        onMouseOver={this.mouseOver.bind(this)}
                                        onMouseOut={this.mouseOut.bind(this)}>
                                        Work</a>
                                </span>
                                <NavLink to="/contact"
                                    onMouseOver={this.mouseOver.bind(this)}
                                    onMouseOut={this.mouseOut.bind(this)}>
                                    Contact
                                </NavLink>
                            </nav>
                        </div>
                        {/*   SECTION NAV CONTAINER CONTENT ENDS ==============*/}

                        {/* ICON NAV CONTAINER CONTENT STARTS ==============*/}
                        <div className="info-nav-container">

                            <ul className="info-nav">

                                <li onMouseOver={this.iconMouseOver.bind(this)}
                                    onMouseOut={this.iconMouseOut.bind(this)}>
                                    <a href="https://www.linkedin.com/in/iisha-small-3689931/"
                                        target="_blank" rel="noopener noreferrer" >
                                        <i className="fa fa-linkedin-square fa-lg" aria-hidden="false"></i>
                                    </a>
                                </li>
                                <li onMouseOver={this.iconMouseOver.bind(this)}
                                    onMouseOut={this.iconMouseOut.bind(this)}>
                                    <a href="https://github.com/iishasmall"
                                        target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-github fa-lg" aria-hidden="false"></i>
                                    </a>
                                </li>
                                <li onMouseOver={this.iconMouseOver.bind(this)}
                                    onMouseOut={this.iconMouseOut.bind(this)}>
                                    <a href="mailto:iishasmall@iishasmall.com"
                                        target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-envelope fa-lg" aria-hidden="false"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* ICON NAV CONTAINER CONTENT ENDS ==============*/}

                    </div>

                    <h2 className="name-txt">iisha small</h2>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />

                </div>
            </Router >
        )
    }
}


export default App;