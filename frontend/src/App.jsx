import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Intro from './components/intro';
import SignUp from './components/Auth/signup';
import SignIn from './components/Auth/signin';
import Home from "./components/Home/home";
import Leaderboard from "./components/Leaderboard/leaderboard";
import Problems from "./components/Problems/problems";
import Discuss from "./components/Discuss/discuss";
import Profile from "./components/Profile/profile";
import PrivateRoute from './components/Auth/private_route';
import TopicPage from './components/Problems/topicPage';
import QuestionPage from './components/Problems/questionPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroWithTimer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>}/>
        <Route path="/discuss" element={<PrivateRoute><Discuss /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}/>
        <Route path="/problems" element={<PrivateRoute><Problems /></PrivateRoute>}/>
        <Route path="/problems/:topicId" element={<PrivateRoute><TopicPage /></PrivateRoute>} />
        <Route path="/problems/:topicId/:questionId" element={<PrivateRoute><QuestionPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};


const IntroWithTimer = () => {
  const navigate = useNavigate(); 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 2500);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return <Intro />;
};

export default App;
