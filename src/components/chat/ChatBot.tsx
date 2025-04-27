import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react';
import { currentUser, projectPosts, servicePackages, freelanceProjects } from '../../utils/mockData';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    type: 'bot',
    content: `Hi! I'm ${currentUser.name}'s AI assistant. I can help you:
• Learn about services and pricing
• Explore portfolio projects
• Schedule consultations
• Get technical information
• Find freelancing opportunities

What would you like to know?`,
    timestamp: new Date()
  }
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response with typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateResponse(input.trim()),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Services and Pricing
    if (input.includes('services') || input.includes('offer') || input.includes('pricing') || input.includes('packages')) {
      const servicesList = servicePackages.map(service => 
        `• ${service.name} - $${service.price}
  ${service.description}
  Key features: ${service.features.slice(0, 3).join(', ')}${service.features.length > 3 ? '...' : ''}`
      ).join('\n\n');
      
      return `Here are my professional services:\n\n${servicesList}\n\nWould you like more details about any specific service?`;
    }
    
    // Portfolio Projects
    if (input.includes('portfolio') || input.includes('projects') || input.includes('work')) {
      const recentProjects = projectPosts.map(project =>
        `• ${project.projectTitle}
  ${project.projectDescription}
  Technologies: ${project.technologies.map(t => t.name).join(', ')}`
      ).join('\n\n');
      
      return `Here are some of my recent projects:\n\n${recentProjects}\n\nWould you like to see more projects or get specific details about any of them?`;
    }
    
    // Experience and Background
    if (input.includes('experience') || input.includes('background') || input.includes('work history')) {
      const experience = currentUser.experience.map(exp =>
        `• ${exp.role} at ${exp.company} (${exp.startDate} - ${exp.endDate})
  ${exp.description}
  Technologies: ${exp.technologies.join(', ')}`
      ).join('\n\n');
      
      return `Here's my professional experience:\n\n${experience}\n\nI also have ${currentUser.certifications.length} professional certifications. Would you like to know more about them?`;
    }
    
    // Skills and Technologies
    if (input.includes('skills') || input.includes('technologies') || input.includes('tech stack')) {
      const technicalSkills = currentUser.technicalSkills
        .sort((a, b) => b.level - a.level)
        .map(skill => `• ${skill.name} (${skill.level}% proficiency)`)
        .join('\n');
      
      return `Here are my technical skills:\n\n${technicalSkills}\n\nI'm always learning and staying updated with the latest technologies. Would you like to know more about my experience with any specific technology?`;
    }
    
    // Freelancing Opportunities
    if (input.includes('freelance') || input.includes('hire') || input.includes('work together')) {
      const availableProjects = freelanceProjects
        .filter(project => project.status === 'open')
        .map(project => 
          `• ${project.title}
  Budget: ${project.budget.type === 'fixed' ? 
    `$${project.budget.min}-${project.budget.max}` : 
    `$${project.budget.min}-${project.budget.max}/hr`}
  Duration: ${project.duration}`
        ).join('\n\n');
      
      return `I'm currently ${currentUser.availability}. Here are some projects I'm interested in:\n\n${availableProjects}\n\nWould you like to discuss a specific project or schedule a consultation?`;
    }
    
    // Contact and Scheduling
    if (input.includes('contact') || input.includes('schedule') || input.includes('meet')) {
      return `You can reach me through:
• Email: contact@portfolio.com
• LinkedIn: linkedin.com/in/portfolio
• Schedule a meeting: calendly.com/portfolio

My typical response time is within 24 hours. Would you like me to help you schedule a consultation?`;
    }
    
    // Education and Certifications
    if (input.includes('education') || input.includes('degree') || input.includes('certification')) {
      const education = currentUser.education.map(edu =>
        `• ${edu.degree} in ${edu.field} from ${edu.school}
  ${edu.startDate} - ${edu.endDate}
  ${edu.description}`
      ).join('\n\n');
      
      const certifications = currentUser.certifications.map(cert =>
        `• ${cert.name} (${cert.issuer}, ${cert.date})`
      ).join('\n');
      
      return `Education:\n\n${education}\n\nCertifications:\n${certifications}\n\nWould you like more details about my educational background or certifications?`;
    }

    // Default response
    return `I can help you with:
• Exploring my services and pricing
• Learning about my portfolio projects
• Understanding my experience and skills
• Discussing freelancing opportunities
• Scheduling consultations

What specific information would you like to know?`;
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-8 md:right-8 bg-fb-accent hover:bg-fb-accent-hover text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-4 md:bottom-24 md:right-8 w-[calc(100vw-2rem)] md:w-[400px] bg-fb-card rounded-lg shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-fb-accent p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Bot size={24} className="text-white mr-2" />
                <div>
                  <h3 className="font-bold text-white">AI Assistant</h3>
                  <p className="text-white/80 text-sm">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className="w-8 h-8 rounded-full bg-fb-hover flex items-center justify-center flex-shrink-0">
                        {message.type === 'user' ? (
                          <User size={16} />
                        ) : (
                          <Bot size={16} />
                        )}
                      </div>
                      <div className={`rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-fb-accent text-white'
                          : 'bg-fb-hover'
                      }`}>
                        <p className="whitespace-pre-line">{message.content}</p>
                        <p className="text-xs opacity-50 mt-1">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-fb-hover flex items-center justify-center">
                      <Bot size={16} />
                    </div>
                    <div className="bg-fb-hover rounded-lg p-3">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-fb-hover">
              <div className="flex items-end space-x-2">
                <TextareaAutosize
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 bg-fb-hover rounded-lg p-3 max-h-32 resize-none focus:outline-none focus:ring-2 focus:ring-fb-accent"
                  maxRows={4}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-fb-accent hover:bg-fb-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full p-3 flex-shrink-0 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;