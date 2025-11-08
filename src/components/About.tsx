import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Microscope, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: t.about.feature1Title,
      description: t.about.feature1Desc
    },
    {
      icon: <Microscope className="h-6 w-6 text-primary" />,
      title: t.about.feature2Title,
      description: t.about.feature2Desc
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: t.about.feature3Title,
      description: t.about.feature3Desc
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: t.about.feature4Title,
      description: t.about.feature4Desc
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              {t.about.heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.intro1}
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.intro2}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.about.intro3}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Card className="p-8 bg-card shadow-lg border-border">
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t.about.missionTitle}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.about.mission}
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground mb-2">{t.about.facilityTitle}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t.about.facilityDesc}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
