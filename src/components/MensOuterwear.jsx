import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class MensOuterwear extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <h2>Mens Outerwear</h2>
      </div>
      </div>
    );
  }
}

export default MensOuterwear
