import React from 'react';
import { Check, ExternalLink } from 'lucide-react';
import type { ServicePackage } from '../../types';

interface ServiceCardProps {
  service: ServicePackage;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={`fb-card p-6 ${service.popular ? 'ring-2 ring-fb-accent' : ''}`}>
      {service.popular && (
        <div className="absolute top-0 right-0 bg-fb-accent text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
      <p className="text-fb-text-secondary mb-4">{service.description}</p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold">${service.price}</span>
        <span className="text-fb-text-secondary">/project</span>
      </div>
      
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check size={20} className="text-fb-accent mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="space-y-2">
        <div className="flex items-center text-fb-text-secondary">
          <span className="flex-1">Delivery Time</span>
          <span>{service.deliveryTime}</span>
        </div>
        <div className="flex items-center text-fb-text-secondary">
          <span className="flex-1">Revisions</span>
          <span>{service.revisions}</span>
        </div>
      </div>
      
      <button className="w-full fb-button bg-fb-accent hover:bg-fb-accent-hover text-white mt-6 flex items-center justify-center">
        <span>Get Started</span>
        <ExternalLink size={18} className="ml-2" />
      </button>
    </div>
  );
};

export default ServiceCard;