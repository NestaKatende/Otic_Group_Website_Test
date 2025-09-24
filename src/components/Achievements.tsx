import React from 'react';
import { Award, Users, Globe, BookOpen, Building, Heart } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Government Endorsement',
      description: 'Official endorsement from the Government of Uganda as an AI implementor and educator',
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      title: '15,000+ Community',
      description: 'Online community of AI talent, tech leaders and AI enthusiasts with job placements',
      color: 'text-teal-400'
    },
    {
      icon: BookOpen,
      title: '5,500+ Trained',
      description: 'Learners successfully passed through corporate, institutional and countrywide programs',
      color: 'text-blue-400'
    },
    {
      icon: Globe,
      title: 'Beyond Borders',
      description: 'Successfully scaled beyond Uganda to begin operations in Rwanda',
      color: 'text-purple-400'
    }
  ];

  const clients = [
    'Government of Uganda',
    'Ministry of ICT',
    'Leading Corporations',
    'Educational Institutions',
    'Tech Startups',
    'International Organizations'
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable impact and recognition across Africa's AI ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300 hover:scale-105">
                <achievement.icon className={`w-12 h-12 ${achievement.color} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
                <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Section */}
        <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Credibility</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Official Government Recognition:</strong> Endorsed by the Ministry of ICT & National Guidance as an AI implementor and educator in Uganda.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Regional Impact:</strong> Successfully expanded operations to Rwanda, aligning with NST2 and EAC Regional Digital Transformation Strategy.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Proven Track Record:</strong> Over 5,500 trained professionals and 15,000+ community members with successful job placements.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-8 text-center">Our Trusted Partners</h4>
              <div className="grid grid-cols-2 gap-4">
                {clients.map((client, index) => (
                  <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4 text-center hover:border-teal-500/30 transition-all duration-300">
                    <Building className="w-6 h-6 text-teal-400 mb-2 mx-auto" />
                    <span className="text-sm text-gray-300">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;