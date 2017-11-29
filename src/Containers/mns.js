import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

const mns = () => (
    <div className="mns">
      <Header />
      <div className="pujasamiti">
        <Fade bottom><h1>मंदिर निर्माण समिति</h1></Fade>
        <Fade bottom className="cpshead">
        <img className="adhyaksh" src="/Images/commit/Dada.JPG" alt="" />
        <h2>श्री रामकुमार लाल</h2>
        <h3>अध्यक्ष</h3>
        </Fade>
        <Fade bottom delay={500} className="cpshead2">
          <div className="upadhyaksh">
            <img className="adhyaksh2" src="/Images/commit/BadePa.jpg" alt="" />
            <h2>श्री अवध किशोर प्रसाद</h2>
            <h3>उपाध्यक्ष</h3>
          </div>
          <div className="upadhyaksh">
            <img className="adhyaksh2" src="/Images/commit/Deepak.jpg" alt="" />
            <h2>श्री लाला दीपक सहाय</h2>
            <h3>सचिव</h3>
          </div>
          <div className="upadhyaksh">
            <img className="adhyaksh2" src="/Images/commit/Dinesh.jpg" alt="" />
            <h2>श्री दिनेश प्रसाद सिन्हा</h2>
            <h3>कोषाध्यक्ष</h3>
          </div>
        </Fade>
        <Fade bottom delay={1000} className="anya">
          <h2>अन्य वरिष्ठ सदस्य</h2>
        </Fade>
        <Fade bottom delay={1000} className="cpshead3">
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/ChotePa.jpg" alt="" />
            <h3>श्री सतीश कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Ravi.jpg" alt="" />
            <h3>श्री रवि कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Papa.jpg" alt="" />
            <h3>श्री रामानंद प्रसाद</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Manoj.jpg" alt="" />
            <h3>श्री मनोज कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Ranjan.jpg" alt="" />
            <h3>श्री रंजन कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Pappu.jpg" alt="" />
            <h3>श्री विजय कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Ajay.jpg" alt="" />
            <h3>श्री अजय कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Alok.jpg" alt="" />
            <h3>श्री अलोक आनंद</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Pinku.jpg" alt="" />
            <h3>श्री सुजीत कुमार सिन्हा</h3>
          </div>
          <div className="anyalog">
            <img className="adhyaksh3" src="/Images/commit/Rinku.jpg" alt="" />
            <h3>श्री अजित कुमार सिन्हा</h3>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
  
  export default mns;