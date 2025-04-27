import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileNavigation from '../components/layout/MobileNavigation';
import { 
  CheckSquare, Clock, AlertCircle, FileText, DollarSign, MessageCircle,
  Plus, Filter, Search, Download, ExternalLink, Trash2, Edit
} from 'lucide-react';
import { tasks, documents, transactions, messages } from '../utils/mockData';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'documents' | 'finances' | 'messages'>('tasks');

  return (
    <div className="bg-fb-bg min-h-screen text-fb-text-primary">
      <Navbar />
      
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-[1000px] mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
              <p className="text-fb-text-secondary">
                Manage your tasks, documents, finances, and communications
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Active Tasks', value: '8', icon: CheckSquare, color: 'text-blue-500' },
                { label: 'Upcoming Deadlines', value: '3', icon: Clock, color: 'text-yellow-500' },
                { label: 'Pending Proposals', value: '5', icon: AlertCircle, color: 'text-purple-500' },
                { label: 'Unread Messages', value: '12', icon: MessageCircle, color: 'text-green-500' }
              ].map((stat, index) => (
                <div key={index} className="fb-card p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-fb-text-secondary">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon size={24} className={stat.color} />
                  </div>
                </div>
              ))}
            </div>

            {/* Content Tabs */}
            <div className="fb-card mb-6">
              <div className="flex border-b border-fb-hover overflow-x-auto">
                {[
                  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
                  { id: 'documents', label: 'Documents', icon: FileText },
                  { id: 'finances', label: 'Finances', icon: DollarSign },
                  { id: 'messages', label: 'Messages', icon: MessageCircle }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center px-6 py-3 ${
                      activeTab === tab.id
                        ? 'text-fb-accent border-b-2 border-fb-accent'
                        : 'text-fb-text-secondary'
                    }`}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  >
                    <tab.icon size={20} className="mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tasks Section */}
              {activeTab === 'tasks' && (
                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fb-text-secondary" size={20} />
                      <input
                        type="text"
                        placeholder="Search tasks..."
                        className="fb-input pl-10 w-full"
                      />
                    </div>
                    <button className="fb-button bg-fb-accent hover:bg-fb-accent-hover text-white flex items-center">
                      <Plus size={18} className="mr-2" />
                      Add Task
                    </button>
                  </div>

                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div key={task.id} className="fb-card bg-fb-hover p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold mb-1">{task.title}</h3>
                            <p className="text-fb-text-secondary text-sm mb-2">
                              {task.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {task.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="bg-fb-button px-2 py-1 rounded-full text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="fb-icon-button">
                              <Edit size={18} />
                            </button>
                            <button className="fb-icon-button text-red-500">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-fb-hover">
                          <div className="flex items-center gap-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              task.priority === 'high' ? 'bg-red-500' :
                              task.priority === 'medium' ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}>
                              {task.priority}
                            </span>
                            <span className="text-fb-text-secondary text-sm">
                              Due: {task.dueDate}
                            </span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            task.status === 'completed' ? 'bg-green-500' :
                            task.status === 'in-progress' ? 'bg-blue-500' :
                            'bg-yellow-500'
                          }`}>
                            {task.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documents Section */}
              {activeTab === 'documents' && (
                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fb-text-secondary" size={20} />
                      <input
                        type="text"
                        placeholder="Search documents..."
                        className="fb-input pl-10 w-full"
                      />
                    </div>
                    <button className="fb-button bg-fb-accent hover:bg-fb-accent-hover text-white flex items-center">
                      <Plus size={18} className="mr-2" />
                      Upload Document
                    </button>
                  </div>

                  <div className="space-y-4">
                    {documents.map((doc) => (
                      <div key={doc.id} className="fb-card bg-fb-hover p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FileText size={24} className="mr-3" />
                            <div>
                              <h3 className="font-bold">{doc.title}</h3>
                              <p className="text-fb-text-secondary text-sm">
                                Modified: {doc.lastModified} • {doc.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="fb-button flex items-center">
                              <Download size={18} className="mr-2" />
                              Download
                            </button>
                            <button className="fb-icon-button">
                              <ExternalLink size={18} />
                            </button>
                            <button className="fb-icon-button text-red-500">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Finances Section */}
              {activeTab === 'finances' && (
                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fb-text-secondary" size={20} />
                      <input
                        type="text"
                        placeholder="Search transactions..."
                        className="fb-input pl-10 w-full"
                      />
                    </div>
                    <button className="fb-button bg-fb-accent hover:bg-fb-accent-hover text-white flex items-center">
                      <Plus size={18} className="mr-2" />
                      Add Transaction
                    </button>
                  </div>

                  <div className="space-y-4">
                    {transactions.map((transaction) => (
                      <div key={transaction.id} className="fb-card bg-fb-hover p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`p-2 rounded-full ${
                              transaction.type === 'income' ? 'bg-green-500/20' : 'bg-red-500/20'
                            }`}>
                              <DollarSign size={24} className={
                                transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                              } />
                            </div>
                            <div className="ml-3">
                              <h3 className="font-bold">{transaction.description}</h3>
                              <p className="text-fb-text-secondary text-sm">
                                {transaction.date} • {transaction.category}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-bold ${
                              transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                            }`}>
                              {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                            </p>
                            <p className="text-fb-text-secondary text-sm">
                              {transaction.status}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages Section */}
              {activeTab === 'messages' && (
                <div className="p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`fb-card bg-fb-hover p-4 ${
                        !message.read ? 'border-l-4 border-fb-accent' : ''
                      }`}>
                        <div className="flex items-start">
                          <img
                            src={message.sender.avatar}
                            alt={message.sender.name}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-bold">{message.sender.name}</h3>
                              <span className="text-fb-text-secondary text-sm">
                                {new Date(message.timestamp).toLocaleString()}
                              </span>
                            </div>
                            <p className="text-fb-text-secondary">
                              {message.content}
                            </p>
                            {message.attachments && message.attachments.length > 0 && (
                              <div className="mt-2">
                                {message.attachments.map((attachment, index) => (
                                  <a
                                    key={index}
                                    href={attachment.url}
                                    className="flex items-center text-fb-accent hover:underline"
                                  >
                                    <FileText size={16} className="mr-1" />
                                    {attachment.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
      
      <MobileNavigation />
    </div>
  );
};

export default Dashboard;