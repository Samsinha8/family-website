import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const Family4 = () => (
  <div>
    <Header />
    <div className="abtcntnt">
      <Fade bottom>
        <div className="nexthead">
          <h1>Family No. 4</h1>
        </div>
      </Fade>
      <Fade bottom delay={500} className="tier1">
        <div className="memhead">
          <img className="mempicmuted" src="/Images/Temple.png" alt="" />
          <h3>स्व० नर्वदेश्वर कुमार</h3>
          <h4>परिवार के मुखिया</h4>
        </div>
        <i className="fa fa-arrow-left no" /><hr className="muted" /><hr className="nonmuted" /><i className="fa fa-arrow-right" />
        <div className="memhead">
          <img className="mempic" src="" alt="" />
          <h3>श्रीमती सरोज देवी</h3>
          <h4>पत्नी</h4>
        </div>
      </Fade>
      <hr className="vertical"/>
      <hr className="horizon2"/>
      <Fade bottom delay={1000} className="tier2fam3">
        <div className="memhead">
          <div className="gap" />
          <img className="mempic" src="" alt="" />
          <h3>श्रीमती स्वाति सिन्हा</h3>
          <h4>पुत्रवधु</h4>
        </div>
        <i className="fa fa-arrow-left yes" /><hr /><i className="fa fa-arrow-right" />
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic" src="/Images/commit/Pinku.jpg" alt="" />
          <h3>श्री सुजीत कुमार सिन्हा</h3>
          <h4>सुपुत्र</h4>
        </div>
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic" src="/Images/commit/Rinku.jpg" alt="" />
          <h3>श्री अजित कुमार सिन्हा</h3>
          <h4>सुपुत्र</h4>
        </div>
        <i className="fa fa-arrow-left yes" /><hr /><i className="fa fa-arrow-right" />
        <div className="memhead">
          <div className="gap" />
          <img className="mempic" src="https://ak5.picdn.net/shutterstock/videos/9120095/thumb/10.jpg" alt="" />
          <div className="gap" />
        </div>
      </Fade>
      <div className="verticals">
        <hr className="vertical2"/>
        <hr className="vertical4"/>
      </div>
      <div className="horizontals">
        <hr className="lefthr"/>
        <hr className="righthr"/>
      </div>
      <Fade bottom delay={1000} className="tier2">
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic1" src="" alt="" />
          <h3>विष्णु सिन्हा</h3>
          <h4>पौत्र</h4>
        </div>
        <div className="memhead">
          <hr />
          <i className="fa fa-arrow-down" />
          <img className="mempic1" src="" alt="" />
          <h3>परी</h3>
          <h4>पौत्र</h4>
        </div>
        <div className="memheadblank" />
        <div className="memheadblank" />
      </Fade>
    </div>
    <Footer />
  </div>
);

export default Family4;