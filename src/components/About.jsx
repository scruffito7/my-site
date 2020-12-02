import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class About extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <h2>About</h2>
         <p>Made by Lucas and Stewart </p>
        </div>
      </div>
    );
  }
}

export default About
