import React from 'react';
import { motion } from 'framer-motion';

const CompanyProfile = () => {
  const boardSlides = [
    '/profile/images/slide-09.jpg'
  ];
  const managementSlides = [
    '/profile/images/slide-10.jpg'
  ];
  const clientsSlides = [
    '/profile/images/slide-11.jpg'
  ];
  const partnersSlides = [
    '/profile/images/slide-12.jpg'
  ];
  const endorsementsSlides = [
    '/profile/images/slide-13.jpg'
  ];

  const Section = ({ id, title, slides }: { id: string; title: string; slides: string[] }) => (
    <section id={id} className="py-20 bg-white text-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {slides.map((src, i) => (
            <motion.div key={i} whileHover={{ scale: 1.01 }} className="overflow-hidden rounded-2xl border border-slate-200 shadow">
              <img src={src} alt={`${title} ${i + 1}`} className="w-full h-auto object-contain bg-white" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Section id="board" title="Our Board" slides={boardSlides} />
      <Section id="management" title="Management" slides={managementSlides} />
      <Section id="clients" title="Our Clients" slides={clientsSlides} />
      <Section id="partners" title="Our Partners" slides={partnersSlides} />
      <Section id="endorsements" title="Our Credibility & Endorsements" slides={endorsementsSlides} />
    </>
  );
};

export default CompanyProfile;

