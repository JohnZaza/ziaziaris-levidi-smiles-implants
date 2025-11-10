import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AppointmentDialog from './AppointmentDialog';
import logo from '@/assets/logo.png';

const Hero = () => {
  const { t } = useLanguage();
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  
  return (
    <>
    <AppointmentDialog open={appointmentOpen} onOpenChange={setAppointmentOpen} />
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Logo - Mobile First */}
          <div className="flex items-center justify-center lg:hidden order-first">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img 
                src={logo} 
                alt="Dr. Dimitris Ziaziaris Logo" 
                className="relative h-48 w-48 drop-shadow-2xl 
                          transform transition-all duration-500 ease-out
                          group-hover:scale-105
                          group-hover:drop-shadow-[0_0_30px_rgba(23,186,220,0.6)]"
              />
            </div>
          </div>

          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary font-semibold mb-4 flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6" />
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              {t.hero.description} <span className="font-semibold text-primary">{t.hero.scanner}</span>.
            </p>
            
            {/* Elegant Feature Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="text-sm font-medium text-foreground mb-1">{t.hero.featureTitle1}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{t.hero.feature1}</div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm border border-secondary/20 rounded-lg p-4 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
                <div className="text-sm font-medium text-foreground mb-1">{t.hero.featureTitle2}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{t.hero.feature2}</div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="text-sm font-medium text-foreground mb-1">{t.hero.featureTitle3}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{t.hero.feature3}</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => setAppointmentOpen(true)}
                className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg group"
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t.hero.bookAppt}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.location.href = 'tel:+302796022303'}
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.nav.callNow}
              </Button>
            </div>
            <div className="flex items-center text-muted-foreground justify-center lg:justify-start">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span className="text-lg">{t.hero.location}</span>
            </div>
          </div>
          
          {/* Hero Logo - Desktop Only */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img 
                src={logo} 
                alt="Dr. Dimitris Ziaziaris Logo" 
                className="relative h-64 w-64 md:h-80 md:w-80 drop-shadow-2xl 
                          transform transition-all duration-500 ease-out
                          group-hover:scale-105
                          group-hover:drop-shadow-[0_0_30px_rgba(23,186,220,0.6)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
