import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const History = () => (
  <div className="History">
    <Header />
    <div className="abtcntnt">
      <Fade bottom>
        <div className="nexthead">
          <h1>Our History</h1>
          <h1>हमारा इतिहास</h1>
        </div>
      </Fade>
    </div>
    <Footer />
  </div>
);

export default History;