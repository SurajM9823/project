import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileNavigation from '../components/layout/MobileNavigation';
import { 
  User, Bell, Lock, Eye, Globe, Palette, Volume2, Moon, 
  MessageCircle, Shield, Database, Trash2, ToggleLeft, ChevronRight
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    messages: true,
    updates: false
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    allowMessages: true
  });

  const sections = [
    { id: 'account', label: 'Account Settings', icon: User },
    { id: 'privacy', label: 'Privacy & Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Eye },
    { id: 'language', label: 'Language & Region', icon: Globe },
    { id: 'sound', label: 'Sound & Media', icon: Volume2 },
    { id: 'theme', label: 'Theme', icon: Palette },
    { id: 'messages', label: 'Messages & Chat', icon: MessageCircle },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'data', label: 'Data & Storage', icon: Database }
  ];

  return (
    <div className="bg-fb-bg min-h-screen text-fb-text-primary">
      <Navbar />
      
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-[900px] mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">Settings</h1>
              <p className="text-fb-text-secondary">
                Manage your account settings and preferences
              </p>
            </div>

            <div className="flex gap-6">
              {/* Settings Navigation */}
              <div className="hidden md:block w-64">
                <div className="fb-card p-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-fb-accent text-white'
                          : 'hover:bg-fb-hover'
                      }`}
                    >
                      <section.icon size={20} className="mr-3" />
                      <span>{section.label}</span>
                    </button>
                  ))}

                  <button className="w-full flex items-center p-3 rounded-lg text-red-500 hover:bg-fb-hover mt-2">
                    <Trash2 size={20} className="mr-3" />
                    <span>Delete Account</span>
                  </button>
                </div>
              </div>

              {/* Settings Content */}
              <div className="flex-1">
                {/* Account Settings */}
                {activeSection === 'account' && (
                  <div className="space-y-6">
                    <div className="fb-card p-6">
                      <h2 className="text-xl font-bold mb-4">Profile Information</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name</label>
                          <input
                            type="text"
                            className="fb-input w-full"
                            defaultValue="John Portfolio"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email</label>
                          <input
                            type="email"
                            className="fb-input w-full"
                            defaultValue="john@portfolio.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone</label>
                          <input
                            type="tel"
                            className="fb-input w-full"
                            defaultValue="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Bio</label>
                          <textarea
                            className="fb-input w-full min-h-[100px]"
                            defaultValue="Full Stack Developer passionate about creating amazing web experiences."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="fb-card p-6">
                      <h2 className="text-xl font-bold mb-4">Professional Information</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Current Role</label>
                          <input
                            type="text"
                            className="fb-input w-full"
                            defaultValue="Senior Full Stack Developer"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Company</label>
                          <input
                            type="text"
                            className="fb-input w-full"
                            defaultValue="Tech Giants Inc."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Location</label>
                          <input
                            type="text"
                            className="fb-input w-full"
                            defaultValue="San Francisco, CA"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Privacy Settings */}
                {activeSection === 'privacy' && (
                  <div className="space-y-6">
                    <div className="fb-card p-6">
                      <h2 className="text-xl font-bold mb-4">Privacy Settings</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Profile Visibility</label>
                          <select 
                            className="fb-input w-full"
                            value={privacy.profileVisibility}
                            onChange={(e) => setPrivacy({ ...privacy, profileVisibility: e.target.value })}
                          >
                            <option value="public">Public</option>
                            <option value="connections">Connections Only</option>
                            <option value="private">Private</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Show email address</span>
                          <button 
                            className={`p-2 rounded-full ${privacy.showEmail ? 'bg-fb-accent' : 'bg-fb-hover'}`}
                            onClick={() => setPrivacy({ ...privacy, showEmail: !privacy.showEmail })}
                          >
                            <ToggleLeft size={24} className={privacy.showEmail ? 'rotate-180' : ''} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Show phone number</span>
                          <button 
                            className={`p-2 rounded-full ${privacy.showPhone ? 'bg-fb-accent' : 'bg-fb-hover'}`}
                            onClick={() => setPrivacy({ ...privacy, showPhone: !privacy.showPhone })}
                          >
                            <ToggleLeft size={24} className={privacy.showPhone ? 'rotate-180' : ''} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Allow messages from non-connections</span>
                          <button 
                            className={`p-2 rounded-full ${privacy.allowMessages ? 'bg-fb-accent' : 'bg-fb-hover'}`}
                            onClick={() => setPrivacy({ ...privacy, allowMessages: !privacy.allowMessages })}
                          >
                            <ToggleLeft size={24} className={privacy.allowMessages ? 'rotate-180' : ''} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="fb-card p-6">
                      <h2 className="text-xl font-bold mb-4">Security Settings</h2>
                      <div className="space-y-4">
                        <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-fb-hover">
                          <span>Change Password</span>
                          <ChevronRight size={20} />
                        </button>
                        <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-fb-hover">
                          <span>Two-Factor Authentication</span>
                          <ChevronRight size={20} />
                        </button>
                        <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-fb-hover">
                          <span>Login History</span>
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications Settings */}
                {activeSection === 'notifications' && (
                  <div className="fb-card p-6">
                    <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Email Notifications</span>
                        <button 
                          className={`p-2 rounded-full ${notifications.email ? 'bg-fb-accent' : 'bg-fb-hover'}`}
                          onClick={() => setNotifications({ ...notifications, email: !notifications.email })}
                        >
                          <ToggleLeft size={24} className={notifications.email ? 'rotate-180' : ''} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Push Notifications</span>
                        <button 
                          className={`p-2 rounded-full ${notifications.push ? 'bg-fb-accent' : 'bg-fb-hover'}`}
                          onClick={() => setNotifications({ ...notifications, push: !notifications.push })}
                        >
                          <ToggleLeft size={24} className={notifications.push ? 'rotate-180' : ''} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Message Notifications</span>
                        <button 
                          className={`p-2 rounded-full ${notifications.messages ? 'bg-fb-accent' : 'bg-fb-hover'}`}
                          onClick={() => setNotifications({ ...notifications, messages: !notifications.messages })}
                        >
                          <ToggleLeft size={24} className={notifications.messages ? 'rotate-180' : ''} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Product Updates</span>
                        <button 
                          className={`p-2 rounded-full ${notifications.updates ? 'bg-fb-accent' : 'bg-fb-hover'}`}
                          onClick={() => setNotifications({ ...notifications, updates: !notifications.updates })}
                        >
                          <ToggleLeft size={24} className={notifications.updates ? 'rotate-180' : ''} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Theme Settings */}
                {activeSection === 'theme' && (
                  <div className="fb-card p-6">
                    <h2 className="text-xl font-bold mb-4">Theme Settings</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Color Theme</label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            className={`p-4 rounded-lg border-2 ${
                              theme === 'dark' 
                                ? 'border-fb-accent bg-fb-hover' 
                                : 'border-fb-hover'
                            }`}
                            onClick={() => setTheme('dark')}
                          >
                            <Moon size={24} className="mx-auto mb-2" />
                            <span>Dark Mode</span>
                          </button>
                          <button
                            className={`p-4 rounded-lg border-2 ${
                              theme === 'light' 
                                ? 'border-fb-accent bg-fb-hover' 
                                : 'border-fb-hover'
                            }`}
                            onClick={() => setTheme('light')}
                          >
                            <Eye size={24} className="mx-auto mb-2" />
                            <span>Light Mode</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Language Settings */}
                {activeSection === 'language' && (
                  <div className="fb-card p-6">
                    <h2 className="text-xl font-bold mb-4">Language & Region</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Display Language</label>
                        <select 
                          className="fb-input w-full"
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                        >
                          <option value="en">English (US)</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                          <option value="de">Deutsch</option>
                          <option value="it">Italiano</option>
                          <option value="pt">Português</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <MobileNavigation />
    </div>
  );
};

export default Settings;