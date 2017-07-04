import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

import './App.css';


const App = () => (
    <Router>
        <div>
            <nav className="nav-styling">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <h2 className="name-txt">iisha small</h2>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
);

export default App