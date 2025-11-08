import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Calendar, Sparkles } from 'lucide-react';
import logo from '@/assets/logo.png';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Dr. Dimitris Ziaziaris
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              Advanced Digital Dentistry in Levidi, Arcadia
            </p>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Specializing in prosthetic and restorative dentistry with cutting-edge digital workflows. 
              Same-day bridge fabrication using the revolutionary <span className="font-semibold text-primary">Aoralscan Elite</span> intraoral scanner.
            </p>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 mb-8">
              <p className="text-sm text-muted-foreground">
                ✨ Full-arch implant scanning with photogrammetry technology<br/>
                ⚡ Same-day restorations (4-5 hours)<br/>
                🔬 Dental dam isolation for all composite restorations
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg group">
                <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span className="text-lg">Levidi, Arcadia - Excellence in Digital Dentistry</span>
            </div>
          </div>
          
          {/* Hero Logo with Effects */}
          <div className="flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src={logo} 
                alt="Dr. Dimitris Ziaziaris Logo" 
                className="relative h-64 w-64 md:h-80 md:w-80 drop-shadow-2xl 
                          transform transition-all duration-700 ease-out
                          group-hover:scale-110 group-hover:rotate-6
                          group-hover:drop-shadow-[0_0_60px_rgba(23,186,220,0.8)]
                          animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
