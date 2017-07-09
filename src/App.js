import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Component } from 'react';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

import './App.css';

class App extends Component {

    render() {
        return (
            < Router >
                <div>
                    <div className="nav-container">
                        <div className="site-nav-container">
                            <nav className="nav-styling">
                                <NavLink exact to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </nav>
                        </div>

                        <div className="info-nav-container">

                            <ul className="info-nav">
                                <li><i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></li>
                                <li><i className="fa fa-github fa-lg" aria-hidden="true"></i></li>
                                <li><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="name-txt">iisha small</h2>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router >
        )
    }
}



export default App