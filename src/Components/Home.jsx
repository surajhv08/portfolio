import React from 'react';
import myPhoto from '../assets/homeProfile.jpg'; // Replace with your actual image file

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>Hi, I'm <span className="highlight">Suraj</span></h1>
          <p>
            Passionate software developer with a deep interest in building intuitive and scalable web applications.
            Strong in Java, Python, and frontend technologies with a knack for solving real-world problems.
            Let's build something amazing together!
          </p>
          <div className="home-buttons">
            <a href="https://www.linkedin.com/in/surajhv" className="home-btn">Contact Me</a>
            <a href="https://drive.google.com/file/d/1YP35qQfGFZslk1so4eZKe3E3-tua-vJq/view?usp=drivesdk" 
            className="home-btn" target="_blank" rel="noopener noreferrer">Resume</a>
             <a href="https://github.com/surajhv08" className="home-btn">GitHub</a>
          </div>
        </div>
        <div className="home-image-wrapper">
          <img src={myPhoto} alt="Suraj" className="home-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
