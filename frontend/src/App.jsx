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
import ArrayString from './components/Problems/array-string'; 
import TwoPointers from './components/Problems/two-pointers';
import Hashmap from './components/Problems/hashmap';
import SlidingWindow from './components/Problems/sliding-window';
import BinarySearch from './components/Problems/binary-search';
import LinkedList from './components/Problems/linked-list';
import Trees from './components/Problems/trees';
import Heap from './components/Problems/heap';
import Backtracking from './components/Problems/backtracking';
import Trie from './components/Problems/trie';
import Graphs from './components/Problems/graphs';
import OneDDynamicProgramming from './components/Problems/dynamic-programming1';
import TwoDDynamicProgramming from './components/Problems/dynamic-programming2';
import Greedy from './components/Problems/greedy';
import Intervals from './components/Problems/intervals';
import MathAndGeometry from './components/Problems/math-geometry';
import BitManipulation from './components/Problems/bit-manipulation';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Intro page will automatically transition to SignIn after 5 seconds */}
        <Route path="/" element={<IntroWithTimer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Problems/array-string" element={<ArrayString />} />
        <Route path="/Problems/two-pointers" element={<TwoPointers />} />
        <Route path="/Problems/hashmap" element={<Hashmap />} />
        <Route path="/Problems/sliding-window" element={<SlidingWindow />} />
        <Route path="/Problems/binary-search" element={<BinarySearch/>} />
        <Route path="/Problems/linked-list" element={<LinkedList/>} />
        <Route path="/Problems/trees" element={<Trees/>} />
        <Route path="/Problems/heap" element={<Heap/>} />
        <Route path="/Problems/backtracking" element={<Backtracking/>} />
        <Route path="/Problems/trie" element={<Trie/>} />
        <Route path="/Problems/graphs" element={<Graphs/>} />
        <Route path="/Problems/dynamic-programming1" element={<OneDDynamicProgramming/>} />
        <Route path="/Problems/dynamic-programming2" element={<TwoDDynamicProgramming/>} />
        <Route path="/Problems/greedy" element={<Greedy/>} />
        <Route path="/Problems/intervals" element={<Intervals/>} />
        <Route path="/Problems/math-geometry" element={<MathAndGeometry/>} />
        <Route path="/Problems/bit-manipulation" element={<BitManipulation/>} />

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
