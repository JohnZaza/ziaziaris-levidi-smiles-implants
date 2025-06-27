
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Dr. Dimitris Ziaziaris - Dental Practice. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Levidi, Arcadia - Professional Dental Care
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
