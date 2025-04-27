import React from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileNavigation from '../components/layout/MobileNavigation';
import Feed from '../components/feed/Feed';

const Home: React.FC = () => {
  return (
    <div className="bg-fb-bg min-h-screen text-fb-text-primary">
      <Navbar />
      
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1">
          <Feed />
        </main>
      </div>
      
      <MobileNavigation />
    </div>
  );
};

export default Home;