import React from 'react';
import Fade from 'react-reveal/Fade';
import '../App.css';

const Footer = () => (
  <div className="footer">
    <Fade bottom>
      <div className="foottext">
        <h1>Chitransh Pariwar</h1>
        <h1>चित्रांश परिवार</h1>
      </div>
    </Fade>
    <div className="fbicons">
      <Fade bottom delay={500}><a href="https://www.facebook.com/chitranshpariwarkc"><i className="fa fa-facebook cicon" /></a></Fade>
      <Fade bottom delay={1000}><a href="https://twitter.com/SamSamresh"><i className="fa fa-twitter cicon" /></a></Fade>
      <Fade bottom delay={1500}><a href="https://plus.google.com/117904419750256545620"><i className="fa fa-google-plus cicon2" /></a></Fade>
      <Fade bottom delay={2000}><a href="https://www.instagram.com/samresh_sinha/?hl=en"><i className="fa fa-instagram cicon" /></a></Fade>
    </div>
  </div>
);
  
export default Footer;