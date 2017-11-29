import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => (
  <div className="footer">
    <Fade bottom>
      <div className="foottext">
        <div className="staticfoot">
          <img src="/Images/swastik.png" alt="" className="swastik" />
          <h4>|| श्री चित्रगुप्ताय नमः ||</h4>
          <img src="/Images/swastik.png" alt="" className="swastik" />
        </div>
        <h1>Chitransh Pariwar</h1>
        <h1>चित्रांश परिवार</h1>
      </div>
    </Fade>
    <div className="fbicons">
      <Fade left delay={500}><a href="https://www.facebook.com/chitranshpariwarkc"><i className="fa fa-facebook cicon" /></a></Fade>
      <Fade left delay={1000}><a href="https://twitter.com/SamSamresh"><i className="fa fa-twitter cicon" /></a></Fade>
      <Fade left delay={1500}><a href="https://plus.google.com/117904419750256545620"><i className="fa fa-google-plus cicon2" /></a></Fade>
      <Fade left delay={2000}><a href="https://www.instagram.com/samresh_sinha/?hl=en"><i className="fa fa-instagram cicon" /></a></Fade>
    </div>
  </div>
);
  
export default Footer;