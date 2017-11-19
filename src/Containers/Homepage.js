import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: 'yes'
};

const Homepage = () => (
  <div className="App">
    <Header />
    <Fade bottom>
      <Slider {...settings} className="slide">
        <div className="content">
          <img src="/Images/slide1.png" className="slideimg" alt="" />
          <div className="slidetext"><h2>Chitragupt Temple</h2></div>
        </div>
        <div className="content">
          <img src="/Images/slide2.jpg" className="slideimg" alt="" />
          <div className="slidetext"><h2>Chitragupt Puja - 2017</h2></div>
        </div>
        <div className="content">
          <img src="/Images/slide3.JPG" className="slideimg" alt="" />
          <div className="slidetext"><h2>MahaYagya - 2013</h2></div>
        </div>
        <div className="content">
          <img src="/Images/slide4.JPG" className="slideimg" alt="" />
          <div className="slidetext"><h2>Chitragupt Puja - 2014</h2></div>
        </div>
        <div className="content">
          <img src="/Images/slide5.jpg" className="slideimg" alt="" />
          <div className="slidetext"><h2>Chitragupt Puja - 2014</h2></div>
        </div>
        <div className="content">
          <img src="/Images/slide6.jpg" className="slideimg" alt="" />
          <div className="slidetext"><h2>Biradari Bhoj</h2></div>
        </div>
        <div className="content">
          <img src="/Images/slide7.jpg" className="slideimg" alt="" />
          <div className="slidetext"><h2>Biradari Bhoj</h2></div>
        </div>
        <div className="content">
          <img src="/Images/slide8.JPG" className="slideimg" alt="" />
          <div className="slidetext"><h2>Chitragupt Wisarjan</h2></div>
        </div>
        <div className="content">
          <img src="/Images/slide9.JPG" className="slideimg" alt="" />
          <div className="slidetext"><h2>Chitragupt Wisarjan</h2></div>
        </div>
      </Slider>
    </Fade>
    <div className="list">
      <Fade bottom className="fadecard">
        <div className="card1" />
        <Link to="/About">
          <h1><i className="fa fa-globe" /><br />About</h1>
        </Link>
      </Fade>
      <Fade bottom delay={500} className="fadecard">
        <div className="card2" />
        <Link to="/History">
          <h1><i className="fa fa-history" /><br />History</h1>
        </Link>
      </Fade>
      <Fade bottom delay={1000} className="fadecard">
        <div className="card3"  />
        <Link to="/Members">
          <h1><i className="fa fa-user-o" /><br />Members</h1>
        </Link>
      </Fade>
      <Fade bottom delay={1500} className="fadecard">
        <div className="card4" />
        <Link to="/Committees">
          <h1><i className="fa fa-group" /><br />Committees</h1>
        </Link>
      </Fade>
      <Fade bottom delay={2000} className="fadecard">
        <div className="card5" />
        <Link to="/Events">
          <h1><i className="fa fa-calendar" /><br />Events</h1>
        </Link>
      </Fade>
      <Fade bottom delay={2500} className="fadecard">
        <div className="card6" />
        <Link to="/Temple">
          <h1><i className="fa fa-bank" /><br />Temple</h1>
        </Link>
      </Fade>
    </div>
    <Footer />
  </div>
);

export default Homepage;
