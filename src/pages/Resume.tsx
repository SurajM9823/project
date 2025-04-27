import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileNavigation from '../components/layout/MobileNavigation';
import { Download, FileText, Eye, Share2, Briefcase, GraduationCap, Award, Languages, Code } from 'lucide-react';
import { currentUser } from '../utils/mockData';

const Resume: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('all');
  
  const resumeFormats = [
    { id: 'pdf', name: 'PDF Format', icon: FileText, downloads: 1234 },
    { id: 'doc', name: 'Word Format', icon: FileText, downloads: 856 },
    { id: 'txt', name: 'Plain Text', icon: FileText, downloads: 432 }
  ];

  const sections = [
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'certifications', name: 'Certifications', icon: Award },
    { id: 'skills', name: 'Skills', icon: Code },
    { id: 'languages', name: 'Languages', icon: Languages }
  ];

  return (
    <div className="bg-fb-bg min-h-screen text-fb-text-primary">
      <Navbar />
      
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-[800px] mx-auto">
            {/* Header Section */}
            <div className="fb-card p-6 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Professional Resume</h1>
                  <p className="text-fb-text-secondary">
                    Last updated: March 2024
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="fb-button flex items-center">
                    <Eye size={18} className="mr-2" />
                    Preview
                  </button>
                  <button className="fb-button flex items-center">
                    <Share2 size={18} className="mr-2" />
                    Share
                  </button>
                </div>
              </div>

              {/* Download Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resumeFormats.map((format) => (
                  <div
                    key={format.id}
                    className="fb-card bg-fb-hover p-4 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <format.icon size={24} />
                      <span className="text-sm text-fb-text-secondary">
                        {format.downloads} downloads
                      </span>
                    </div>
                    <h3 className="font-medium mb-2">{format.name}</h3>
                    <button className="fb-button bg-fb-accent hover:bg-fb-accent-hover text-white w-full flex items-center justify-center">
                      <Download size={18} className="mr-2" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Section Navigation */}
            <div className="fb-card mb-6">
              <div className="flex overflow-x-auto p-2">
                <button
                  className={`px-4 py-2 rounded-md whitespace-nowrap ${
                    activeSection === 'all'
                      ? 'bg-fb-accent text-white'
                      : 'text-fb-text-secondary hover:bg-fb-hover'
                  }`}
                  onClick={() => setActiveSection('all')}
                >
                  All Sections
                </button>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className={`flex items-center px-4 py-2 rounded-md ml-2 whitespace-nowrap ${
                      activeSection === section.id
                        ? 'bg-fb-accent text-white'
                        : 'text-fb-text-secondary hover:bg-fb-hover'
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <section.icon size={18} className="mr-2" />
                    {section.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="fb-card p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Briefcase className="mr-2" size={24} />
                Professional Experience
              </h2>
              {currentUser.experience.map((exp, index) => (
                <div
                  key={index}
                  className={`${
                    index !== currentUser.experience.length - 1 ? 'mb-6 pb-6 border-b border-fb-hover' : ''
                  }`}
                >
                  <div className="flex items-start">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="font-bold">{exp.role}</h3>
                      <p className="text-fb-text-secondary">{exp.company}</p>
                      <p className="text-sm text-fb-text-secondary">
                        {exp.startDate} - {exp.endDate}
                      </p>
                      <p className="mt-2">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-fb-button px-2 py-1 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="fb-card p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <GraduationCap className="mr-2" size={24} />
                Education
              </h2>
              {currentUser.education.map((edu, index) => (
                <div
                  key={index}
                  className={`${
                    index !== currentUser.education.length - 1 ? 'mb-6 pb-6 border-b border-fb-hover' : ''
                  }`}
                >
                  <div className="flex items-start">
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="w-12 h-12 rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="font-bold">{edu.degree}</h3>
                      <p className="text-fb-text-secondary">{edu.school}</p>
                      <p className="text-sm text-fb-text-secondary">
                        {edu.startDate} - {edu.endDate}
                      </p>
                      <p className="mt-2">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div className="fb-card p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Award className="mr-2" size={24} />
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentUser.certifications.map((cert, index) => (
                  <div key={index} className="fb-card bg-fb-hover p-4 rounded-lg">
                    <div className="flex items-start">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="w-12 h-12 rounded-lg mr-4"
                      />
                      <div>
                        <h3 className="font-bold">{cert.name}</h3>
                        <p className="text-fb-text-secondary">{cert.issuer}</p>
                        <p className="text-sm text-fb-text-secondary">
                          Issued {cert.date}
                        </p>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fb-accent hover:underline text-sm mt-2 inline-block"
                        >
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <MobileNavigation />
    </div>
  );
};

export default Resume;