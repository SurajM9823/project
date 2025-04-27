import React from 'react';
import { Camera, Edit, Plus } from 'lucide-react';
import type { UserProfile } from '../../types';

interface ProfileHeaderProps {
  profile: UserProfile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <div className="fb-card rounded-b-none overflow-hidden mb-0">
      {/* Cover photo */}
      <div className="relative h-[200px] md:h-[300px] bg-fb-hover">
        <img
          src={profile.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <button className="absolute bottom-4 right-4 fb-button flex items-center">
          <Camera size={18} className="mr-2" />
          <span>Edit Cover Photo</span>
        </button>
      </div>
      
      {/* Profile info section */}
      <div className="px-4 pb-4 relative">
        <div className="flex flex-col md:flex-row">
          {/* Profile picture */}
          <div className="relative -mt-16 md:-mt-20 mb-2 md:mb-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-fb-card overflow-hidden">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-2 right-2 rounded-full bg-fb-hover p-2">
              <Camera size={18} />
            </button>
          </div>
          
          {/* Profile details */}
          <div className="md:ml-4 md:mt-4 flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{profile.name}</h1>
                <p className="text-fb-text-secondary">{profile.role}</p>
                <p className="text-fb-text-secondary text-sm mt-1">
                  {profile.followers} followers · {profile.friends} connections
                </p>
              </div>
              
              <div className="flex mt-2 md:mt-0">
                <button className="fb-button bg-fb-accent hover:bg-fb-accent-hover text-white mr-2 flex items-center">
                  <Edit size={18} className="mr-2" />
                  <span>Edit Profile</span>
                </button>
                <button className="fb-button flex items-center">
                  <Plus size={18} className="mr-2" />
                  <span>Add to Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile navigation */}
      <div className="border-t border-fb-hover mt-2">
        <nav className="flex px-4">
          <a href="#" className="px-4 py-3 font-medium border-b-2 border-fb-accent text-fb-accent">
            Posts
          </a>
          <a href="#" className="px-4 py-3 font-medium text-fb-text-secondary hover:bg-fb-hover">
            About
          </a>
          <a href="#" className="px-4 py-3 font-medium text-fb-text-secondary hover:bg-fb-hover">
            Projects
          </a>
          <a href="#" className="px-4 py-3 font-medium text-fb-text-secondary hover:bg-fb-hover">
            Skills
          </a>
          <a href="#" className="px-4 py-3 font-medium text-fb-text-secondary hover:bg-fb-hover">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default ProfileHeader;