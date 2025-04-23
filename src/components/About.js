import React from 'react';
import aboutImg from '../assets/doctor.jpg'; 

const About = () => (
  <div id="about" className="container my-5">
    <div className="row align-items-center">
      
      <div className="col-lg-6 col-md-6">
        <h2>About Our Clinic</h2>
        <p>We are a multi-specialty healthcare provider dedicated to your wellbeing.</p>
        <ul>
          <li>Experienced team of certified doctors</li>
          <li>24/7 emergency support and consultation</li>
          <li>Modern equipment and facilities</li>
          <li>Personalized treatment plans</li>
          <li>Convenient online booking system</li>
        </ul>
      </div>

      <div className="col-lg-6 col-md-6">
        <img src={aboutImg} alt="Clinic" className="img-fluid rounded shadow" />
      </div>
    </div>
  </div>
);

export default About;
