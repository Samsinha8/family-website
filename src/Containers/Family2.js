import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const Family2 = () => (
  <div>
    <Header />
    <div className="abtcntnt">
      <Fade bottom>
        <div className="nexthead">
          <h1>Family No. 2</h1>
        </div>
      </Fade>
      <Fade bottom delay={500} className="tier1">
        <div className="memhead">
          <img className="mempic" src="/Images/commit/Papa.jpg" alt="" />
          <h3>श्री सतीश कुमार सिन्हा</h3>
          <h4>परिवार के मुखिया</h4>
        </div>
        <i className="fa fa-arrow-left yes" /><hr className="nonmuted" /><hr className="nonmuted" /><i className="fa fa-arrow-right" />
        <div className="memhead">
          <img className="mempic" src="/Images/Members/Maa.jpg" alt="" />
          <h3>श्रीमती शैल सिन्हा</h3>
          <h4>पत्नी</h4>
        </div>
      </Fade>
      <hr className="vertical"/>
      <Fade bottom delay={1000} className="tier2">
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic" src="/Images/commit/Sonu.jpg" alt="" />
          <h3>समरेश कुमार सिन्हा</h3>
          <h4>सुपुत्र</h4>
        </div>
      </Fade>
    </div>
    <Footer />
  </div>
);

export default Family2;