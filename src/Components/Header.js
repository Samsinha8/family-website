import React from 'react';
import { Link } from 'react-router-dom';
import SliderMenu from '../Components/SliderMenu';

const Header = () => (
  <div className="App-header">
    <div className="header">
      <SliderMenu />
      <a href="#root" className="openbtn" aria-hidden>
        <i className="fa fa-bars" />
      </a>
      <Link to="/"><img src="/Images/mainimage.JPG" className="headimg" alt="" /></Link>
      <div className="heading">
        <h1>Chitransh Pariwar <span>Kenar Chatti</span></h1>
        <h1>चित्रांश परिवार <span>केनार चट्टी</span></h1>
      </div>
      <h5 className="estd">Estd: 1931</h5>
    </div>
  </div>
);
  
export default Header;