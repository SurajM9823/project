import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import ChatBot from './components/chat/ChatBot';

function App() {
  return (
    <Router basename="/project">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <ChatBot />
    </Router>
  );
}

export default App;