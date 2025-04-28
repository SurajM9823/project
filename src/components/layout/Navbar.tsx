import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, Users, Briefcase, Bell, MessageCircle, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { currentUser } from '../../utils/mockData';

const Navbar: React.FC = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifications = [
    { id: 1, content: 'New project proposal received', time: '5m ago', unread: true },
    { id: 2, content: 'Client meeting scheduled', time: '1h ago', unread: true },
    { id: 3, content: 'Project milestone completed', time: '2h ago', unread: false },
  ];

  const messages = [
    { id: 1, user: 'Sarah Johnson', content: 'Hi! When can we discuss...', time: '10m ago', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', unread: true },
    { id: 2, user: 'Michael Chen', content: 'The project looks great!', time: '30m ago', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg', unread: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-fb-card shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Link to="/" className="mr-2 md:mr-4">
            <h1 className="text-fb-accent text-3xl font-bold">portfolio</h1>
          </Link>
          <div className={`hidden sm:flex relative rounded-full bg-fb-hover ${searchFocused ? 'ring-2 ring-fb-accent' : ''}`}>
            <div className="flex items-center pl-3 text-fb-text-secondary">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search Portfolio"
              className="bg-transparent py-2 pl-2 pr-4 outline-none text-fb-text-primary w-full md:w-60"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center flex-1">
          <nav className="flex space-x-1">
            {[
              { icon: Home, path: '/', label: 'Home' },
              { icon: Users, path: '/profile', label: 'Profile' },
              { icon: Briefcase, path: '/projects', label: 'Projects' },
            ].map((item) => {
              const isActive = window.location.pathname === `/project${item.path}`;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`fb-icon-button mx-1 p-3 relative group ${
                    isActive ? 'text-fb-accent' : 'text-fb-text-secondary hover:bg-fb-hover'
                  }`}
                >
                  <item.icon size={24} />
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-fb-accent"
                    />
                  )}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm bg-fb-card rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <button
              className="fb-icon-button hidden md:flex relative"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowMessages(false);
                setShowUserMenu(false);
              }}
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                2
              </span>
            </button>
            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-80 bg-fb-card rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-4 border-b border-fb-hover">
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 hover:bg-fb-hover cursor-pointer ${
                          notification.unread ? 'bg-fb-hover/50' : ''
                        }`}
                      >
                        <p className="text-sm">{notification.content}</p>
                        <p className="text-xs text-fb-text-secondary mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <button
              className="fb-icon-button hidden md:flex relative"
              onClick={() => {
                setShowMessages(!showMessages);
                setShowNotifications(false);
                setShowUserMenu(false);
              }}
            >
              <MessageCircle size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                2
              </span>
            </button>
            <AnimatePresence>
              {showMessages && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-80 bg-fb-card rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-4 border-b border-fb-hover">
                    <h3 className="font-semibold">Messages</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`p-4 hover:bg-fb-hover cursor-pointer ${
                          message.unread ? 'bg-fb-hover/50' : ''
                        }`}
                      >
                        <div className="flex items-center">
                          <img
                            src={message.avatar}
                            alt={message.user}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <p className="font-medium">{message.user}</p>
                            <p className="text-sm text-fb-text-secondary">{message.content}</p>
                            <p className="text-xs text-fb-text-secondary mt-1">{message.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <button
              className="fb-icon-button hidden md:flex"
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowNotifications(false);
                setShowMessages(false);
              }}
            >
              <ChevronDown size={20} />
            </button>
            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-64 bg-fb-card rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-4 border-b border-fb-hover">
                    <div className="flex items-center">
                      <img
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">{currentUser.name}</p>
                        <p className="text-sm text-fb-text-secondary">{currentUser.role}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {[
                      { label: 'Settings', to: '/settings' },
                      { label: 'Help Center', href: '/help' },
                      { label: 'Sign Out', href: '/logout' },
                    ].map((item, index) =>
                      item.to ? (
                        <Link
                          key={index}
                          to={item.to}
                          className="block px-4 py-2 hover:bg-fb-hover"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 hover:bg-fb-hover"
                        >
                          {item.label}
                        </a>
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex items-center ml-2">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <button className="fb-icon-button md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;