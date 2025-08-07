import React from 'react';
import thyroidImg from '../assets/thyroid.png';
import plantImg from '../assets/plant.png';
import ticketBooking from '../assets/ticket-booking.png';


const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-heading">Projects</h2>
    <div className="projects-container">

    <div className="project-card">
        <img src={thyroidImg} alt="Thyroid Project" className="project-image" />
        <div className="project-overlay">
          <h3>Thyroid Disease Detection</h3>
          <p>
            Machine learning model to detect thyroid disease using various classification algorithms.
          </p>
          <a href="https://github.com/RaniAmbiger/Thyroid-disease/tree/main/Thyroid-Disease-Detection-main" target="_blank" rel="noopener noreferrer">
            <button className="read-more">Read More</button>
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src={ticketBooking} alt="Ticket Booking" className="project-image" />
        <div className="project-overlay">
          <h3>Ticket Booking</h3>
          <p>
            reactJS based web app to book tickets.
          </p>
          <a href="https://github.com/RaniAmbiger/Ticcket-booking" target="_blank" rel="noopener noreferrer">
            <button className="read-more">Read More</button>
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src={plantImg} alt="Plant Bubble Project" className="project-image" />
        <div className="project-overlay">
          <h3>Plant Bubble</h3>
          <p>
            ASP.Net-based web app to manage plant inventory for online plant sales.
          </p>
          <a href="https://github.com/raniambiger" target="_blank" rel="noopener noreferrer">
            <button className="read-more">Read More</button>
          </a>
        </div>
      </div>

    </div>
  </section>
);

export default Projects;
