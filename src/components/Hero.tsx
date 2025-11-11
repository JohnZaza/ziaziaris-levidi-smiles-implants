// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Phone, MapPin, Calendar, Sparkles } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';
// import AppointmentDialog from './AppointmentDialog';
// import logo from '@/assets/logo.png';
// import dentalBg from '@/assets/dental-bg.jpg'; // 🔹 πρόσθεσε μια αμυδρή εικόνα οδοντιατρείου

// const Hero = () => {
//   const { t } = useLanguage();
//   const [appointmentOpen, setAppointmentOpen] = useState(false);

//   return (
//     <>
//       <AppointmentDialog open={appointmentOpen} onOpenChange={setAppointmentOpen} />

//       <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 min-h-screen flex items-center pt-28 sm:pt-36 pb-12 overflow-hidden">
//         {/* 🔹 Αμυδρή φωτογραφία φόντου */}
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm"
//           style={{
//             backgroundImage: `url(${dentalBg})`,
//             backgroundAttachment: 'fixed',
//           }}
//         ></div>

//         {/* Ελαφρύ gradient overlay για καλύτερη αντίθεση */}
//         <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90"></div>

//         {/* Φωτεινά glow στοιχεία */}
//         <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>

//         {/* Περιεχόμενο */}
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

//             {/* Λογότυπο με subtle φωτεινό περίγραμμα */}
//             <div className="flex items-center justify-center mb-8">
//               <div className="relative group">
//                 {/* Gradient aura πίσω από το λογότυπο */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

//                 {/* Logo */}
//                 <img
//                   src={logo}
//                   alt="Dr. Dimitris Ziaziaris Logo"
//                   className="relative h-48 w-48 md:h-64 md:w-64 drop-shadow-[0_0_25px_rgba(0,0,0,0.3)] 
//                             transform transition-all duration-500 ease-out
//                             group-hover:scale-105"
//                 />
//               </div>
//             </div>

//             {/* Κείμενα */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight drop-shadow-lg">
//               {t.hero.title}
//             </h1>

//             <p className="text-lg md:text-xl lg:text-2xl text-primary font-semibold mb-4 flex items-center justify-center gap-2 drop-shadow">
//               <Sparkles className="h-5 w-5 md:h-6 md:w-6" />
//               {t.hero.subtitle}
//             </p>

//             <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed drop-shadow-sm">
//               {t.hero.description}{' '}
//               <span className="font-semibold text-primary">{t.hero.scanner}</span>.
//             </p>

//             {/* Κουμπιά */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
//               <Button
//                 size="lg"
//                 onClick={() => setAppointmentOpen(true)}
//                 className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg group shadow-lg"
//               >
//                 <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                 {t.hero.bookAppt}
//               </Button>

//               <Button
//                 variant="outline"
//                 size="lg"
//                 onClick={() => (window.location.href = 'tel:+302796022303')}
//                 className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg shadow-md"
//               >
//                 <Phone className="mr-2 h-5 w-5" />
//                 {t.nav.callNow}
//               </Button>
//             </div>

//             {/* Τοποθεσία */}
//             <div className="flex items-center text-muted-foreground justify-center">
//               <MapPin className="h-5 w-5 mr-2 text-primary" />
//               <span className="text-lg">{t.hero.location}</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AppointmentDialog from './AppointmentDialog';
import logo from '@/assets/logo.png';
import dentalBg from '@/assets/dental-bg.jpg'; // 🔹 αμυδρή εικόνα φόντου

const Hero = () => {
  const { t, language } = useLanguage();
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <>
      <AppointmentDialog open={appointmentOpen} onOpenChange={setAppointmentOpen} />

      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 min-h-screen flex items-center pt-28 sm:pt-36 pb-12 overflow-hidden">
        {/* 🔹 Αμυδρή φωτογραφία φόντου */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm"
          style={{
            backgroundImage: `url(${dentalBg})`,
            backgroundAttachment: 'fixed',
          }}
        ></div>

        {/* Ελαφρύ gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90"></div>

        {/* Glow στοιχεία */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Περιεχόμενο */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

            {/* Λογότυπο */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img
                  src={logo}
                  alt="Dr. Dimitris Ziaziaris Logo"
                  className="relative h-48 w-48 md:h-64 md:w-64 drop-shadow-[0_0_25px_rgba(0,0,0,0.3)] 
                            transform transition-all duration-500 ease-out
                            group-hover:scale-105"
                />
              </div>
            </div>

            {/* Τίτλος */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 leading-tight drop-shadow-lg animate-fadeIn">
              {t.hero.title}
            </h1>

            {/* 🔹 Νέα γραμμή: Οδοντίατρος */}
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6 tracking-wide animate-fadeIn delay-200">
              {language === 'el' ? 'Οδοντίατρος' : 'Dentist'}
            </p>

            <p className="text-lg md:text-xl lg:text-2xl text-primary font-semibold mb-4 flex items-center justify-center gap-2 drop-shadow">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6" />
              {t.hero.subtitle}
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed drop-shadow-sm">
              {t.hero.description}{' '}
              <span className="font-semibold text-primary">{t.hero.scanner}</span>.
            </p>

            {/* Κουμπιά */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <Button
                size="lg"
                onClick={() => setAppointmentOpen(true)}
                className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg group shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t.hero.bookAppt}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = 'tel:+302796022303')}
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg shadow-md"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.nav.callNow}
              </Button>
            </div>

            {/* Τοποθεσία */}
            <div className="flex items-center text-muted-foreground justify-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span className="text-lg">{t.hero.location}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
