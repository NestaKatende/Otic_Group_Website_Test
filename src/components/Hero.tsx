import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Users } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-teal-500/20"
        >
          <Zap className="w-4 h-4 text-teal-400" />
          <span className="text-sm text-gray-300">Accelerating Africa's AI Revolution</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Building Africa's
          <span className="block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            AI Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Otic Group is a diversified AI powerhouse accelerating Africa's digital transformation, 
          building a globally competitive, inclusive AI ecosystem from Uganda for the African continent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:shadow-2xl hover:shadow-teal-500/25 flex items-center space-x-2"
          >
            <span className="font-semibold">Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-slate-600 hover:border-teal-400 text-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300"
          >
            <Users className="w-8 h-8 text-teal-400 mb-4 mx-auto" />
            <div className="text-3xl font-bold text-white mb-2">15,000+</div>
            <div className="text-gray-400">AI Community Members</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300"
          >
            <Globe className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
            <div className="text-3xl font-bold text-white mb-2">5,500+</div>
            <div className="text-gray-400">Trained Learners</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300"
          >
            <Zap className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
            <div className="text-3xl font-bold text-white mb-2">2+</div>
            <div className="text-gray-400">Countries</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;