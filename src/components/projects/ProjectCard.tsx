import React from 'react';
import { ExternalLink, Github, Play, BarChart } from 'lucide-react';
import type { ProjectPost } from '../../types';

interface ProjectCardProps {
  project: ProjectPost;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="fb-card overflow-hidden">
      {/* Project Image */}
      {project.images && project.images[0] && (
        <div className="relative h-48">
          <img
            src={project.images[0]}
            alt={project.projectTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-fb-card px-2 py-1 rounded-full text-xs font-medium">
            {project.status}
          </div>
        </div>
      )}
      
      {/* Project Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.projectTitle}</h3>
        <p className="text-fb-text-secondary mb-4">{project.projectDescription}</p>
        
        {/* Technology Usage Chart */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Technologies Used</h4>
          {project.technologies.map((tech) => (
            <div key={tech.name} className="mb-2">
              <div className="flex justify-between text-xs mb-1">
                <span>{tech.name}</span>
                <span>{tech.percentage}%</span>
              </div>
              <div className="h-2 bg-fb-button rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${tech.percentage}%`,
                    backgroundColor: tech.color
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Key Features</h4>
          <ul className="list-disc list-inside text-fb-text-secondary text-sm">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="fb-button flex items-center text-fb-text-primary"
            >
              <ExternalLink size={16} className="mr-2" />
              <span>Visit Site</span>
            </a>
          )}
          
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="fb-button flex items-center text-fb-text-primary"
            >
              <Play size={16} className="mr-2" />
              <span>Live Demo</span>
            </a>
          )}
          
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="fb-button flex items-center text-fb-text-primary"
            >
              <Github size={16} className="mr-2" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;