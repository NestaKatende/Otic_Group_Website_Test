import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Image as ImageIcon } from 'lucide-react';

const MediaShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const mediaContent = [
    {
      type: 'video',
      title: 'AI Training in Action',
      description: 'Watch our immersive AI training sessions transforming African talent',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1'
    },
    {
      type: 'video',
      title: 'Corporate AI Solutions',
      description: 'Discover how we help businesses integrate AI into their operations',
      thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1'
    },
    {
      type: 'image',
      title: 'AI Community Events',
      description: 'Our vibrant community of 15,000+ AI enthusiasts across Africa',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      type: 'image',
      title: 'Government Partnership',
      description: 'Official endorsement ceremony with Uganda Ministry of ICT',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      type: 'video',
      title: 'Rwanda Expansion',
      description: 'Our strategic expansion into Rwanda and across Africa',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1'
    },
    {
      type: 'image',
      title: 'AI Research Lab',
      description: 'State-of-the-art facilities at Otic Institute of Emerging Technologies',
      thumbnail: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-brandOrange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-brandOrange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-teal-500/20 mb-6"
          >
            <ImageIcon className="w-4 h-4 text-brandOrange" />
            <span className="text-sm text-gray-300">Media Showcase</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Our <span className="text-brandOrange">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in the visual story of Africa's AI transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video/Image Display */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeVideo}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden group"
            >
              {mediaContent[activeVideo].type === 'video' ? (
                <div className="relative aspect-video">
                  <iframe
                    src={`${mediaContent[activeVideo].videoUrl}&autoplay=${isPlaying ? 1 : 0}&muted=${isMuted ? 1 : 0}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={togglePlay}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </button>
                      
                      <button
                        onClick={toggleMute}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                      >
                        {isMuted ? (
                          <VolumeX className="w-6 h-6 text-white" />
                        ) : (
                          <Volume2 className="w-6 h-6 text-white" />
                        )}
                      </button>
                      
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                        <Maximize className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video">
                  <img
                    src={mediaContent[activeVideo].thumbnail}
                    alt={mediaContent[activeVideo].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              )}

              {/* Content Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {mediaContent[activeVideo].title}
                </h3>
                <p className="text-gray-300">
                  {mediaContent[activeVideo].description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Media Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">More Content</h3>
            <div className="grid gap-4">
              {mediaContent.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                    activeVideo === index 
                      ? 'ring-2 ring-teal-500 shadow-lg shadow-teal-500/20' 
                      : 'hover:ring-2 hover:ring-slate-600'
                  }`}
                  onClick={() => setActiveVideo(index)}
                >
                  <div className="aspect-video relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    
                    {/* Play Button for Videos */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    )}
                    
                    {/* Content Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <h4 className="text-sm font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-300 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">15,000+</div>
              <div className="text-gray-300">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">5,500+</div>
              <div className="text-gray-300">Trained Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">Government Endorsed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaShowcase;