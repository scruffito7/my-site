import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

class Carousel extends Component{
  render(){
    return(
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0797/4925/products/ST850_Black_Model_Front_071310_large.jpg?v=1538078528" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
      <a href='http://localhost:3000/menssweatshirts'><button>View Item!</button></a>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0797/4925/products/LST307_trueroyal_model_front_112013_large.jpg?v=1438621214" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <a href='http://localhost:3000/womensjerseys'><button>View Item!</button></a>
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://cdn.shopify.com/s/files/1/0797/4925/products/ST307_trueroyal_model_front_112013_large.jpg?v=1438618745" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-md-block">
        <a href='http://localhost:3000/mensjerseys'><button>View Item!</button></a>
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
    );
  }
}
export default Carousel
