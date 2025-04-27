import React from 'react';
import type { Language } from '../../types';

interface LanguageCardProps {
  languages: Language[];
}

const LanguageCard: React.FC<LanguageCardProps> = ({ languages }) => {
  return (
    <div className="fb-card p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Languages</h2>
      
      <div className="space-y-4">
        {languages.map((language) => (
          <div key={language.name} className="flex items-center">
            <span className="text-2xl mr-3">{language.flag}</span>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{language.name}</span>
                <span>{language.proficiency}%</span>
              </div>
              <div className="h-2 bg-fb-button rounded-full overflow-hidden">
                <div 
                  className="h-full bg-fb-accent rounded-full"
                  style={{ width: `${language.proficiency}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageCard;