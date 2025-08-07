import React from 'react';
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase
} from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <div className="icon-bg"><FaJava className="skill-icon" /></div>
          <p>Java</p>
        </div>
        <div className="skill-item">
          <div className="icon-bg"><FaJava className="skill-icon" /></div>
          <p>Advanced Java</p>
        </div>
        <div className="skill-item">
          <div className="icon-bg"><FaPython className="skill-icon" /></div>
          <p>Python</p>
        </div>
        <div className="skill-item">
          <div className="icon-bg"><FaHtml5 className="skill-icon" /></div>
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <div className="icon-bg"><FaCss3Alt className="skill-icon" /></div>
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <div className="icon-bg"><FaJs className="skill-icon" /></div>
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <div className="icon-bg"><FaReact className="skill-icon" /></div>
          <p>React</p>
        </div>
        <div className="skill-item">
          <div className="icon-bg"><FaDatabase className="skill-icon" /></div>
          <p>SQL</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
