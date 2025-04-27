import { UserProfile, Story, Post, ProjectPost, ServicePackage, Testimonial, CodeSnippet, BlogPost, Tutorial, FreelanceProject } from '../types';

export const currentUser: UserProfile = {
  id: '1',
  name: 'John Portfolio',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  coverPhoto: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg',
  role: 'Full Stack Developer',
  location: 'San Francisco, CA',
  bio: 'Building beautiful web experiences with React, Node.js, and everything in between. Passionate about creating scalable solutions and mentoring fellow developers.',
  friends: 342,
  followers: 518,
  hourlyRate: 85,
  availability: 'Available for freelance',
  languages: [
    { name: 'English', proficiency: 100, flag: '🇺🇸' },
    { name: 'Spanish', proficiency: 80, flag: '🇪🇸' },
    { name: 'French', proficiency: 60, flag: '🇫🇷' }
  ],
  technicalSkills: [
    { name: 'React', level: 95, icon: '⚛️', color: '#61DAFB' },
    { name: 'TypeScript', level: 90, icon: '📘', color: '#3178C6' },
    { name: 'Node.js', level: 88, icon: '🟩', color: '#339933' },
    { name: 'Python', level: 85, icon: '🐍', color: '#3776AB' },
    { name: 'AWS', level: 82, icon: '☁️', color: '#FF9900' },
    { name: 'Docker', level: 80, icon: '🐳', color: '#2496ED' }
  ],
  softSkills: [
    { name: 'Problem Solving', level: 95, icon: '🧩', color: '#FF6B6B' },
    { name: 'Communication', level: 90, icon: '💬', color: '#4ECDC4' },
    { name: 'Leadership', level: 85, icon: '👥', color: '#45B7D1' },
    { name: 'Time Management', level: 88, icon: '⏰', color: '#96CEB4' }
  ],
  education: [
    {
      school: 'Stanford University',
      degree: 'Master of Science',
      field: 'Computer Science',
      startDate: '2020',
      endDate: '2022',
      description: 'Specialized in Artificial Intelligence and Machine Learning',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
    },
    {
      school: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2016',
      endDate: '2020',
      description: 'Minor in Business Administration',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'
    }
  ],
  experience: [
    {
      company: 'Tech Giants Inc.',
      role: 'Senior Full Stack Developer',
      startDate: '2022',
      endDate: 'Present',
      description: 'Leading a team of developers in building scalable web applications',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      company: 'Startup Hub',
      role: 'Full Stack Developer',
      startDate: '2020',
      endDate: '2022',
      description: 'Developed and maintained multiple client projects',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      technologies: ['React', 'Express', 'PostgreSQL', 'Docker']
    }
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      link: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google',
      date: '2022',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      link: 'https://cloud.google.com'
    }
  ]
};

export const stories: Story[] = [
  {
    id: '1',
    user: currentUser,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    title: 'Latest Project'
  },
  {
    id: '2',
    user: currentUser,
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg',
    title: 'React Skills'
  },
  {
    id: '3',
    user: currentUser,
    image: 'https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg',
    title: 'UI/UX Work'
  },
  {
    id: '4',
    user: currentUser,
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg',
    title: 'Backend'
  }
];

export const posts: Post[] = [
  {
    id: '1',
    user: currentUser,
    content: 'Just launched my new portfolio website with a unique Facebook-inspired interface!',
    images: ['https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg'],
    timestamp: '2 hours ago',
    likes: 24,
    comments: 5,
    shares: 2
  },
  {
    id: '2',
    user: currentUser,
    content: 'Working on a new project using React and TypeScript. Stay tuned for updates!',
    timestamp: '1 day ago',
    likes: 45,
    comments: 8,
    shares: 3
  }
];

export const projectPosts: ProjectPost[] = [
  {
    id: '3',
    user: currentUser,
    content: 'Proud to share my latest project:',
    projectTitle: 'E-Commerce Dashboard',
    projectDescription: 'A full-featured dashboard for managing online stores with real-time analytics and inventory management.',
    projectLink: 'https://example.com/project',
    demoLink: 'https://example.com/demo',
    githubLink: 'https://github.com/example/project',
    technologies: [
      { name: 'React', percentage: 40, color: '#61DAFB' },
      { name: 'Node.js', percentage: 30, color: '#339933' },
      { name: 'MongoDB', percentage: 20, color: '#47A248' },
      { name: 'Express', percentage: 10, color: '#000000' }
    ],
    features: [
      'Real-time analytics dashboard',
      'Inventory management system',
      'Order processing workflow',
      'Customer management'
    ],
    category: 'Web Application',
    status: 'completed',
    images: ['https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg'],
    timestamp: '3 days ago',
    likes: 87,
    comments: 12,
    shares: 7
  },
  {
    id: '4',
    user: currentUser,
    content: 'Just completed:',
    projectTitle: 'Social Media Analytics Tool',
    projectDescription: 'A tool that helps businesses track and analyze their social media performance across different platforms.',
    demoLink: 'https://example.com/demo',
    githubLink: 'https://github.com/example/project',
    technologies: [
      { name: 'React', percentage: 35, color: '#61DAFB' },
      { name: 'Firebase', percentage: 25, color: '#FFCA28' },
      { name: 'Chart.js', percentage: 25, color: '#FF6384' },
      { name: 'Material UI', percentage: 15, color: '#0081CB' }
    ],
    features: [
      'Multi-platform analytics',
      'Custom report generation',
      'Automated insights',
      'Export functionality'
    ],
    category: 'Analytics',
    status: 'completed',
    images: ['https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg'],
    timestamp: '1 week ago',
    likes: 112,
    comments: 18,
    shares: 9
  }
];

