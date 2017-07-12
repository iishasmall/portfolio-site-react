import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Component } from 'react';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';



import './App.css';

class App extends Component {

    componentDidMount() {

        const resize = () => {
            console.log('resizing window');
        }
        window.onresize = resize;



    }


    render() {
        return (

            < Router >
                <div>
                    <div className="nav-container">
                        <div className="site-nav-container">
                            <nav className="nav-styling">
                                <NavLink exact to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <span><a href="http://www.google.com" target="_blank" rel="noopener noreferrer">Work</a></span>
                                <NavLink to="/contact">Contact</NavLink>
                            </nav>
                        </div>

                        <div className="info-nav-container">

                            <ul className="info-nav">

                                <li><a href="https://www.linkedin.com/in/iisha-small-3689931/" target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin-square fa-lg" aria-hidden="false"></i></a></li>
                                <li><a href="https://github.com/iishasmall" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg" aria-hidden="false"></i></a></li>
                                <li><a href="mailto:iishasmall@iishasmall.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope fa-lg" aria-hidden="false"></i></a></li>
                            </ul>
                        </div>
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