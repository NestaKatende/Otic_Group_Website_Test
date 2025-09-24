import React from 'react';
import { Target, Eye, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Otic Group</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Otic Group brings together Otic Technologies, Otic Foundation, Otic Rwanda, and Otic Institute 
            of Emerging Technologies working as one to build a globally competitive, inclusive AI ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300">
              <Target className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To cultivate an inclusive, innovation-led AI ecosystem—laying the foundation for Uganda's 
                digital economy and equipping the workforce for the future of work and industry.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <Eye className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A thriving AI ecosystem in Uganda that serves as a model and catalyst for 
                transformation across the African continent.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-teal-500/20 to-purple-600/20 rounded-3xl p-1">
              <div className="bg-slate-900 rounded-3xl p-8">
                <MapPin className="w-16 h-16 text-purple-400 mb-6 mx-auto" />
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-300">Government of Uganda endorsement as AI implementor</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Successful expansion to Rwanda</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">15,000+ online AI community members</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">5,500+ successfully trained learners</span>
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