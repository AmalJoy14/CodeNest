import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Intro from './components/intro';
import SignUp from './components/signup';
import SignIn from './components/signin';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Intro page will automatically transition to SignUp after 5 seconds */}
        <Route path="/" element={<IntroWithTimer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};


const IntroWithTimer = () => {
  const navigate = useNavigate(); 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/signup'); 
    }, 2500);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return <Intro />;
};

export default App;
