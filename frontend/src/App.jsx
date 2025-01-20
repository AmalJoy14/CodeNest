import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Intro from './components/intro';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Home from "./components/home";
import Leaderboard from "./components/leaderboard";
import Problems from "./components/problems";
import Discuss from "./components/discuss";
import Connect from "./components/connect";
import Profile from "./components/profile";
import PrivateRoute from './components/private_route';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Intro page will automatically transition to SignIn after 5 seconds */}
        <Route path="/" element={<IntroWithTimer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />

        <Route path="/problems" element={<PrivateRoute><Problems /></PrivateRoute>}/>
        <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>}/>
        <Route path="/discuss" element={<PrivateRoute><Discuss /></PrivateRoute>} />
        <Route path="/connect" element={<PrivateRoute><Connect /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}/>
      </Routes>
    </Router>
  );
};


const IntroWithTimer = () => {
  const navigate = useNavigate(); 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/signin'); 
    }, 2500);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return <Intro />;
};

export default App;
