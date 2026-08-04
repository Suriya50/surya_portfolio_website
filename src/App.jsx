import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white overflow-x-hidden scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;