export const servicePackages: ServicePackage[] = [
  {
    id: '1',
    name: 'Basic Website',
    description: 'Perfect for small businesses looking to establish their online presence',
    price: 999,
    features: [
      'Custom Design',
      'Mobile Responsive',
      'Up to 5 Pages',
      'Basic SEO',
      'Contact Form'
    ],
    deliveryTime: '2 weeks',
    revisions: 2
  },
  {
    id: '2',
    name: 'E-Commerce Solution',
    description: 'Complete online store with payment processing and inventory management',
    price: 2499,
    features: [
      'Everything in Basic',
      'Product Management',
      'Payment Integration',
      'Order Management',
      'Customer Accounts',
      'Advanced Analytics'
    ],
    popular: true,
    deliveryTime: '4 weeks',
    revisions: 3
  },
  {
    id: '3',
    name: 'Custom Web Application',
    description: 'Tailored web application development for complex business needs',
    price: 4999,
    features: [
      'Custom Features',
      'API Integration',
      'Database Design',
      'User Authentication',
      'Admin Dashboard',
      'Technical Documentation',
      'Premium Support'
    ],
    deliveryTime: '8 weeks',
    revisions: 4
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Tech Startup Inc.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    content: 'John delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are exceptional.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Innovation Labs',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    content: 'Working with John was a pleasure. He brought valuable insights to our project and implemented complex features with ease.',
    rating: 5
  }
];

export const codeSnippets: CodeSnippet[] = [
  {
    id: '1',
    title: 'React Custom Hook - useLocalStorage',
    description: 'A custom hook for managing localStorage with React state',
    language: 'typescript',
    code: `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get stored value
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : initialValue;

  // State to store our value
  const [value, setValue] = useState<T>(initial);

  // Update localStorage when state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}`,
    tags: ['React', 'TypeScript', 'Custom Hooks']
  },
  {
    id: '2',
    title: 'Express API Route Handler',
    description: 'Example of a RESTful API endpoint with Express',
    language: 'typescript',
    code: `import express from 'express';
import { authenticate } from '../middleware/auth';

const router = express.Router();

router.get('/api/items', authenticate, async (req, res) => {
  try {
    const items = await Item.find({ user: req.user.id });
    res.json(items);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

export default router;`,
    tags: ['Node.js', 'Express', 'API']
  }
];

export const sidebarItems = [
  { icon: 'Home', label: 'Home', path: '/' },
  { icon: 'User', label: 'Profile', path: '/profile' },
  { icon: 'Briefcase', label: 'Projects', path: '/projects' },
  { icon: 'Code', label: 'Skills', path: '/skills' },
  { icon: 'FileText', label: 'Resume', path: '/resume' },
  { icon: 'Mail', label: 'Contact', path: '/contact' },
  { icon: 'ShoppingCart', label: 'Services', path: '/services' },
  { icon: 'Star', label: 'Testimonials', path: '/testimonials' },
  { icon: 'BookOpen', label: 'Blog', path: '/blog' }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Modern Web Architecture',
    content: 'In this comprehensive guide, we will explore the principles of modern web architecture and how to build scalable applications...',
    date: 'March 15, 2024',
    readTime: 8,
    tags: ['Web Development', 'Architecture', 'Best Practices'],
    url: '#',
    likes: 245,
    comments: 56
  },
  {
    id: '2',
    title: 'Mastering TypeScript: Advanced Patterns',
    content: 'Deep dive into advanced TypeScript patterns and techniques that will help you write more maintainable code...',
    date: 'March 10, 2024',
    readTime: 12,
    tags: ['TypeScript', 'Programming', 'Advanced'],
    url: '#',
    likes: 189,
    comments: 34
  }
];

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'React Performance Optimization Guide',
    description: 'Learn how to optimize your React applications for better performance. Includes code examples and best practices.',
    date: 'March 12, 2024',
    readTime: 15,
    tags: ['React', 'Performance', 'Tutorial'],
    url: '#',
    downloadUrl: '#',
    downloads: 1234,
    difficulty: 'Intermediate'
  },
  {
    id: '2',
    title: 'Building Scalable APIs with Node.js',
    description: 'Step-by-step guide to building production-ready APIs using Node.js, Express, and TypeScript.',
    date: 'March 8, 2024',
    readTime: 20,
    tags: ['Node.js', 'API', 'Backend'],
    url: '#',
    downloadUrl: '#',
    downloads: 892,
    difficulty: 'Advanced'
  }
];

