import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">Experience</h2>

      <div className="experience-card">
        <p className="experience-duration">Jan 2024 – Feb 2024</p>
        <h3 className="experience-title">Full Stack Developer Intern</h3>
        <p className="experience-company">Exposys Data Labs, Bangalore</p>

        <ul className="experience-points">
          <li>Developed a full-stack web application to detect DDoS attacks using entropy computing.</li>
          <li>HTML/CSS for frontend, Flask for backend: processed HTTP requests, computed entropy, and handled data packets.</li>
          <li>Managed a MySQL database schema for DDoS data and accuracy testing results.</li>
        </ul>

        <p className="experience-skills">
          <strong>Skills:</strong> MySQL, Flask, DDoS, HTML, CSS, Machine Learning, Entropy, HTTP, Web Application
        </p>
      </div>
    </section>
  );
};

export default Experience;
