import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

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
    </div>
    <Footer />
  </div>
);

export default Committ;