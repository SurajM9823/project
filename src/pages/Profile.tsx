import React from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileNavigation from '../components/layout/MobileNavigation';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileAbout from '../components/profile/ProfileAbout';
import CreatePost from '../components/feed/CreatePost';
import Post from '../components/feed/Post';
import { currentUser, posts, projectPosts } from '../utils/mockData';

const Profile: React.FC = () => {
  // Combine and sort all posts by timestamp
  const allPosts = [...posts, ...projectPosts].sort((a, b) => {
    // Simple sorting by timestamp string for demo purposes
    return a.timestamp < b.timestamp ? 1 : -1;
  });
  
  return (
    <div className="bg-fb-bg min-h-screen text-fb-text-primary">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <ProfileHeader profile={currentUser} />
        
        <div className="flex px-4 py-4 gap-4">
          <div className="hidden md:block w-[300px]">
            <ProfileAbout profile={currentUser} />
          </div>
          
          <div className="flex-1 max-w-[680px]">
            <CreatePost />
            
            {allPosts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      
      <MobileNavigation />
    </div>
  );
};

export default Profile;