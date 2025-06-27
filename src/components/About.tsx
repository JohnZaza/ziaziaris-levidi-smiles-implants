
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: "Expert Care",
      description: "Specialized training in advanced dental procedures"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Patient-Centered",
      description: "Personalized treatment plans for every patient"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Modern Technology",
      description: "State-of-the-art equipment and techniques"
    },
    {
      icon: <Heart className="h-6 w-6 text-blue-600" />,
      title: "Compassionate Care",
      description: "Comfortable, anxiety-free dental experience"
    }
  ];

  return (
    <section className="py-20 bg-blue-50" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Dr. Dimitris Ziaziaris
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to our dental practice in the heart of Levidi, Arcadia. Dr. Dimitris Ziaziaris 
              brings years of experience and specialized expertise in advanced dental procedures, 
              with particular focus on dental implants and aponeurosis treatments.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our practice combines modern dental technology with a warm, patient-centered approach. 
              We believe that every patient deserves the highest quality of care, delivered with 
              compassion and understanding of individual needs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide exceptional dental care that improves both oral health and quality of life, 
                    with special expertise in implant dentistry and aponeurosis treatments that restore 
                    function and confidence.
                  </p>
                </div>
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Serving Levidi & Surrounding Areas</h4>
                  <p className="text-sm text-gray-600">
                    Proud to serve the Arcadia region with comprehensive dental care
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
