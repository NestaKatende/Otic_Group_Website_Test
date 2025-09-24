import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Network, Zap, Activity } from 'lucide-react';

const HolographicDisplay = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const nodes = [
    { id: 'brain', icon: Brain, label: 'Neural Networks', color: '#14B8A6', position: { x: 50, y: 20 } },
    { id: 'cpu', icon: Cpu, label: 'Processing Units', color: '#3B82F6', position: { x: 80, y: 40 } },
    { id: 'database', icon: Database, label: 'Data Storage', color: '#8B5CF6', position: { x: 70, y: 70 } },
    { id: 'network', icon: Network, label: 'AI Networks', color: '#F59E0B', position: { x: 30, y: 60 } },
    { id: 'zap', icon: Zap, label: 'Power Systems', color: '#EF4444', position: { x: 20, y: 30 } },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 0 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) {
        setActiveNode((prev) => (prev + 1) % nodes.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating, nodes.length]);

  const activeNodeData = nodes[activeNode];
  const ActiveNodeIcon = activeNodeData.icon;

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-teal-500/20 mb-6"
          >
            <Activity className="w-4 h-4 text-teal-400" />
            <span className="text-sm text-gray-300">AI Architecture Visualization</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Holographic <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">AI Systems</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience our advanced AI architecture through interactive holographic visualization
          </p>

          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setIsAnimating(!isAnimating)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                isAnimating 
                  ? 'bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30' 
                  : 'bg-green-500/20 border border-green-500/50 text-green-400 hover:bg-green-500/30'
              }`}
            >
              {isAnimating ? 'Pause Animation' : 'Start Animation'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Holographic Display */}
          <div className="relative">
            <div className="aspect-square bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 relative overflow-hidden">
              {/* Holographic Grid */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#14B8A6" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Connections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {connections.map((connection, index) => {
                  const fromNode = nodes[connection.from];
                  const toNode = nodes[connection.to];
                  return (
                    <motion.line
                      key={index}
                      x1={fromNode.position.x}
                      y1={fromNode.position.y}
                      x2={toNode.position.x}
                      y2={toNode.position.y}
                      stroke="url(#connectionGradient)"
                      strokeWidth="0.5"
                      opacity={0.6}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14B8A6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Nodes */}
              {nodes.map((node, index) => (
                <motion.div
                  key={node.id}
                  className={`absolute w-16 h-16 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    activeNode === index 
                      ? 'bg-white/20 border-white shadow-2xl scale-125' 
                      : 'bg-slate-800/50 border-slate-600 hover:border-white/50'
                  }`}
                  style={{
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`,
                    transform: 'translate(-50%, -50%)',
                    borderColor: activeNode === index ? node.color : undefined,
                    boxShadow: activeNode === index ? `0 0 30px ${node.color}40` : undefined
                  }}
                  onClick={() => setActiveNode(index)}
                  whileHover={{ scale: 1.1 }}
                  animate={activeNode === index ? {
                    scale: [1.25, 1.35, 1.25],
                    rotate: [0, 360],
                  } : {}}
                  transition={{ duration: 2, repeat: activeNode === index ? Infinity : 0 }}
                >
                  {(() => { const NodeIcon = node.icon; return (
                  <NodeIcon 
                    className="w-8 h-8" 
                    style={{ color: activeNode === index ? node.color : '#9CA3AF' }}
                  />
                  ); })()}
                  
                  {/* Pulse Effect */}
                  {activeNode === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: node.color }}
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [1, 0, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}

              {/* Central Hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: isAnimating ? 360 : 0,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Brain className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Node Information */}
          <div className="space-y-6">
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${activeNodeData.color}20` }}
                >
                  <ActiveNodeIcon 
                    className="w-8 h-8" 
                    style={{ color: activeNodeData.color }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeNodeData.label}</h3>
                  <p className="text-gray-400">AI System Component</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">Status</div>
                    <div className="text-green-400 font-semibold">Active</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">Load</div>
                    <div className="text-blue-400 font-semibold">67%</div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-2">Performance</div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: activeNodeData.color }}
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <div className="text-right text-sm text-gray-400 mt-1">85%</div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {nodes.map((node, index) => (
                <motion.button
                  key={node.id}
                  onClick={() => setActiveNode(index)}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    activeNode === index
                      ? 'bg-slate-700/50 border-white/50'
                      : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <node.icon 
                    className="w-6 h-6 mb-2" 
                    style={{ color: activeNode === index ? node.color : '#9CA3AF' }}
                  />
                  <div className="text-sm text-white font-medium">{node.label}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolographicDisplay;