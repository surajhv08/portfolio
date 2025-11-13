import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Left */}
        <div className="footer-left">
          <h3>Contact</h3>
          <p className="contact-sub">Feel free to reach out to me!</p>
          <div className="contact-item">
            <MdEmail className="footer-icon" />
            <a href="mailto:surajvenkatesh832@gmail.com">surajvenkatesh832@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="footer-icon" />
            <a href="www.linkedin.com/in/surajhv" target="_blank" rel="noreferrer">
              linkedin.com/in/surajhv
            </a>
          </div>
          <div className="contact-item">
            <FaGithub className="footer-icon" />
            <a href="https://github.com/surajhv08" target="_blank" rel="noreferrer">
              github.com/surajhv08
            </a>
          </div>
        </div>

        {/* Quick Links Right */}
        <div className="footer-right">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#education">Education</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
