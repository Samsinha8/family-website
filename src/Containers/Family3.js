import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const Family3 = () => (
  <div>
    <Header />
    <div className="abtcntnt">
      <Fade bottom>
        <div className="nexthead">
          <h1>Family No. 3</h1>
        </div>
      </Fade>
      <Fade bottom delay={500} className="tier1">
        <div className="memhead">
          <img className="mempic" src="/Images/commit/BadePa.jpg" alt="" />
          <h3>श्री अवध किशोर प्रसाद</h3>
          <h4>परिवार के मुखिया</h4>
        </div>
        <i className="fa fa-arrow-left yes" /><hr className="nonmuted" /><hr className="nonmuted" /><i className="fa fa-arrow-right" />
        <div className="memhead">
          <img className="mempic" src="/Images/Members/BadiMaa.jpg" alt="" />
          <h3>श्रीमती माया देवी</h3>
          <h4>पत्नी</h4>
        </div>
      </Fade>
      <hr className="vertical"/>
      <hr className="horizon2"/>
      <Fade bottom delay={1000} className="tier2fam3">
        <div className="memhead">
          <div className="gap" />
          <img className="mempic" src="/Images/Members/BadiBh.jpg" alt="" />
          <h3>श्रीमती नूतन सिन्हा</h3>
          <h4>पुत्रवधु</h4>
        </div>
        <i className="fa fa-arrow-left yes" /><hr /><i className="fa fa-arrow-right" />
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic" src="/Images/commit/Vijay.jpg" alt="" />
          <h3>श्री विजय कुमार सिन्हा</h3>
          <h4>सुपुत्र</h4>
        </div>
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic" src="/Images/commit/Ajay.jpg" alt="" />
          <h3>श्री अजय कुमार सिन्हा</h3>
          <h4>सुपुत्र</h4>
        </div>
        <i className="fa fa-arrow-left yes" /><hr /><i className="fa fa-arrow-right" />
        <div className="memhead">
          <div className="gap" />
          <img className="mempic" src="/Images/Members/ChotiBh.jpg" alt="" />
          <h3>श्रीमती सरिता सिन्हा</h3>
          <h4>पुत्रवधु</h4>
        </div>
      </Fade>
      <div className="verticals">
        <hr className="vertical2"/>
        <hr className="vertical3"/>
      </div>
      <div className="horizontals">
        <hr className="lefthr"/>
        <hr className="lefthr"/>
      </div>
      <Fade bottom delay={1000} className="tier2">
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic1" src="/Images/Members/Ashish.jpg" alt="" />
          <h3>आशीष रंजन</h3>
          <h4>पौत्र</h4>
        </div>
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic1" src="/Images/Members/Adit.jpg" alt="" />
          <h3>आदित्य रंजन</h3>
          <h4>पौत्र</h4>
        </div>
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic1" src="/Images/Members/Ayush.jpg" alt="" />
          <h3>आयुष रंजन</h3>
          <h4>पौत्र</h4>
        </div>
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic1" src="/Images/Members/Khushi.jpg" alt="" />
          <h3>श्वेता सिन्हा</h3>
          <h4>पौत्री</h4>
        </div>
      </Fade>
    </div>
    <Footer />
  </div>
);

export default Family3;