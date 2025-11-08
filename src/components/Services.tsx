import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smile, Zap, Crown, FileText, Syringe, Scan } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t.services.prosthetic.title,
      description: t.services.prosthetic.desc,
      details: t.services.prosthetic.details,
      featured: true
    },
    {
      icon: <Smile className="h-8 w-8 text-primary" />,
      title: t.services.restorative.title,
      description: t.services.restorative.desc,
      details: t.services.restorative.details,
      featured: true
    },
    {
      icon: <Syringe className="h-8 w-8 text-primary" />,
      title: t.services.endodontic.title,
      description: t.services.endodontic.desc,
      details: t.services.endodontic.details,
      featured: false
    },
    {
      icon: <Crown className="h-8 w-8 text-primary" />,
      title: t.services.crownLengthening.title,
      description: t.services.crownLengthening.desc,
      details: t.services.crownLengthening.details,
      featured: false
    },
    {
      icon: <Scan className="h-8 w-8 text-primary" />,
      title: t.services.digitalWorkflow.title,
      description: t.services.digitalWorkflow.desc,
      details: t.services.digitalWorkflow.details,
      featured: false
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: t.services.practice.title,
      description: t.services.practice.desc,
      details: t.services.practice.details,
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t.services.heading}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.services.subheading}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.filter(service => service.featured).map((service, index) => (
            <Card key={index} className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group bg-card">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-lg text-primary font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.filter(service => !service.featured).map((service, index) => (
            <Card key={index} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group bg-card border-border">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
