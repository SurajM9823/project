import React from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileNavigation from '../components/layout/MobileNavigation';
import SkillCard from '../components/skills/SkillCard';
import LanguageCard from '../components/skills/LanguageCard';
import { currentUser } from '../utils/mockData';

const Skills: React.FC = () => {
  return (
    <div className="bg-fb-bg min-h-screen text-fb-text-primary">
      <Navbar />
      
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-2xl font-bold mb-4">Skills & Expertise</h1>
            
            <SkillCard 
              title="Technical Skills"
              skills={currentUser.technicalSkills}
            />
            
            <SkillCard 
              title="Soft Skills"
              skills={currentUser.softSkills}
            />
            
            <LanguageCard 
              languages={currentUser.languages}
            />
          </div>
        </main>
      </div>
      
      <MobileNavigation />
    </div>
  );
};

export default Skills;