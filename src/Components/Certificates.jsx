import React from 'react';
import cert1 from '../assets/c1.jpg';
import cert2 from '../assets/c2.jpg';
import cert3 from '../assets/c3.jpg';
import cert4 from '../assets/c4.jpg';
import cert5 from '../assets/c5.jpg';
import cert6 from '../assets/c6.jpg';


const certificateData = [
  {
    image: cert1,
    description: 'Successfully completed Python for Data Science certification by Infosys Springboard, demonstrating strong analytical and coding skills using Python.'
  },
  {
    image: cert2,
    description: 'Achieved certification in Generative AI from GUVI (HCL & Google for Education Partner), gaining expertise in AI model creation and applications.'
  },
  {
    image: cert3,
    description: 'Completed internship at QSpiders CampusConnect, trained in Core Java, J2EE, JDBC, Servlets, JSP, and OOPs concepts with practical project experience.'
  },
  {
    image: cert4,
    description: 'Earned certification from JSpiders for completing advanced training in Core Java, SQL, Web Technology, Advanced Java, and ReactJS.'
  },
  {
    image: cert5,
    description: 'Completed the AI Skills Passport program offered by EY and Microsoft, gaining foundational and employability-focused AI skills.'
  },
  {
    image: cert6,
    description: 'Passed the HackerRank SQL (Intermediate) skill certification, demonstrating strong proficiency in SQL querying and database handling.'
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