export const freelanceProjects: FreelanceProject[] = [
  {
    id: '1',
    title: 'E-commerce Website Development',
    description: 'Looking for an experienced developer to build a modern e-commerce website using React and Node.js. The website should include features like product management, shopping cart, payment integration, and admin dashboard.',
    budget: {
      min: 3000,
      max: 5000,
      type: 'fixed'
    },
    duration: '2-3 months',
    skills: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    category: 'Web Development',
    status: 'open',
    proposals: 12,
    postedDate: '2024-03-15',
    deadline: '2024-03-22',
    clientInfo: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      rating: 4.8,
      totalProjects: 15,
      location: 'United States'
    }
  },
  {
    id: '2',
    title: 'Mobile App Development - Fitness Tracking',
    description: 'Need a React Native developer to create a fitness tracking mobile app. The app should include features like workout tracking, progress monitoring, social sharing, and integration with fitness devices.',
    budget: {
      min: 50,
      max: 75,
      type: 'hourly'
    },
    duration: '3-4 months',
    skills: ['React Native', 'Firebase', 'Redux', 'API Integration'],
    category: 'Mobile Development',
    status: 'open',
    proposals: 8,
    postedDate: '2024-03-14',
    deadline: '2024-03-21',
    clientInfo: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 4.9,
      totalProjects: 23,
      location: 'Canada'
    }
  },
  {
    id: '3',
    title: 'AI-Powered Content Management System',
    description: 'Seeking a full-stack developer to build a CMS with AI capabilities for content optimization and automation. The system should integrate with OpenAI API and include features for content scheduling and analytics.',
    budget: {
      min: 8000,
      max: 12000,
      type: 'fixed'
    },
    duration: '4-5 months',
    skills: ['Python', 'Django', 'React', 'OpenAI API', 'PostgreSQL'],
    category: 'AI Development',
    status: 'open',
    proposals: 15,
    postedDate: '2024-03-13',
    deadline: '2024-03-20',
    clientInfo: {
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 4.7,
      totalProjects: 8,
      location: 'United Kingdom'
    }
  }
];

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Complete E-commerce Dashboard',
    description: 'Implement remaining features for the admin dashboard',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2024-03-20',
    project: 'E-commerce Website',
    tags: ['React', 'TypeScript', 'Dashboard']
  },
  {
    id: '2',
    title: 'Client Meeting - Project Review',
    description: 'Review project progress and discuss next steps',
    status: 'todo',
    priority: 'medium',
    dueDate: '2024-03-18',
    project: 'Fitness App',
    tags: ['Meeting', 'Client']
  }
];

export const documents: Document[] = [
  {
    id: '1',
    title: 'E-commerce Project Contract',
    type: 'contract',
    createdAt: '2024-03-10',
    lastModified: '2024-03-10',
    size: '2.5 MB',
    url: '#'
  },
  {
    id: '2',
    title: 'Mobile App Development Proposal',
    type: 'proposal',
    createdAt: '2024-03-12',
    lastModified: '2024-03-15',
    size: '1.8 MB',
    url: '#'
  }
];

export const transactions: FinancialTransaction[] = [
  {
    id: '1',
    type: 'income',
    amount: 3500,
    description: 'E-commerce Project Payment',
    category: 'Project Payment',
    date: '2024-03-15',
    status: 'completed',
    project: 'E-commerce Website'
  },
  {
    id: '2',
    type: 'expense',
    amount: 99,
    description: 'AWS Monthly Subscription',
    category: 'Hosting',
    date: '2024-03-01',
    status: 'completed'
  }
];

export const messages: Message[] = [
  {
    id: '1',
    sender: {
      id: '2',
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    content: 'Hi! I reviewed the latest updates for the e-commerce dashboard. Everything looks great! When can we schedule a call to discuss the next phase?',
    timestamp: '2024-03-15T14:30:00Z',
    read: false
  },
  {
    id: '2',
    sender: {
      id: '3',
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    content: 'Just sent over the updated requirements for the mobile app. Please take a look when you have a chance.',
    timestamp: '2024-03-15T10:15:00Z',
    read: true,
    attachments: [
      {
        name: 'requirements.pdf',
        url: '#',
        type: 'application/pdf'
      }
    ]
  }
];