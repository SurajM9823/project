import React from 'react';
import { Plus } from 'lucide-react';
import { stories, currentUser } from '../../utils/mockData';

const Stories: React.FC = () => {
  return (
    <div className="mb-4 overflow-x-auto">
      <div className="flex space-x-2 pb-2">
        {/* Create story card */}
        <div className="relative min-w-[110px] h-[200px] rounded-lg overflow-hidden fb-card flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fb-card flex flex-col justify-end p-2">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-fb-accent text-white">
              <Plus size={24} />
            </div>
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-full h-3/4 object-cover absolute top-0"
            />
            <p className="text-center text-sm font-medium mt-10">Create Story</p>
          </div>
        </div>
        
        {/* Story cards */}
        {stories.map((story) => (
          <div 
            key={story.id} 
            className="relative min-w-[110px] h-[200px] rounded-lg overflow-hidden flex-shrink-0"
          >
            <img
              src={story.image}
              alt={story.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end p-2">
              <div className="absolute top-2 left-2 w-8 h-8 rounded-full ring-4 ring-fb-accent overflow-hidden">
                <img
                  src={story.user.avatar}
                  alt={story.user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium">{story.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;