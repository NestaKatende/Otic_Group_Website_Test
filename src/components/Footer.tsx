import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-between space-y-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Otic Group</h1>
              <p className="text-sm text-teal-300">Accelerating Africa's AI Revolution</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Building a globally competitive, inclusive AI ecosystem from Uganda for the African continent
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>Uganda</span>
              <span>•</span>
              <span>Rwanda</span>
              <span>•</span>
              <span>+256 756 722 263</span>
              <span>•</span>
              <span>info@oticgroup.net</span>
            </div>
          </div>

          <div className="flex items-center justify-between w-full pt-8 border-t border-slate-800">
            <p className="text-gray-500 text-sm">
              © 2025 Otic Group. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;