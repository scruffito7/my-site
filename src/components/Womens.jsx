import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class Womens extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <h2>Womens Clothing</h2>
        <a href="http://localhost:3000/accessories"> Accessories</a>
          <div />
        <a href="http://localhost:3000/womensdressshirts"> Dress Shirts</a>
          <div />
        <a href="http://localhost:3000/womensjerseys"> Jerseys</a>
          <div />
        <a href="http://localhost:3000/womensouterwear"> Outerwear</a>
          <div />
        <a href="http://localhost:3000/womenspoloshirts"> Polo Shirts</a>
          <div />
        <a href="http://localhost:3000/womenssweatshirts"> Sweatshirts/Fleece</a>
      <div />
      <a href="http://localhost:3000/womenstshirts"> T-Shirts</a>
        </div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://cdn.shopify.com/s/files/1/0797/4925/products/LST307_trueroyal_model_front_112013_large.jpg?v=1438621214" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-md-block">
        <a href='http://localhost:3000/womensjerseys/'><button>View Item!</button></a>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://cdn.shopify.com/s/files/1/0797/4925/products/DT801_black_model_front_large.jpg?v=1538076686" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-md-block">
          <a href='http://localhost:3000/womenssweatshirts'><button>View Item!</button></a>
        </div>
      </div>
      <div class="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0797/4925/products/LST253_AthleticHeather_Model_Front_071410_large.jpg?v=1538076788" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
          <a href='http://localhost:3000/womenssweatshirts'><button>View Item!</button></a>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
      </div>
    );
  }
}

export default Womens
