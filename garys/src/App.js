import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Contact from "./pages/Contact/Contact.js";
import Services from "./pages/Services/Services.js";
import logo from './gdclogo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
       
       <img src={logo} alt="Logo" width="95%"></img>
       
      </div>
      <Router>
    
      <ul className="header">
         <li><Link to="/">Home</Link></li>
         <li><Link to="/Services">Services</Link></li>
         <li><Link to="/Contact">Contact</Link></li>
      </ul>
      
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Services/" component={Services}/>
            <Route path="/Contact/" component={Contact}/>
          </div>
      </Router>
      </div>

     
    );
  }
}

export default App;
