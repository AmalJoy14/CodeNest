import React from 'react';
import '../styles/intro.css';
import logo from '../assets/w-logo.svg'; 

const Intro = () => {
  return (
    <div className="intro">
      <img src={logo} alt="CodeNest Logo" className="intro-logo" />
      <h1 className="intro-title">
        <span className="animate-letter">C</span>
        <span className="animate-letter">o</span>
        <span className="animate-letter">d</span>
        <span className="animate-letter">e</span>
        <span className="animate-letter">N</span>
        <span className="animate-letter">e</span>
        <span className="animate-letter">s</span>
        <span className="animate-letter">t</span>
      </h1>
    </div>
  );
};

export default Intro;
