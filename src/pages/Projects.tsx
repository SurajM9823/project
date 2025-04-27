import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileNavigation from '../components/layout/MobileNavigation';
import ProjectCard from '../components/projects/ProjectCard';
import { projectPosts } from '../utils/mockData';
import { Filter, Search } from 'lucide-react';
import type { ProjectPost } from '../types';

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  
  const categories = Array.from(new Set(projectPosts.map(project => project.category)));
  const statuses = ['all', 'completed', 'in-progress', 'planned'];
  
  const filteredProjects = projectPosts.filter(project => {
    const matchesSearch = project.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.projectDescription.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  return (
    <div className="bg-fb-bg min-h-screen text-fb-text-primary">
      <Navbar />
      
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">Projects Portfolio</h1>
              <p className="text-fb-text-secondary">
                Explore my latest work and ongoing projects
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="fb-card p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fb-text-secondary" size={20} />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="fb-input pl-10 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-4">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fb-text-secondary" size={20} />
                    <select
                      className="fb-input pl-10 pr-8 appearance-none bg-transparent"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="all">All Categories</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <select
                    className="fb-input px-4 appearance-none bg-transparent"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-fb-text-secondary">No projects found matching your criteria.</p>
              </div>
            )}
          </div>
        </main>
      </div>
      
      <MobileNavigation />
    </div>
  );
};

export default Projects;