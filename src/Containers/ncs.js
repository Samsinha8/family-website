import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const ncs = () => (
    <div className="ncs">
      <Header />
      <div className="pujasamiti">
        <div className="headback3" />
        <Fade bottom><h1>नवयुवक चित्रगुप्त संघ</h1></Fade>
        <Fade bottom className="cpshead">
        <img className="adhyaksh" src="/Images/commit/Alok.jpg" alt="" />
        <h2>श्री अलोक आनंद</h2>
        <h3>अध्यक्ष</h3>
        </Fade>
        <Fade bottom delay={500} className="cpshead2">
          <div className="upadhyaksh">
            <img className="adhyaksh2" src="/Images/commit/Ajay.jpg" alt="" />
            <h2>श्री अजय कुमार सिन्हा</h2>
            <h3>उपाध्यक्ष</h3>
          </div>
          <div className="upadhyaksh">
            <img className="adhyaksh2" src="/Images/commit/Chikki.jpg" alt="" />
            <h2>अभिजीत कुमार सिन्हा</h2>
            <h3>सचिव</h3>
          </div>
          <div className="upadhyaksh">
            <img className="adhyaksh2" src="/Images/commit/Sandeep.jpg" alt="" />
            <h2>संदीप कुमार सिन्हा</h2>
            <h3>कोषाध्यक्ष</h3>
          </div>
        </Fade>
        <Fade bottom delay={1000} className="anya">
          <h2>अन्य सदस्य</h2>
        </Fade>
        <Fade bottom delay={1000} className="cpshead3">
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Deepak.jpg" alt="" />
            <h3>श्री लाला दीपक सहाय</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Vijay.jpg" alt="" />
            <h3>श्री विजय कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Manoj.jpg" alt="" />
            <h3>श्री मनोज कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Pappu.jpg" alt="" />
            <h3>श्री बिजय कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Ranjan.jpg" alt="" />
            <h3>श्री रंजन कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Nikku.jpg" alt="" />
            <h3>श्री निकेश आनंद</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Pankaj.jpg" alt="" />
            <h3>श्री पंकज कुमार वर्मा </h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Vikki.jpg" alt="" />
            <h3>श्री अमित कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Pinku.jpg" alt="" />
            <h3>श्री सुजीत कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Rinku.jpg" alt="" />
            <h3>श्री अजित कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Kumod.jpg" alt="" />
            <h3>श्री कुमोद सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Munnu.jpg" alt="" />
            <h3>श्री प्रभात शंकर किशोर</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Rajeev.jpg" alt="" />
            <h3>राजीव कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Sanu.jpg" alt="" />
            <h3>कुमार सानु</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Akash.jpg" alt="" />
            <h3>आकाश सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Sonu.jpg" alt="" />
            <h3>समरेश कुमार सिन्हा</h3>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
  
  export default ncs;