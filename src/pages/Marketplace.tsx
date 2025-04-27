import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileNavigation from '../components/layout/MobileNavigation';
import { Search, Filter, DollarSign, Clock, Star, MapPin, Users, ChevronRight, Briefcase } from 'lucide-react';
import { freelanceProjects } from '../utils/mockData';
import type { FreelanceProject } from '../types';

const Marketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBudgetType, setSelectedBudgetType] = useState<string>('all');

  const categories = Array.from(
    new Set(freelanceProjects.map(project => project.category))
  );

  const filteredProjects = freelanceProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesBudgetType = selectedBudgetType === 'all' || project.budget.type === selectedBudgetType;
    
    return matchesSearch && matchesCategory && matchesBudgetType;
  });

  const formatBudget = (project: FreelanceProject) => {
    if (project.budget.type === 'fixed') {
      return `$${project.budget.min.toLocaleString()} - $${project.budget.max.toLocaleString()}`;
    }
    return `$${project.budget.min} - $${project.budget.max}/hr`;
  };

  return (
    <div className="bg-fb-bg min-h-screen text-fb-text-primary">
      <Navbar />
      
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-[900px] mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">Freelance Projects</h1>
              <p className="text-fb-text-secondary">
                Find exciting projects and collaborate with clients worldwide
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
                    value={selectedBudgetType}
                    onChange={(e) => setSelectedBudgetType(e.target.value)}
                  >
                    <option value="all">All Budgets</option>
                    <option value="fixed">Fixed Price</option>
                    <option value="hourly">Hourly Rate</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Projects List */}
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <div key={project.id} className="fb-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                      <div className="flex items-center text-fb-text-secondary text-sm mb-2">
                        <Clock size={16} className="mr-1" />
                        <span>Posted {project.postedDate}</span>
                        <span className="mx-2">•</span>
                        <Users size={16} className="mr-1" />
                        <span>{project.proposals} proposals</span>
                        <span className="mx-2">•</span>
                        <MapPin size={16} className="mr-1" />
                        <span>{project.clientInfo.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={project.clientInfo.avatar}
                        alt={project.clientInfo.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">{project.clientInfo.name}</p>
                        <div className="flex items-center text-fb-text-secondary text-sm">
                          <Star size={14} className="text-yellow-400 mr-1" />
                          <span>{project.clientInfo.rating}</span>
                          <span className="mx-1">•</span>
                          <span>{project.clientInfo.totalProjects} projects</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-fb-text-secondary mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-fb-button px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-fb-hover">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center">
                        <DollarSign size={20} className="text-green-500 mr-2" />
                        <div>
                          <p className="font-medium">{formatBudget(project)}</p>
                          <p className="text-sm text-fb-text-secondary">
                            {project.budget.type === 'fixed' ? 'Fixed Price' : 'Hourly Rate'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock size={20} className="text-blue-500 mr-2" />
                        <div>
                          <p className="font-medium">{project.duration}</p>
                          <p className="text-sm text-fb-text-secondary">Duration</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Briefcase size={20} className="text-purple-500 mr-2" />
                        <div>
                          <p className="font-medium">{project.category}</p>
                          <p className="text-sm text-fb-text-secondary">Category</p>
                        </div>
                      </div>
                    </div>
                    <button className="fb-button bg-fb-accent hover:bg-fb-accent-hover text-white flex items-center">
                      Submit Proposal
                      <ChevronRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      
      <MobileNavigation />
    </div>
  );
};

export default Marketplace;