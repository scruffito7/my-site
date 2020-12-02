import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class ShoppingCart extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
      <table class="table table-bordered text-center">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">img</th>
      <td>Shirt</td>
      <td>$15.00</td>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">img</th>
      <td>Hat</td>
      <td>$8.00</td>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">img</th>
      <td>Sweatshirt</td>
      <td>$35.00</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>
    );
  }
}

export default ShoppingCart
