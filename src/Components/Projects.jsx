import React from 'react';
import thyroidImg from '../assets/cart.png';
import plantImg from '../assets/RCB.png';
import ticketBooking from '../assets/ticket-booking.png';


const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-heading">Projects</h2>
    <div className="projects-container">

    <div className="project-card">
        <img src={thyroidImg} alt="E-Commerce Project" className="project-image" />
        <div className="project-overlay">
          <h3>E-Commerce Shopping Cart</h3>
          <p>
          Front-end shopping website developed using HTML, CSS, and JavaScript to showcase electronic items with interactive UI.
          </p>
          <a href="https://github.com/surajhv08/Shopping-Website" target="_blank" rel="noopener noreferrer">
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
          <a href="https://github.com/surajhv08/Book-my-tickets" target="_blank" rel="noopener noreferrer">
            <button className="read-more">Read More</button>
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src={plantImg} alt="RCB Electronics Project" className="project-image" />
        <div className="project-overlay">
          <h3>RCB Electronics</h3>
          <p>
            A fully responsive RCB electronics shopping website built using HTML, CSS, and JavaScript, featuring product categories like laptops,
            mobiles, and watches with interactive cards, smooth UI design, and add-to-cart functionality
          </p>
          <a href="https://github.com/surajhv08/RCB-electronics" target="_blank" rel="noopener noreferrer">
            <button className="read-more">Read More</button>
          </a>
        </div>
      </div>
      

    </div>
  </section>
);

export default Projects;
