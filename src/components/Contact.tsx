// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Phone, MapPin, Clock, Calendar } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';
// import AppointmentDialog from './AppointmentDialog';

// const Contact = () => {
//   const { t, language } = useLanguage();
//   const [appointmentOpen, setAppointmentOpen] = useState(false);

//   return (
//     <>
//       <AppointmentDialog open={appointmentOpen} onOpenChange={setAppointmentOpen} />
//       <section className="py-20 bg-background" id="contact">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-foreground mb-4">{t.contact.heading}</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               {t.contact.subheading}
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8 mb-12">
//             <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border">
//               <CardHeader>
//                 <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
//                   <Phone className="h-8 w-8 text-primary" />
//                 </div>
//                 <CardTitle className="text-xl text-foreground">{t.contact.callTitle}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground mb-4">{t.contact.callDesc}</p>
//                 <Button
//                   size="lg"
//                   onClick={() => window.location.href = 'tel:+302796022303'}
//                   className="bg-primary hover:bg-primary/90"
//                 >
//                   <Phone className="mr-2 h-5 w-5" />
//                   {t.nav.callNow}
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border">
//               <CardHeader>
//                 <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
//                   <MapPin className="h-8 w-8 text-primary" />
//                 </div>
//                 <CardTitle className="text-xl text-foreground">{t.contact.visitTitle}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground mb-2 font-medium">{t.hero.title}</p>
//                 <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t.contact.visitLocation }}></p>
//                 <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
//                   <MapPin className="mr-2 h-4 w-4" />
//                   {t.contact.visitButton}
//                 </Button>
//               </CardContent>
//             </Card> */}

//             <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border">
//               <CardHeader>
//                 <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
//                   <MapPin className="h-8 w-8 text-primary" />
//                 </div>
//                 <CardTitle className="text-xl text-foreground">{t.contact.visitTitle}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground mb-2 font-medium">{t.hero.title}</p>
//                 <p
//                   className="text-muted-foreground mb-4"
//                   dangerouslySetInnerHTML={{ __html: t.contact.visitLocation }}
//                 ></p>
//                 <Button
//                   variant="outline"
//                   className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
//                   onClick={() => {
//                     window.open(
//                       'https://www.google.com/maps/dir/?api=1&destination=Οδοντιατρείο+Ζιάζιαρης+Π.+Δημήτριος,+Λεβίδι+Αρκαδίας',
//                       '_blank'
//                     );
//                   }}
//                 >
//                   <MapPin className="mr-2 h-4 w-4" />
//                   {t.contact.visitButton}
//                 </Button>
//               </CardContent>
//             </Card>


//             <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border">
//               <CardHeader>
//                 <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
//                   <Calendar className="h-8 w-8 text-primary" />
//                 </div>
//                 <CardTitle className="text-xl text-foreground">{t.contact.scheduleTitle}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground mb-4">{t.contact.scheduleDesc}</p>
//                 <Button
//                   onClick={() => setAppointmentOpen(true)}
//                   className="bg-primary hover:bg-primary/90"
//                 >
//                   <Calendar className="mr-2 h-4 w-4" />
//                   {t.contact.scheduleButton}
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>

//           <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-md">
//             <CardContent className="p-8">
//               <div className="grid md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <h3 className="text-2xl font-bold text-foreground mb-6">
//                     {t.contact.hoursTitle}
//                   </h3>

//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center border-b border-border/50 pb-2">
//                       <span className="text-muted-foreground font-medium">
//                         {language === 'el' ? 'Δευτέρα' : 'Monday'}
//                       </span>
//                       <span className="font-semibold text-foreground">12:00 - 20:30</span>
//                     </div>

//                     <div className="flex justify-between items-center border-b border-border/50 pb-2">
//                       <span className="text-muted-foreground font-medium">
//                         {language === 'el' ? 'Τρίτη' : 'Tuesday'}
//                       </span>
//                       <span className="font-semibold text-foreground">08:30 - 17:00</span>
//                     </div>

