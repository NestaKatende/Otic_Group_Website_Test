import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brandNavy border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-between space-y-8">
          <div className="flex items-center">
            <img src="/Otic Group logo white .png" alt="OTIC Group" className="h-16 w-auto object-contain block" loading="eager" />
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

          <div className="flex items-center justify-between w-full pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © 2025 Otic Group. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <ArrowUp className="w-5 h-5 text-gray-300 group-hover:text-brandOrange transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;