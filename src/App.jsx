// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education"; // ✅ Make sure this is imported
import Projects from "./components/Project";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <div className="bg-[#0a0a1a] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />  {/* ✅ Make sure this is rendered */}
      <Projects />
      <Contact />
      <BackToTop />
    </div>
  );
};

export default App;