//                     <div className="flex justify-between items-center border-b border-border/50 pb-2">
//                       <span className="text-muted-foreground font-medium">
//                         {language === 'el' ? 'Τετάρτη' : 'Wednesday'}
//                       </span>
//                       <span className="font-semibold text-foreground">08:30 - 17:00</span>
//                     </div>

//                     <div className="flex justify-between items-center border-b border-border/50 pb-2">
//                       <span className="text-muted-foreground font-medium">
//                         {language === 'el' ? 'Πέμπτη' : 'Thursday'}
//                       </span>
//                       <span className="font-semibold text-foreground">12:00 - 20:30</span>
//                     </div>

//                     <div className="flex justify-between items-center border-b border-border/50 pb-2">
//                       <span className="text-muted-foreground font-medium">
//                         {language === 'el' ? 'Παρασκευή' : 'Friday'}
//                       </span>
//                       <span className="font-semibold text-foreground">08:30 - 17:00</span>
//                     </div>

//                     <div className="flex justify-between items-center border-b border-border/50 pb-2">
//                       <span className="text-muted-foreground font-medium">
//                         {language === 'el' ? 'Σάββατο' : 'Saturday'}
//                       </span>
//                       <span className="font-semibold text-foreground">
//                         {language === 'el' ? 'Κλειστά' : 'Closed'}
//                       </span>
//                     </div>

//                     <div className="flex justify-between items-center">
//                       <span className="text-muted-foreground font-medium">
//                         {language === 'el' ? 'Κυριακή' : 'Sunday'}
//                       </span>
//                       <span className="font-semibold text-foreground">
//                         {language === 'el' ? 'Κλειστά' : 'Closed'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AppointmentDialog from './AppointmentDialog';

const Contact = () => {
  const { t, language } = useLanguage();
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

          {/* --- Top contact cards --- */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* 📞 Call */}
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
                  onClick={() => (window.location.href = 'tel:+302796022303')}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t.nav.callNow}
                </Button>
              </CardContent>
            </Card>

            {/* 📍 Location */}
            <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{t.contact.visitTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2 font-medium">{t.hero.title}</p>
                <p
                  className="text-muted-foreground mb-4"
                  dangerouslySetInnerHTML={{ __html: t.contact.visitLocation }}
                ></p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => {
                    window.open(
                      'https://www.google.com/maps/dir/?api=1&destination=Οδοντιατρείο+Ζιάζιαρης+Π.+Δημήτριος,+Λεβίδι+Αρκαδίας',
                      '_blank'
                    );
                  }}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  {t.contact.visitButton}
                </Button>
              </CardContent>
            </Card>

            {/* 📅 Schedule */}
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

          {/* --- Hours Section --- */}
          <div className="flex justify-center">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-md w-full md:w-3/4 lg:w-2/3">
              <CardContent className="p-10 flex flex-col items-center text-center">
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="h-8 w-8 text-primary animate-pulse" />
                  <h3 className="text-2xl font-bold text-foreground">
                    {t.contact.hoursTitle}
                  </h3>
                </div>

                <div className="space-y-3 w-full max-w-md">
                  {[
                    { day: language === 'el' ? 'Δευτέρα' : 'Monday', hours: '12:00 - 20:30' },
                    { day: language === 'el' ? 'Τρίτη' : 'Tuesday', hours: '08:30 - 17:00' },
                    { day: language === 'el' ? 'Τετάρτη' : 'Wednesday', hours: '08:30 - 17:00' },
                    { day: language === 'el' ? 'Πέμπτη' : 'Thursday', hours: '12:00 - 20:30' },
                    { day: language === 'el' ? 'Παρασκευή' : 'Friday', hours: '08:30 - 17:00' },
                    { day: language === 'el' ? 'Σάββατο' : 'Saturday', hours: language === 'el' ? 'Κλειστά' : 'Closed' },
                    { day: language === 'el' ? 'Κυριακή' : 'Sunday', hours: language === 'el' ? 'Κλειστά' : 'Closed' },
                  ].map(({ day, hours }) => (
                    <div
                      key={day}
                      className="flex justify-between border-b border-border/40 pb-2 text-lg"
                    >
                      <span className="text-muted-foreground font-medium">{day}</span>
                      <span className="font-semibold text-foreground">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
