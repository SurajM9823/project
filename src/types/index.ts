export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  coverPhoto: string;
  role: string;
  location: string;
  bio: string;
  friends: number;
  followers: number;
  hourlyRate: number;
  availability: string;
  languages: Language[];
  technicalSkills: Skill[];
  softSkills: Skill[];
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
}

export interface Language {
  name: string;
  proficiency: number;
  flag: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  link: string;
}

export interface Story {
  id: string;
  user: UserProfile;
  image: string;
  title: string;
}

export interface Post {
  id: string;
  user: UserProfile;
  content: string;
  images?: string[];
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

export interface ProjectPost extends Post {
  projectTitle: string;
  projectDescription: string;
  projectLink?: string;
  demoLink?: string;
  githubLink?: string;
  technologies: TechnologyUsage[];
  features: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface TechnologyUsage {
  name: string;
  percentage: number;
  color: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  popular?: boolean;
  deliveryTime: string;
  revisions: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
  url: string;
  likes: number;
  comments: number;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: number;
  tags: string[];
  url: string;
  downloadUrl: string;
  downloads: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface FreelanceProject {
  id: string;
  title: string;
  description: string;
  budget: {
    min: number;
    max: number;
    type: 'fixed' | 'hourly';
  };
  duration: string;
  skills: string[];
  category: string;
  status: 'open' | 'in-progress' | 'completed';
  proposals: number;
  postedDate: string;
  deadline: string;
  clientInfo: {
    name: string;
    avatar: string;
    rating: number;
    totalProjects: number;
    location: string;
  };
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  project?: string;
  tags: string[];
}

export interface Document {
  id: string;
  title: string;
  type: 'contract' | 'proposal' | 'invoice' | 'other';
  createdAt: string;
  lastModified: string;
  size: string;
  url: string;
}

export interface FinancialTransaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: string;
  status: 'pending' | 'completed';
  project?: string;
}

export interface Message {
  id: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: {
    name: string;
    url: string;
    type: string;
  }[];
}