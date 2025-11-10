import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AppointmentDialog from './AppointmentDialog';

const Contact = () => {
  const { t } = useLanguage();
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  
  return (
    <>
    <AppointmentDialog open={appointmentOpen} onOpenChange={setAppointmentOpen} />
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t.contact.heading}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{t.contact.callTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{t.contact.callDesc}</p>
              <Button 
                size="lg" 
                onClick={() => window.location.href = 'tel:+302796022303'}
                className="bg-primary hover:bg-primary/90"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.nav.callNow}
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{t.contact.visitTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2 font-medium">{t.hero.title}</p>
              <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t.contact.visitLocation }}></p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                {t.contact.visitButton}
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{t.contact.scheduleTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{t.contact.scheduleDesc}</p>
              <Button 
                onClick={() => setAppointmentOpen(true)}
                className="bg-primary hover:bg-primary/90"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {t.contact.scheduleButton}
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{t.contact.hoursTitle}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.contact.monFri}</span>
                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.contact.saturday}</span>
                    <span className="font-medium text-foreground">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.contact.sunday}</span>
                    <span className="font-medium text-foreground">{t.contact.closed}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
    </>
  );
};

export default Contact;
