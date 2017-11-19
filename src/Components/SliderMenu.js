import React from 'react';

const SliderMenu = () => (
  <nav id="nav">
    <div className="sidenav">
      <div className="slideHeader">
        <a href="#!" className="closebtn">
          <i className="fa fa-times" />
        </a>
        <img src="/Images/mainimage.JPG" className="sideimage" alt="" />
        <h1>Chitransh Pariwar</h1>
      </div>
      <div className="links">
        <a href="mailto:sam.749382@gmail.com"><h3><i className="fa fa-envelope email icons2" />sam.749382@gmail.com</h3></a>
        <a href="https://www.facebook.com/chitranshpariwarkc"><h3><i className="fa fa-facebook icons" />facebook</h3></a>
        <a href="https://twitter.com/SamSamresh"><h3><i className="fa fa-twitter icons" />Twitter</h3></a>
        <a><h3><i className="fa fa-phone icons" />9852236661</h3></a>
      </div>
    </div>
    <div className="backdrop" />
  </nav>
);

export default SliderMenu;
