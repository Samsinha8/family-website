import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const mns = () => (
    <div className="mns">
      <Header />
      <div className="pujasamiti">
        <Fade bottom className="cpshead">
        <img className="adhyaksh" src="/Images/slide1.jpg" alt="" />
        <h2>श्री रामकुमार लाल</h2>
        <h3>अध्यक्ष</h3>
        </Fade>
        <Fade bottom delay={500} className="cpshead2">
        <div className="headgrp">
          <div className="upadhyaksh">
            <img className="adhyaksh2" src="/Images/slide1.jpg" alt="" />
            <h2>श्री अवध किशोर प्रसाद</h2>
            <h3>उपाध्यक्ष</h3>
          </div>
          <div className="upadhyaksh">
            <img className="adhyaksh2" src="/Images/slide1.jpg" alt="" />
            <h2>अज्ञात</h2>
            <h3>सचिव</h3>
          </div>
          <div className="upadhyaksh">
            <img className="adhyaksh2" src="/Images/slide1.jpg" alt="" />
            <h2>श्री दिनेश लाल</h2>
            <h3>कोषाध्यक्ष</h3>
          </div>
        </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
  
  export default mns;