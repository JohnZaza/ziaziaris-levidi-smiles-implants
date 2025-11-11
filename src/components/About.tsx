// import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Award, Users, Microscope, Heart } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';

// const About = () => {
//   const { t } = useLanguage();

//   const features = [
//     {
//       icon: <Award className="h-6 w-6 text-primary" />,
//       title: t.about.feature1Title,
//       description: t.about.feature1Desc
//     },
//     {
//       icon: <Microscope className="h-6 w-6 text-primary" />,
//       title: t.about.feature2Title,
//       description: t.about.feature2Desc
//     },
//     {
//       icon: <Users className="h-6 w-6 text-primary" />,
//       title: t.about.feature3Title,
//       description: t.about.feature3Desc
//     },
//     {
//       icon: <Heart className="h-6 w-6 text-primary" />,
//       title: t.about.feature4Title,
//       description: t.about.feature4Desc
//     }
//   ];

//   return (
//     <section className="py-20 bg-muted/30" id="about">
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-4xl font-bold text-foreground mb-6">
//               {t.about.heading}
//             </h2>
//             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//               {t.about.intro1}
//             </p>
//             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//               {t.about.intro2}
//             </p>
//             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//               {t.about.intro3}
//             </p>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-start space-x-3">
//                   <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
//                     <p className="text-sm text-muted-foreground">{feature.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div>
//             <Card className="p-8 bg-card shadow-lg border-border">
//               <CardContent className="text-center">
//                 <div className="mb-6">
//                   <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
//                     <Heart className="h-12 w-12 text-primary" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-foreground mb-2">{t.about.missionTitle}</h3>
//                   <p className="text-muted-foreground leading-relaxed">
//                     {t.about.mission}
//                   </p>
//                 </div>
//                 <div className="border-t border-border pt-6">
//                   <h4 className="font-semibold text-foreground mb-2">{t.about.facilityTitle}</h4>
//                   <p className="text-sm text-muted-foreground">
//                     {t.about.facilityDesc}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Award, Users, Microscope, Heart } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';
// import dimi1 from '@/assets/dimi1.jpg';
// import dimipat1 from '@/assets/dimipat1.jpg';

// const About = () => {
//   const { t } = useLanguage();

//   const features = [
//     {
//       icon: <Award className="h-6 w-6 text-primary" />,
//       title: t.about.feature1Title,
//       description: t.about.feature1Desc
//     },
//     {
//       icon: <Microscope className="h-6 w-6 text-primary" />,
//       title: t.about.feature2Title,
//       description: t.about.feature2Desc
//     },
//     {
//       icon: <Users className="h-6 w-6 text-primary" />,
//       title: t.about.feature3Title,
//       description: t.about.feature3Desc
//     },
//     {
//       icon: <Heart className="h-6 w-6 text-primary" />,
//       title: t.about.feature4Title,
//       description: t.about.feature4Desc
//     }
//   ];

//   return (
//     <section className="py-24 bg-muted/30 relative overflow-hidden" id="about">
//       {/* Decorative soft background glow */}
//       <div className="absolute -top-20 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left text section */}
//           <div>
//             <h2 className="text-4xl font-bold text-foreground mb-6">
//               {t.about.heading}
//             </h2>
//             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//               {t.about.intro1}
//             </p>
//             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//               {t.about.intro2}
//             </p>
//             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//               {t.about.intro3}
//             </p>

//             {/* Feature grid */}
//             <div className="grid sm:grid-cols-2 gap-4">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-start space-x-3 group">
//                   <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
//                       {feature.title}
//                     </h3>
//                     <p className="text-sm text-muted-foreground">{feature.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right visual section */}
//           <div className="relative flex items-center justify-center">
//             {/* Floating card */}
//             <Card className="p-8 bg-card shadow-2xl border-border relative z-20">
//               <CardContent className="text-center">
//                 <div className="mb-6">
//                   <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
//                     <Heart className="h-12 w-12 text-primary" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-foreground mb-2">{t.about.missionTitle}</h3>
//                   <p className="text-muted-foreground leading-relaxed">
//                     {t.about.mission}
//                   </p>
//                 </div>
//                 <div className="border-t border-border pt-6">
//                   <h4 className="font-semibold text-foreground mb-2">{t.about.facilityTitle}</h4>
//                   <p className="text-sm text-muted-foreground">
//                     {t.about.facilityDesc}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Layered images */}
//             <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden md:block">
//               <img
//                 src={dimi1}
//                 alt="Dr. Dimitris P. Ziaziaris"
//                 className="w-56 h-72 object-cover rounded-3xl shadow-lg border-4 border-background 
//                           transform rotate-[-6deg] hover:rotate-[-3deg] transition-transform duration-700 ease-out"
//               />
//             </div>

//             <div className="absolute -right-16 bottom-0 hidden md:block">
//               <img
//                 src={dimipat1}
//                 alt="Dental patient smile"
//                 className="w-60 h-60 object-cover rounded-full shadow-2xl border-4 border-background 
//                           transform rotate-[5deg] hover:rotate-[2deg] transition-transform duration-700 ease-out"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Microscope, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import dimi1 from '@/assets/dimi1.jpg';
import dimipat1 from '@/assets/dimipat1.jpg';

const About = () => {
  const { t } = useLanguage();

  const features = [
    { icon: <Award className="h-6 w-6 text-primary" />, title: t.about.feature1Title, description: t.about.feature1Desc },
    { icon: <Microscope className="h-6 w-6 text-primary" />, title: t.about.feature2Title, description: t.about.feature2Desc },
    { icon: <Users className="h-6 w-6 text-primary" />, title: t.about.feature3Title, description: t.about.feature3Desc },
    { icon: <Heart className="h-6 w-6 text-primary" />, title: t.about.feature4Title, description: t.about.feature4Desc },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden" id="about">
      {/* Decorative glows */}
      <div className="absolute -top-20 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10 space-y-24">

        {/* --- ΠΑΝΩ ΜΕΡΟΣ --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Αριστερά: Κείμενο */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              {t.about.heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t.about.intro1}</p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t.about.intro2}</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.about.intro3}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Δεξιά: Φωτογραφίες */}
          <motion.div
            className="relative flex flex-col items-center lg:items-end gap-10 mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Κάτω φωτογραφία — πιο δεξιά και λίγο ψηλότερα */}
            <div className="relative w-80 h-80 group transition-all duration-700 ease-out lg:mr-24 -mt-10">
              <img
                src={dimipat1}
                alt="Dental patient smile"
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-background
                 transform group-hover:scale-110 group-hover:rotate-[3deg] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            {/* Πάνω φωτογραφία — πολύ πιο αριστερά */}
            <div className="relative w-80 h-[420px] group transition-all duration-700 ease-out lg:-mr-32">
              <img
                src={dimi1}
                alt="Dr. Dimitris P. Ziaziaris"
                className="w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-background
                 transform group-hover:scale-110 group-hover:rotate-[-2deg] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/20 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>


          </motion.div>



        </div>

        {/* --- ΚΑΤΩ ΜΕΡΟΣ: ΚΑΡΤΑ ΜΕ ΤΗΝ ΑΠΟΣΤΟΛΗ --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="p-10 md:p-14 bg-card/90 backdrop-blur-sm shadow-2xl border-border w-full text-center">
            <CardContent>
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">{t.about.missionTitle}</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                {t.about.mission}
              </p>
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-2 text-xl">{t.about.facilityTitle}</h4>
                <p className="text-muted-foreground text-sm">{t.about.facilityDesc}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
