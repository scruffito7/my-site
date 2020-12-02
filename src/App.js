import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Mens from './components/Mens.jsx';
import Womens from './components/Womens.jsx';
import Accessories from './components/Accessories.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
//mens
import MensTShirts from './components/MensTShirts.jsx';
import MensDressShirts from './components/MensDressShirts.jsx';
import MensJerseys from './components/MensJerseys.jsx';
import MensOuterwear from './components/MensOuterwear.jsx';
import MensPoloShirts from './components/MensPoloShirts.jsx';
import MensSweatshirts from './components/MensSweatshirts.jsx';
//womens
import WomensTShirts from './components/WomensTShirts.jsx';
import WomensDressShirts from './components/WomensDressShirts.jsx';
import WomensJerseys from './components/WomensJerseys.jsx';
import WomensOuterwear from './components/WomensOuterwear.jsx';
import WomensPoloShirts from './components/WomensPoloShirts.jsx';
import WomensSweatshirts from './components/WomensSweatshirts.jsx';
//no gender
import TShirts from './components/TShirts.jsx';
import DressShirts from './components/DressShirts.jsx';
import Jerseys from './components/Jerseys.jsx';
import Outerwear from './components/Outerwear.jsx';
import PoloShirts from './components/PoloShirts.jsx';
import Sweatshirts from './components/Sweatshirts.jsx';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component= {Home}/>
        <Route path ='/about' component= {About}/>
        <Route path ='/mens' component = {Mens}/>
        <Route path ='/womens' component = {Womens}/>
        <Route path ='/accessories' component = {Accessories}/>
        <Route path ='/shoppingcart' component = {ShoppingCart}/>

        <Route path ='/menstshirts' component = {MensTShirts}/>
        <Route path ='/mensdressshirts' component = {MensDressShirts}/>
        <Route path ='/mensjerseys' component = {MensJerseys}/>
        <Route path ='/mensouterwear' component = {MensOuterwear}/>
        <Route path ='/menspoloshirts' component = {MensPoloShirts}/>
        <Route path ='/menssweatshirts' component = {MensSweatshirts}/>

        <Route path ='/womenstshirts' component = {WomensTShirts}/>
        <Route path ='/womensdressshirts' component = {WomensDressShirts}/>
        <Route path ='/womensjerseys' component = {WomensJerseys}/>
        <Route path ='/womensouterwear' component = {WomensOuterwear}/>
        <Route path ='/womenspoloshirts' component = {WomensPoloShirts}/>
        <Route path ='/womenssweatshirts' component = {WomensSweatshirts}/>

        <Route path ='/tshirts' component = {TShirts}/>
        <Route path ='/dressshirts' component = {DressShirts}/>
        <Route path ='/jerseys' component = {Jerseys}/>
        <Route path ='/outerwear' component = {Outerwear}/>
        <Route path ='/poloshirts' component = {PoloShirts}/>
        <Route path ='/sweatshirts' component = {Sweatshirts}/>
      </div>
    </Router>
  );
}

export default App;
