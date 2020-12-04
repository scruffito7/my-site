import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
  render(){
    return(
    <nav className="navbar navbar-toggleable-md navbar-light bg-primary">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
 <Link className = "navbar-brand" to = "/"><img src = 'https://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/209/2016/02/21224033/820cae7ad803c518-Full-color-lion.jpg'width = "130" height = "80"/>  HSE Fanstand</Link>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/mens">Mens</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/womens">Womens</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/shoppingcart">Cart</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
              </li>
              </ul>
      </div>
    </nav>
    );
  }
}
export default Navbar
