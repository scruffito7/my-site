import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Carousel from '../components/Carousel.jsx';

class Home extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <h2>Featured Clothing</h2>
        <a href="http://localhost:3000/accessories"> Accessories</a>
          <div />
        <a href="http://localhost:3000/dressshirts"> Dress Shirts</a>
          <div />
        <a href="http://localhost:3000/jerseys"> Jerseys</a>
          <div />
        <a href="http://localhost:3000/outerwear"> Outerwear</a>
          <div />
        <a href="http://localhost:3000/poloshirts"> Polo Shirts</a>
          <div />
        <a href="http://localhost:3000/sweatshirts"> Sweatshirts/Fleece</a>
        <div />
      <a href="http://localhost:3000/tshirts"> T-Shirts</a>
        <Carousel />
        </div>
      </div>
    );
  }
}

export default Home
