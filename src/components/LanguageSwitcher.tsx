import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-border rounded-lg p-1">
      <Button
        size="sm"
        variant={language === 'el' ? 'default' : 'ghost'}
        onClick={() => setLanguage('el')}
        className="h-7 px-3 text-xs"
      >
        ΕΛ
      </Button>
      <Button
        size="sm"
        variant={language === 'en' ? 'default' : 'ghost'}
        onClick={() => setLanguage('en')}
        className="h-7 px-3 text-xs"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
