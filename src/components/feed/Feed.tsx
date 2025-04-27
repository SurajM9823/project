import React from 'react';
import Stories from './Stories';
import CreatePost from './CreatePost';
import Post from './Post';
import { posts, projectPosts } from '../../utils/mockData';

const Feed: React.FC = () => {
  // Combine and sort all posts by timestamp
  const allPosts = [...posts, ...projectPosts].sort((a, b) => {
    // Simple sorting by timestamp string for demo purposes
    // In a real app, you'd want to use actual Date objects
    return a.timestamp < b.timestamp ? 1 : -1;
  });
  
  return (
    <div className="max-w-[680px] w-full mx-auto pt-4 pb-16 px-4 md:px-0">
      <Stories />
      <CreatePost />
      
      {allPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;