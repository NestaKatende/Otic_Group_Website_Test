import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import MediaShowcase from './components/MediaShowcase';
import HolographicDisplay from './components/HolographicDisplay';
import AIAgents from './components/AIAgents';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-brandNavy text-white relative"
    >
      <Header />
      <Hero />
      <About />
      <MediaShowcase />
      <FocusAreas />
      <HolographicDisplay />
      <AIAgents />
      <Achievements />
      <Contact />
      <Footer />
      <AIAssistant />
    </motion.div>
  );
}

export default App;