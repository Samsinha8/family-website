import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const Members = () => (
  <div>
    <Header />
    <div className="abtcntnt">
      <Fade bottom>
        <div className="nexthead">
          <h1>Our Members</h1>
          <h1>हमारे सदस्य</h1>
        </div>
      </Fade>
      <Fade bottom delay={500} className="memfade">
        <div className="memcard1"/>
        <Link to="/Members/Family1"><h1>Family No.1</h1></Link>
      </Fade>
      <Fade bottom delay={1000} className="memfade">
        <div className="memcard2"/>
        <Link to="/Members/Family2"><h1>Family No.2</h1></Link>
      </Fade>
      <Fade bottom className="memfade">
        <div className="memcard3"/>
        <Link to="/Members/Family3"><h1>Family No.3</h1></Link>
      </Fade>
      <Fade bottom className="memfade">
        <div className="memcard4"/>
      </Fade>
    </div>
    <Footer />
  </div>
);

export default Members;