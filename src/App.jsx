import React from 'react';
import Title from './components/Title.jsx';
import "./index.css"
import Skills from './components/Skills.jsx';
import Buttons from './components/Buttons.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <div>
      <Title />
      <Buttons />

      <div id="about">
        <About />
      </div>

      <div className='border-1 border-blue-600' />

      <div id="education">
        <Education />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div className='border-1 border-blue-600' />

      <div id="projects">
        <Projects />
      </div>

      <div className='border-1 border-blue-600' />

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
