import React from 'react';
import { Target, Eye, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-brandOrange">Us</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Otic Group is a diversified AI powerhouse accelerating Africa's digital transformation.
            We bring together <span className="text-brandNavy font-semibold">Otic Technologies</span>,
            <span className="text-brandNavy font-semibold"> Otic Foundation</span>,
            <span className="text-brandNavy font-semibold"> Otic Rwanda</span>, and the
            <span className="text-brandNavy font-semibold"> Otic Institute of Emerging Technologies (OIET)</span>
            working as one to build a globally competitive, inclusive AI ecosystem from Uganda for the African continent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition-all duration-300">
              <Target className="w-12 h-12 text-brandOrange mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To cultivate an inclusive, innovation-led AI ecosystem—laying the foundation for Uganda's 
                digital economy and equipping the workforce for the future of work and industry.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition-all duration-300">
              <Eye className="w-12 h-12 text-brandOrange mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                A thriving AI ecosystem in Uganda that serves as a model and catalyst for 
                transformation across the African continent.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-brandOrange/20 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8 border border-slate-200">
                <MapPin className="w-16 h-16 text-brandOrange mb-6 mx-auto" />
                <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">Our Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-brandOrange rounded-full"></div>
                    <span className="text-slate-700">Government of Uganda endorsement as AI implementer</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-brandOrange rounded-full"></div>
                    <span className="text-slate-700">Successful expansion into Rwanda</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-brandOrange rounded-full"></div>
                    <span className="text-slate-700">15,000+ online AI community members</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-brandOrange rounded-full"></div>
                    <span className="text-slate-700">5,500+ successfully trained learners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;