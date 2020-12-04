import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class Accessories extends Component {
  render(){
    return(
      <div>
      <Navbar />
      <Footer />
      <div className = "container">
      <h2> Accessories</h2>
      <ul>
        <Link className = "item1" to = "/item1"><img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/SIGN_efc565d5-1bb9-4c86-b27c-3b0f64d453b5_large.png?v=1525112026"width = "200" height = "200"/> Garage sign </Link>
        <Link className = "item2" to = "/item2"><img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/TW50_Black_Accessories06_pg36_large.jpg?v=1538076642"width = "200" height = "200"/> Golf Towel </Link>
        <Link className = "item3" to = "/item3"><img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/BP40_HearthGrey_Folded_071312_large.jpg?v=1538078221"width = "200" height = "200"/> Lodge Blanket </Link>
        <Link className = "item4" to = "/item4"><img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/BP10_Folded_MidnightHthr_large.jpg?v=1538078632"width = "200" height = "200"/> Fleece Blanket </Link>
      </ul>

      </div>
</div>
    );
  }
}

export default Accessories
