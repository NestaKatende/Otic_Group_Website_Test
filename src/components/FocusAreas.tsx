import React from 'react';
import { 
  Building, 
  Heart, 
  GraduationCap, 
  Globe2, 
  Brain, 
  Users, 
  Settings, 
  BookOpen,
  Shield,
  TrendingUp,
  DollarSign,
  FileText,
  ExternalLink
} from 'lucide-react';

const FocusAreas = () => {
  const divisions = [
    {
      id: 'tech',
      name: 'Otic Technologies',
      description: 'The innovation engine delivering AI training solutions and outsourcing services',
      icon: Building,
      color: 'from-teal-500 to-blue-600',
      websiteUrl: 'https://otictech.com',
      products: [
        { name: 'Otic Business', url: 'https://oticbusiness.com' },
        { name: 'Otic Learn', url: 'https://oticlearn.com' }
      ],
      services: [
        {
          title: 'Corporate AI Consultancy & Training',
          description: 'Training corporate organizations and the public sector across industries',
          features: ['Customized AI use cases', 'Agent AI Building & Deployment', 'Industry-specific solutions']
        },
        {
          title: 'Business Process Outsourcing',
          description: 'Allowing businesses to focus on core functions with our support',
          features: ['Data Digitization', 'Data ETL Processes', 'Data Analytics', 'MIS Development', 'AI-Powered Insights']
        },
        {
          title: 'Offshoring Services',
          description: 'Connecting companies with vetted experts',
          features: ['AI & ML Engineering', 'Data Annotation', 'Agentic AI Building', 'Full-stack Development']
        }
      ]
    },
    {
      id: 'foundation',
      name: 'Otic Foundation',
      description: 'Community-focused arm championing grassroots AI advocacy and digital inclusion',
      icon: Heart,
      color: 'from-purple-500 to-pink-600',
      websiteUrl: 'https://oticfoundation.org/',
      services: [
        {
          title: 'National Free AI Skilling Initiative (NFASI)',
          description: 'Free AI Skilling program across different regions in Uganda',
          features: ['Foundational AI skills', 'Regional accessibility', 'Career relevance']
        },
        {
          title: 'University AI Programs',
          description: 'Free AI Skilling for university students across Uganda',
          features: ['Student-focused curriculum', 'Career guidance', 'Practical applications']
        },
        {
          title: 'Advocacy',
          description: 'Lobbying for national AI strategy and policy',
          features: ['Public sector engagement', 'Private sector collaboration', 'Policy development']
        }
      ]
    },
    {
      id: 'institute',
      name: 'Otic Institute (OIET)',
      description: 'Advanced learning and research center in AI, data science, and frontier tech',
      icon: GraduationCap,
      color: 'from-blue-500 to-purple-600',
      websiteUrl: 'http://oiet.ac.ug/',
      services: [
        {
          title: 'Finance & Risk',
          description: 'AI certifications for financial sector',
          features: ['Intelligent Finance', 'Risk Intelligence', 'Smart Insurance']
        },
        {
          title: 'Marketing & Analytics',
          description: 'AI-powered marketing and customer insights',
          features: ['Predictive Marketing', 'Customer Analytics', 'Market Intelligence']
        },
        {
          title: 'Security & Compliance',
          description: 'AI for security and regulatory compliance',
          features: ['Tax Intelligence', 'Cyber Intelligence', 'Fraud Detection']
        }
      ]
    },
    {
      id: 'rwanda',
      name: 'Otic Rwanda',
      description: 'Strategic expansion marking our continental vision across Africa',
      icon: Globe2,
      color: 'from-green-500 to-teal-600',
      services: [
        {
          title: 'Enterprise Solutions',
          description: 'AI business process outsourcing and enterprise skilling',
          features: ['Corporate training', 'Process automation', 'Business intelligence']
        },
        {
          title: 'Community Impact',
          description: 'Grassroots AI literacy and digital inclusion',
          features: ['Digital accessibility', 'Community programs', 'Skill development']
        },
        {
          title: 'Certifications',
          description: 'Sector-specific AI certifications and research',
          features: ['Finance certifications', 'Insurance programs', 'Marketing specializations']
        }
      ]
    }
  ];

  const certificates = [
    { name: 'Intelligent Finance', icon: DollarSign, description: 'AI for Credit Scoring & Financial Decision Making' },
    { name: 'Risk Intelligence', icon: Shield, description: 'AI for Risk Management & Risk Intelligence' },
    { name: 'Smart Insurance', icon: FileText, description: 'AI for Advanced Insurance Underwriting' },
    { name: 'Predictive Marketing', icon: TrendingUp, description: 'AI for Predictive Marketing & Customer Analytics' },
    { name: 'Tax Intelligence', icon: FileText, description: 'AI for Tax Fraud Detection & Compliance' },
    { name: 'Cyber Intelligence', icon: Shield, description: 'AI for Fraud Detection & Cyber Threat Analysis' }
  ];

  return (
    <section id="focus" className="py-20 bg-brandNavy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-brandOrange">Focus Areas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four specialized divisions working together to transform Africa's AI landscape
          </p>
        </div>

        <div className="space-y-20">
          {divisions.map((division, index) => (
            <div key={division.id} className="relative">
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className={`inline-flex items-center space-x-3 bg-brandOrange/20 p-1 rounded-2xl mb-6`}>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                      <division.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="pr-4">
                      <h3 className="text-2xl font-bold text-white">{division.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {division.description}
                  </p>

                  {/* Links row if available */}
                  <div className="flex flex-wrap gap-3">
                    {division.websiteUrl && (
                      <a
                        href={division.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-full transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {division.products && division.products.map((p, i) => (
                      <a
                        key={i}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-full transition-colors"
                      >
                        {p.name}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="grid gap-6">
                    {division.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-brandOrange/50 transition-all duration-300 group">
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brandOrange transition-colors duration-300">
                          {service.title}
                        </h4>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full border border-white/20">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OIET Certificates Section */}
        <div className="mt-20 pt-20 border-t border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Professional <span className="text-brandOrange">Certifications</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Industry-specific AI certifications designed for the future of work across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-brandOrange/50 transition-all duration-300 group hover:scale-105">
                <cert.icon className="w-10 h-10 text-brandOrange mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;