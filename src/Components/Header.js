import React from 'react';
import { Link } from 'react-router-dom';
import SliderMenu from '../Components/SliderMenu';
import '../App.css';

const Header = () => (
  <div className="App-header">
    <SliderMenu />
    <a href="#root" className="openbtn" aria-hidden>
      <i className="fa fa-bars" />
    </a>
    <img src="/Images/mainimage.JPG" className="headimg" alt="" />
    <div className="heading">
      <Link to="/"><h1>Chitransh Pariwar <span>Kenar Chatti</span></h1></Link>
      <Link to="/"><h1>चित्रांश परिवार <span>केनार चट्टी</span></h1></Link>
    </div>
    <h3 className="estd">Estd: 1931</h3>
  </div>
);
  
export default Header;