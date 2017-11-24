import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const About = () => (
  <div>
    <Header />
    <div className="abtcntnt">
      <Fade bottom>
        <div className="nexthead">
          <h1>About us</h1>
          <h1>हमारे बारे में</h1>
        </div>
      </Fade>
    </div>
    <Footer />
  </div>
);

export default About;