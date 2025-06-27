
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Dr. Dimitris Ziaziaris
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
            Advanced Dental Care in Levidi, Arcadia
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Specializing in dental implants, aponeurosis treatments, and comprehensive oral care. 
            Your smile is our priority with state-of-the-art treatments and personalized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            <span className="text-lg">Levidi, Arcadia - Serving the local community with excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
