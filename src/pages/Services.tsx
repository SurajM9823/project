import React from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileNavigation from '../components/layout/MobileNavigation';
import ServiceCard from '../components/services/ServiceCard';
import { servicePackages } from '../utils/mockData';

const Services: React.FC = () => {
  return (
    <div className="bg-fb-bg min-h-screen text-fb-text-primary">
      <Navbar />
      
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Services & Packages</h1>
              <p className="text-fb-text-secondary">
                Choose the perfect package for your project needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicePackages.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </main>
      </div>
      
      <MobileNavigation />
    </div>
  );
};

export default Services;