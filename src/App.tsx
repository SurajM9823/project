import React from 'react';
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
  const path = window.location.pathname;
  
  return (
    <>
      {path === '/profile' && <Profile />}
      {path === '/skills' && <Skills />}
      {path === '/services' && <Services />}
      {path === '/projects' && <Projects />}
      {path === '/blog' && <Blog />}
      {path === '/resume' && <Resume />}
      {path === '/marketplace' && <Marketplace />}
      {path === '/dashboard' && <Dashboard />}
      {path === '/settings' && <Settings />}
      {path === '/' && <Home />}
      <ChatBot />
    </>
  );
}

export default App;