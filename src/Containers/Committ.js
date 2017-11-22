import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const Committ = () => (
  <div className="Committ">
    <Header />
    <div className="abtcntnt">
      <Fade bottom>
        <div className="nexthead">
          <h1>Committees Working Here</h1>
          <h1>यहाँ काम कर रहीं समितियां</h1>
        </div>
      </Fade>
      <div className="committees">
        <Fade bottom delay={500} className="fadecard">
          <div className="comcard1" />
          <Link to="/cps">
            <h2>चित्रगुप्त पूजा समिति</h2>
          </Link>
        </Fade>
        <Fade bottom delay={1000} className="fadecard">
          <div className="comcard2" />
          <Link to="/mns">
            <h2>मंदिर निर्माण समिति</h2>
          </Link>
        </Fade>
        <Fade bottom delay={1500} className="fadecard">
          <div className="comcard3" />
          <Link to="/ncs">
            <h2>नवयुवक चित्रगुप्त संघ</h2>
          </Link>
        </Fade>
      </div>
    </div>
    <Footer />
  </div>
);

export default Committ;