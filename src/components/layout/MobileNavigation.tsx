import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, Menu, Bell, X, MessageCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { currentUser, sidebarItems } from '../../utils/mockData';

const MobileNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = window.location.pathname;

  const mainNavItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: User, path: '/profile', label: 'Profile' },
    { icon: Briefcase, path: '/projects', label: 'Projects' },
    { icon: Menu, onClick: () => setIsMenuOpen(true), label: 'Menu' }, // Removed /notifications
  ];

  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-fb-card border-t border-fb-hover z-40">
        <div className="flex items-center justify-around">
          {mainNavItems.map((item, index) =>
            item.onClick ? (
              <button
                key={index}
                onClick={item.onClick}
                className={`flex flex-col items-center py-2 px-3 ${
                  path === item.path ? 'text-fb-accent' : 'text-fb-text-secondary'
                }`}
              >
                <item.icon size={24} />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            ) : (
              <Link
                key={index}
                to={item.path}
                className={`flex flex-col items-center py-2 px-3 ${
                  path === `/project${item.path}` ? 'text-fb-accent' : 'text-fb-text-secondary'
                }`}
              >
                <item.icon size={24} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            )
          )}
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-[300px] bg-fb-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-fb-hover">
                <div className="flex items-center">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-medium">{currentUser.name}</h3>
                    <p className="text-sm text-fb-text-secondary">{currentUser.role}</p>
                  </div>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="text-fb-text-secondary">
                  <X size={24} />
                </button>
              </div>
              <div className="p-4">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fb-text-secondary"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search Portfolio"
                    className="fb-input pl-10 w-full"
                  />
                </div>
              </div>
              <div className="overflow-y-auto h-[calc(100vh-200px)] custom-scrollbar">
                <div className="p-2 space-y-1">
                  {sidebarItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={index}
                        to={item.path}
                        className={`flex items-center p-3 rounded-lg transition-colors ${
                          path === `/project${item.path}`
                            ? 'bg-fb-accent text-white'
                            : 'hover:bg-fb-hover'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Icon size={20} className="mr-3" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
                <div className="p-4 border-t border-fb-hover mt-4">
                  <h3 className="text-fb-text-secondary font-medium mb-2">Portfolio Sections</h3>
                  <div className="space-y-1">
                    {['Projects', 'Education', 'Experience', 'Certifications', 'Skills'].map(
                      (item) => (
                        <Link
                          key={item}
                          to={`/${item.toLowerCase()}`}
                          className="block p-3 rounded-lg hover:bg-fb-hover transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-fb-hover bg-fb-card">
                <button className="w-full p-3 bg-fb-accent text-white rounded-lg font-medium">
                  Sign Out
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;