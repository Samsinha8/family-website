import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => (
  <div className="footer">
    <Fade right>
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
    <Fade bottom delay={500}><h2>से जुड़ें</h2></Fade>
    <div className="fbicons">
      <Fade left delay={500}><a href="https://www.facebook.com/chitranshpariwarkc" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook cicon" /></a></Fade>
      <Fade left delay={1000}><a href="https://chat.whatsapp.com/9UC03h4f9fpAoWRcMX4WTt" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp cicon" /></a></Fade>
      <Fade left delay={1500}><a href="https://twitter.com/SamSamresh" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter cicon" /></a></Fade>
      <Fade left delay={2000}><a href="https://www.instagram.com/samresh_sinha/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram cicon" /></a></Fade>
    </div>
  </div>
);
  
export default Footer;