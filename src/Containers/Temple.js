import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const Temple = () => (
  <div className="Temple">
    <Header />
    <div className="abtcntnt">
      <Fade bottom>
        <div className="nexthead">
          <h1>Chitragupta Temple</h1>
          <h1>चित्रगुप्त मंदिर</h1>
        </div>
      </Fade>
    </div>
    <Footer />
  </div>
);

export default Temple;