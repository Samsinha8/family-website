import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const Family1 = () => (
  <div>
    <Header />
    <div className="abtcntnt">
      <Fade bottom>
        <div className="nexthead">
          <h1>Family No. 1</h1>
        </div>
      </Fade>
      <Fade bottom delay={500} className="tier1">
        <div className="memhead">
          <img className="mempic" src="/Images/commit/ChotePa.jpg" alt="" />
          <h3>श्री सतीश कुमार सिन्हा</h3>
          <h4>परिवार के मुखिया</h4>
        </div>
        <i className="fa fa-arrow-left yes" /><hr className="nonmuted" /><hr className="nonmuted" /><i className="fa fa-arrow-right" />
        <div className="memhead">
          <img className="mempic" src="/Images/Members/ChotiMaa.jpg" alt="" />
          <h3>श्रीमती बेनु सिन्हा</h3>
          <h4>पत्नी</h4>
        </div>
      </Fade>
      <hr className="vertical"/>
      <hr className="horizon"/>
      <Fade bottom delay={1000} className="tier2">
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic" src="/Images/commit/Sandeep.jpg" alt="" />
          <h3>संदीप कुमार सिन्हा</h3>
          <h4>सुपुत्र</h4>
        </div>
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic" src="/Images/Members/Babli.jpg" alt="" />
          <h3>सुष्मिता सिन्हा</h3>
          <h4>सुपुत्री</h4>
        </div>
      </Fade>
    </div>
    <Footer />
  </div>
);

export default Family1;