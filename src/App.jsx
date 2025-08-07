import React from 'react';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Certificates from './Components/Certificates';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';

const App = () => {
  return (
    <div className="app-container">
    <Navbar />
    <Home/>
      <About />
      <Skills />
      <Education/>
      <Projects />
      <Experience />
      <Certificates />
      <Footer />
      </div>
  );
};

export default App;
