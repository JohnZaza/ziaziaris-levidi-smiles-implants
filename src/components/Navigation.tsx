
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 group cursor-pointer">
            <img 
              src={logo} 
              alt="Dr. Dimitris Ziaziaris" 
              className="h-10 w-10 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(23,186,220,0.5)]"
            />
            <span className="font-bold text-xl text-foreground hidden sm:inline-block">
              {t.hero.title}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              {t.nav.services}
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              {t.nav.contact}
            </a>
            <LanguageSwitcher />
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-4 w-4" />
              {t.nav.callNow}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
