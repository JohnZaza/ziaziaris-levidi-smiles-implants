
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smile, Zap, Shield, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Dental Implants",
      description: "Advanced implant solutions for missing teeth",
      details: "Our state-of-the-art dental implants provide a permanent solution for missing teeth. Using titanium implants that integrate with your jawbone, we restore both function and aesthetics. The procedure involves careful planning, precise placement, and a healing period that results in a natural-looking, durable tooth replacement that can last a lifetime with proper care.",
      featured: true
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Aponeurosis Treatment",
      description: "Specialized treatment for facial muscle and tissue conditions",
      details: "Aponeurosis treatment addresses conditions affecting the facial muscles and connective tissues around the oral cavity. This specialized procedure can improve both functional and aesthetic concerns, helping restore proper muscle function and facial symmetry. Our approach combines modern techniques with careful attention to preserving natural facial expressions and movements.",
      featured: true
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Dental Fillings",
      description: "High-quality restorations for damaged teeth",
      details: "We provide durable, aesthetic dental fillings using the latest materials. Our composite resin fillings match your natural tooth color and provide excellent durability while preserving as much of your natural tooth structure as possible.",
      featured: false
    },
    {
      icon: <Smile className="h-8 w-8 text-blue-600" />,
      title: "Comprehensive Oral Care",
      description: "Complete dental health solutions",
      details: "From routine cleanings to complex procedures, we provide comprehensive oral healthcare tailored to your individual needs. Our preventive approach helps maintain your oral health and catch potential issues early.",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced dental treatments with a focus on implants and aponeurosis procedures
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.filter(service => service.featured).map((service, index) => (
            <Card key={index} className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-lg text-blue-600 font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-center">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.filter(service => !service.featured).map((service, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-center">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
