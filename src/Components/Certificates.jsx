import React from 'react';
import cert1 from '../assets/thyroid-certificate.jpg';
import cert2 from '../assets/data-science-tools.jpg';
import cert3 from '../assets/Systems-and-usable-security.jpg';
import cert4 from '../assets/Distributed_System.jpg';
import cert5 from '../assets/Python-for-data-science.jpg';
import cert6 from '../assets/internship.jpg';


const certificateData = [
  {
    image: cert1,
    description: 'Presented research on thyroid disease detection using ML at a national-level conference in Bengaluru.'
  },
  {
    image: cert2,
    description: 'Published a peer-reviewed paper on healthcare prediction in IJMRSET, July 2024 edition.'
  },
  {
    image: cert3,
    description: 'Explored secure system design concepts in a certified course by IIT Indore.'
  },
  {
    image: cert4,
    description: 'Studied the core concepts of distributed computing and fault tolerance at IIT Kanpur.'
  },
  {
    image: cert5,
    description: 'Completed an IIT Madras program focused on applying Python to data science problems.'
  },
  {
    image: cert6,
    description: 'Learned mobile app development fundamentals through a hands-on Infosys Springboard course.'
  }
];


const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <h2 className="certificates-heading">Certificates</h2>
      <div className="certificates-container three-column">
        {certificateData.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-image-container">
              <img src={cert.image} alt={`Certificate ${index + 1}`} className="certificate-image" />
              <div className="certificate-overlay">
                <p className="certificate-description">{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
