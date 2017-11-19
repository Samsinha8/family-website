import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Members = () => (
  <div className="Members">
    <Header />
    <div className="abtcntnt">
      <Fade bottom>
        <div className="nexthead">
          <h1>Our Members</h1>
          <h1>हमारे सदस्य</h1>
        </div>
      </Fade>
    </div>
    <Footer />
  </div>
);

export default Members;