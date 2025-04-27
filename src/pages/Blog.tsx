import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileNavigation from '../components/layout/MobileNavigation';
import { Search, BookOpen, FileText, Download, Bookmark } from 'lucide-react';
import { blogPosts, tutorials } from '../utils/mockData';

const Blog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'tutorials'>('blog');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContent = activeTab === 'blog' 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tutorials.filter(tutorial => 
        tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="bg-fb-bg min-h-screen text-fb-text-primary">
      <Navbar />
      
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-[800px] mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">Tech Blog & Tutorials</h1>
              <p className="text-fb-text-secondary">
                Stay updated with the latest in tech and development
              </p>
            </div>

            {/* Search Bar */}
            <div className="fb-card p-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fb-text-secondary" size={20} />
                <input
                  type="text"
                  placeholder="Search content..."
                  className="fb-input pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Content Tabs */}
            <div className="fb-card mb-6">
              <div className="flex border-b border-fb-hover">
                <button
                  className={`flex items-center px-6 py-3 ${
                    activeTab === 'blog' 
                      ? 'text-fb-accent border-b-2 border-fb-accent' 
                      : 'text-fb-text-secondary'
                  }`}
                  onClick={() => setActiveTab('blog')}
                >
                  <BookOpen size={20} className="mr-2" />
                  Blog Posts
                </button>
                <button
                  className={`flex items-center px-6 py-3 ${
                    activeTab === 'tutorials' 
                      ? 'text-fb-accent border-b-2 border-fb-accent' 
                      : 'text-fb-text-secondary'
                  }`}
                  onClick={() => setActiveTab('tutorials')}
                >
                  <FileText size={20} className="mr-2" />
                  Tutorials
                </button>
              </div>

              {/* Content List */}
              <div className="p-4">
                {filteredContent.map((item) => (
                  <div key={item.id} className="mb-6 last:mb-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-fb-text-secondary mb-3">
                          {activeTab === 'blog' ? item.content : item.description}
                        </p>
                        <div className="flex items-center text-sm text-fb-text-secondary">
                          <span>{item.date}</span>
                          <span className="mx-2">•</span>
                          <span>{item.readTime} min read</span>
                          {'downloadUrl' in item && (
                            <>
                              <span className="mx-2">•</span>
                              <Download size={16} className="mr-1" />
                              <span>{item.downloads} downloads</span>
                            </>
                          )}
                        </div>
                      </div>
                      <button className="fb-icon-button">
                        <Bookmark size={20} />
                      </button>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-fb-button px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-4">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fb-button flex items-center text-fb-text-primary"
                      >
                        <BookOpen size={16} className="mr-2" />
                        Read More
                      </a>
                      {'downloadUrl' in item && (
                        <a
                          href={item.downloadUrl}
                          className="fb-button flex items-center text-fb-text-primary"
                        >
                          <Download size={16} className="mr-2" />
                          Download
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <MobileNavigation />
    </div>
  );
};

export default Blog;