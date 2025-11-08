import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Microscope, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Digital Excellence",
      description: "Aoralscan Elite with photogrammetry technology"
    },
    {
      icon: <Microscope className="h-6 w-6 text-primary" />,
      title: "Precision Work",
      description: "Magnification loupes for enhanced accuracy"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Professional Team",
      description: "Dental assistant and military surgeon collaboration"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Patient-Centered",
      description: "Digital records and automated recall system"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Dr. Dimitris Ziaziaris
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Welcome to our advanced digital dental practice in Levidi, Arcadia. Dr. Dimitris Ziaziaris 
              specializes in prosthetic dentistry (both tooth and implant-supported restorations) and 
              restorative dentistry with a focus on precision and longevity.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We utilize cutting-edge technology including the <span className="font-semibold text-primary">Aoralscan Elite</span> - 
              the only intraoral scanner with fully integrated photogrammetry for exceptional accuracy in implant cases. 
              Our same-day digital workflow can deliver a complete bridge in just 4-5 hours.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              All composite restorations are performed with dental dam isolation for optimal results, 
              and we work with magnification loupes for enhanced precision in every procedure. 
              For complex cases, we collaborate with a military oral and maxillofacial surgeon.
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
                  <h3 className="text-2xl font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide exceptional prosthetic and restorative dentistry using the most advanced 
                    digital technologies, ensuring precision, comfort, and lasting results for every patient.
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground mb-2">State-of-the-Art Facility</h4>
                  <p className="text-sm text-muted-foreground">
                    Digital patient records • Automated recall system • Same-day restorations
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
