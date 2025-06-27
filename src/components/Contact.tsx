
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Mail, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Our Practice</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards optimal oral health
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Ready to help with your dental needs</p>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Phone className="mr-2 h-4 w-4" />
                Contact for Phone Number
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2 font-medium">Dr. Dimitris Ziaziaris</p>
              <p className="text-gray-600 mb-4">Levidi, Arcadia<br />Greece</p>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Book your appointment online or by phone</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium text-gray-900">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <Clock className="h-12 w-12 text-blue-600 mx-auto md:ml-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Emergency appointments available outside regular hours
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-white">
                  Emergency Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
