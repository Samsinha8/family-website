import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Events = () => (
  <div className="Events">
    <Header />
    <div className="abtcntnt">
      <Fade bottom>
        <div className="nexthead">
          <h1>Events Organised Here</h1>
          <h1>यहाँ होने वाले आयोजन</h1>
        </div>
      </Fade>
    </div>
    <Footer />
  </div>
);

export default Events;