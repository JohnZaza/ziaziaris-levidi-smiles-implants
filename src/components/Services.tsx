import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smile, Zap, Shield, Heart, Scan, Crown, FileText, Syringe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Prosthetic Dentistry",
      description: "Tooth and implant-supported restorations",
      details: "Comprehensive prosthetic solutions including dental implants, crowns, bridges, and full-arch restorations. Using the Aoralscan Elite with photogrammetry technology, we achieve exceptional accuracy for implant-supported restorations. Our digital workflow enables same-day bridge fabrication - from broken tooth to final restoration in just 4-5 hours.",
      featured: true
    },
    {
      icon: <Smile className="h-8 w-8 text-primary" />,
      title: "Restorative Dentistry",
      description: "Premium composite resin fillings with dental dam isolation",
      details: "All composite resin restorations (white fillings) are performed with dental dam isolation - essential for longevity and optimal bonding. We specialize in composite and porcelain veneers, inlays/onlays, and conservative treatments for worn dentition. Every procedure is performed with magnification loupes for enhanced precision.",
      featured: true
    },
    {
      icon: <Syringe className="h-8 w-8 text-primary" />,
      title: "Endodontic Therapy",
      description: "Modern root canal treatments",
      details: "Root canal treatments performed using rotary files for precision and efficiency. Advanced techniques ensure comfortable treatment and optimal outcomes for saving natural teeth.",
      featured: false
    },
    {
      icon: <Crown className="h-8 w-8 text-primary" />,
      title: "Crown Lengthening",
      description: "Surgical procedures with diathermy",
      details: "Crown lengthening surgery performed using diathermy for precise tissue management. We collaborate with a military oral and maxillofacial surgeon for complex surgical cases.",
      featured: false
    },
    {
      icon: <Scan className="h-8 w-8 text-primary" />,
      title: "Digital Workflow",
      description: "Aoralscan Elite - The only true photogrammetry scanner",
      details: "Revolutionary intraoral scanner with built-in photogrammetry technology for full-arch implant scanning with exceptional accuracy. Unlike other systems where photogrammetry is an external add-on, the Aoralscan Elite has this technology fully integrated for seamless digital impressions.",
      featured: false
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Complete Practice Management",
      description: "Modern patient care infrastructure",
      details: "Fully equipped practice with dental assistant support, digital patient records, and automated recall notifications for follow-up appointments ensuring continuity of care.",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Specialized Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge prosthetic and restorative dentistry powered by digital technology
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
