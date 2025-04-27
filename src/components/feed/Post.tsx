import React, { useState } from 'react';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import type { Post as PostType, ProjectPost as ProjectPostType } from '../../types';

interface PostProps {
  post: PostType | ProjectPostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  
  const isProjectPost = 'projectTitle' in post;
  
  return (
    <div className="fb-card mb-4">
      {/* Post header */}
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <h3 className="font-medium text-fb-text-primary">{post.user.name}</h3>
            <p className="text-xs text-fb-text-secondary">{post.timestamp}</p>
          </div>
        </div>
        <button className="fb-icon-button">
          <MoreHorizontal size={20} />
        </button>
      </div>
      
      {/* Post content */}
      <div className="px-3 pb-2">
        <p className="mb-2">{post.content}</p>
        
        {/* Project details if it's a project post */}
        {isProjectPost && (
          <div className="mb-3 p-3 rounded bg-fb-hover">
            <h4 className="font-bold text-lg">{(post as ProjectPostType).projectTitle}</h4>
            <p className="text-fb-text-secondary mb-2">{(post as ProjectPostType).projectDescription}</p>
            
            <div className="flex flex-wrap gap-1 mb-2">
              {(post as ProjectPostType).technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-fb-button px-2 py-1 rounded-full text-xs"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
            
            {(post as ProjectPostType).projectLink && (
              <a 
                href={(post as ProjectPostType).projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fb-accent hover:underline text-sm inline-block"
              >
                View Project &rarr;
              </a>
            )}
          </div>
        )}
      </div>
      
      {/* Post image */}
      {post.images && post.images.length > 0 && (
        <div className="mb-2">
          <img
            src={post.images[0]}
            alt="Post"
            className="w-full max-h-[500px] object-cover"
          />
        </div>
      )}
      
      {/* Post stats */}
      <div className="px-3 py-2 flex items-center justify-between border-t border-b border-fb-hover text-fb-text-secondary text-sm">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-fb-accent flex items-center justify-center mr-1">
            <ThumbsUp size={12} className="text-white" />
          </div>
          <span>{liked ? post.likes + 1 : post.likes}</span>
        </div>
        
        <div className="flex space-x-4">
          <span>{post.comments} comments</span>
          <span>{post.shares} shares</span>
        </div>
      </div>
      
      {/* Post actions */}
      <div className="px-3 py-1 flex items-center justify-around">
        <button 
          className={`flex items-center justify-center p-2 rounded-md hover:bg-fb-hover flex-1 ${
            liked ? 'text-fb-accent' : 'text-fb-text-secondary'
          }`}
          onClick={() => setLiked(!liked)}
        >
          <ThumbsUp size={18} className="mr-2" />
          <span>Like</span>
        </button>
        
        <button className="flex items-center justify-center p-2 rounded-md hover:bg-fb-hover flex-1 text-fb-text-secondary">
          <MessageCircle size={18} className="mr-2" />
          <span>Comment</span>
        </button>
        
        <button className="flex items-center justify-center p-2 rounded-md hover:bg-fb-hover flex-1 text-fb-text-secondary">
          <Share2 size={18} className="mr-2" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;