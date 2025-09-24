import React from 'react';
import { Mail, Phone, Globe, MapPin, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partner with us today to accelerate your AI journey and transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-teal-500/10 to-blue-600/10 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-semibold">+256 756 722 263</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-semibold">info@oticgroup.net</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Website</p>
                    <p className="text-white font-semibold">www.oticgroup.net</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Locations</p>
                    <p className="text-white font-semibold">Uganda & Rwanda</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Why Partner With Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <ArrowRight className="w-4 h-4 text-teal-400" />
                  <span className="text-gray-300">Government-endorsed AI expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">15,000+ strong community network</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">Proven track record across Africa</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ArrowRight className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Comprehensive AI solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors duration-300"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors duration-300"
                  placeholder="Tell us about your AI needs and how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span className="font-semibold">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;