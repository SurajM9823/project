import React, { useState } from 'react';
import { sidebarItems } from '../../utils/mockData';
import { currentUser } from '../../utils/mockData';
import * as LucideIcons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const portfolioSections = [
    { id: 'projects', label: 'Projects', count: 12 },
    { id: 'education', label: 'Education', count: 2 },
    { id: 'experience', label: 'Experience', count: 3 },
    { id: 'certifications', label: 'Certifications', count: 5 },
    { id: 'skills', label: 'Skills', count: 15 }
  ];

  return (
    <aside className="hidden md:block w-[300px] pt-4 px-2 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
      <div className="space-y-1">
        <motion.a 
          href="/profile" 
          className="flex items-center p-2 rounded-lg hover:bg-fb-hover transition-colors relative"
          onHoverStart={() => setHoveredItem('profile')}
          onHoverEnd={() => setHoveredItem(null)}
        >
          <img 
            src={currentUser.avatar} 
            alt={currentUser.name} 
            className="w-9 h-9 rounded-full mr-2" 
          />
          <div>
            <span className="font-medium">{currentUser.name}</span>
            <p className="text-sm text-fb-text-secondary">{currentUser.role}</p>
          </div>
          <AnimatePresence>
            {hoveredItem === 'profile' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute left-full ml-2 px-3 py-1 bg-fb-card rounded shadow-lg whitespace-nowrap"
              >
                View Profile
              </motion.div>
            )}
          </AnimatePresence>
        </motion.a>

        {sidebarItems.map((item, index) => {
          // @ts-ignore - Dynamically accessing Lucide icons
          const Icon = LucideIcons[item.icon];
          
          return (
            <motion.a 
              key={index} 
              href={item.path}
              className="flex items-center p-2 rounded-lg hover:bg-fb-hover transition-colors relative"
              onHoverStart={() => setHoveredItem(item.label)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <div className="w-9 h-9 rounded-full bg-fb-hover flex items-center justify-center mr-2">
                <Icon size={20} />
              </div>
              <span className="font-medium">{item.label}</span>
              <AnimatePresence>
                {hoveredItem === item.label && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute left-full ml-2 px-3 py-1 bg-fb-card rounded shadow-lg whitespace-nowrap"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-fb-hover">
        <div className="px-2 flex items-center justify-between mb-2">
          <h3 className="text-fb-text-secondary font-medium">Portfolio Sections</h3>
          <button 
            className="text-fb-text-secondary hover:text-fb-text-primary"
            onClick={() => setExpandedSection(expandedSection ? null : 'portfolio')}
          >
            {expandedSection === 'portfolio' ? (
              <LucideIcons.ChevronDown size={20} />
            ) : (
              <LucideIcons.ChevronRight size={20} />
            )}
          </button>
        </div>
        <AnimatePresence>
          {expandedSection === 'portfolio' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-1">
                {portfolioSections.map((section) => (
                  <motion.a 
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-fb-hover transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <span className="font-medium">{section.label}</span>
                    <span className="text-fb-text-secondary text-sm bg-fb-hover px-2 py-0.5 rounded-full">
                      {section.count}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="mt-4 pt-4 border-t border-fb-hover text-xs text-fb-text-secondary px-2">
        <div className="flex flex-wrap gap-2">
          {['Privacy', 'Terms', 'Cookies', 'More'].map((item, index) => (
            <motion.a 
              key={index} 
              href="#"
              className="hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              {item}
              {index < 3 && ' · '}
            </motion.a>
          ))}
        </div>
        <motion.p 
          className="mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          © 2025 Portfolio
        </motion.p>
      </div>
    </aside>
  );
};

export default Sidebar;