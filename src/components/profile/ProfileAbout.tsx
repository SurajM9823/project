import React from 'react';
import { Briefcase, MapPin, GraduationCap, Globe } from 'lucide-react';
import type { UserProfile } from '../../types';

interface ProfileAboutProps {
  profile: UserProfile;
}

const ProfileAbout: React.FC<ProfileAboutProps> = ({ profile }) => {
  return (
    <div className="fb-card p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">About</h2>
      
      <div className="mb-4">
        <p>{profile.bio}</p>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <Briefcase size={20} className="mr-3 text-fb-text-secondary" />
          <div>
            <p className="font-medium">Full Stack Developer at Tech Company</p>
            <p className="text-fb-text-secondary text-sm">2022 - Present</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <GraduationCap size={20} className="mr-3 text-fb-text-secondary" />
          <div>
            <p className="font-medium">Computer Science at University</p>
            <p className="text-fb-text-secondary text-sm">2018 - 2022</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <MapPin size={20} className="mr-3 text-fb-text-secondary" />
          <p className="font-medium">Lives in {profile.location}</p>
        </div>
        
        <div className="flex items-center">
          <Globe size={20} className="mr-3 text-fb-text-secondary" />
          <p className="font-medium">portfolio-website.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;