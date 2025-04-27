import React, { useState } from 'react';
import { Image, Film, Smile, PenSquare } from 'lucide-react';
import { currentUser } from '../../utils/mockData';

const CreatePost: React.FC = () => {
  const [postContent, setPostContent] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postContent.trim()) {
      console.log('Creating post:', postContent);
      setPostContent('');
    }
  };
  
  return (
    <div className="fb-card p-3 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2 mb-3">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
            className="fb-input flex-1"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        
        <div className="border-t border-fb-hover pt-3">
          <div className="flex items-center justify-between">
            <button 
              type="button"
              className="flex items-center justify-center p-2 rounded-md hover:bg-fb-hover text-fb-text-secondary flex-1"
            >
              <Film className="mr-1" size={20} />
              <span className="hidden sm:inline">Live Video</span>
            </button>
            
            <button 
              type="button"
              className="flex items-center justify-center p-2 rounded-md hover:bg-fb-hover text-fb-text-secondary flex-1"
            >
              <Image className="mr-1" size={20} />
              <span className="hidden sm:inline">Photo/Video</span>
            </button>
            
            <button 
              type="button"
              className="flex items-center justify-center p-2 rounded-md hover:bg-fb-hover text-fb-text-secondary flex-1"
            >
              <PenSquare className="mr-1" size={20} />
              <span className="hidden sm:inline">Project</span>
            </button>
            
            <button 
              type="button"
              className="flex items-center justify-center p-2 rounded-md hover:bg-fb-hover text-fb-text-secondary flex-1"
            >
              <Smile className="mr-1" size={20} />
              <span className="hidden sm:inline">Feeling/Activity</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;