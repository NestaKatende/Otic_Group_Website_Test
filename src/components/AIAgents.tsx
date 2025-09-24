import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart3, 
  Shield, 
  Users, 
  Cpu, 
  Network,
  Play,
  Pause,
  Activity
} from 'lucide-react';

const AIAgents = () => {
  const [activeAgent, setActiveAgent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const agents = [
    {
      id: 'data-analyst',
      name: 'DataMind Agent',
      description: 'Autonomous data analysis and insights generation',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      capabilities: ['Real-time Analytics', 'Predictive Modeling', 'Automated Reporting'],
      status: 'Active',
      tasks: 127,
      accuracy: 94.7
    },
    {
      id: 'security-guardian',
      name: 'SecureGuard Agent',
      description: 'Intelligent threat detection and response system',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      capabilities: ['Threat Detection', 'Automated Response', 'Risk Assessment'],
      status: 'Monitoring',
      tasks: 89,
      accuracy: 98.2
    },
    {
      id: 'customer-insight',
      name: 'InsightBot Agent',
      description: 'Customer behavior analysis and engagement optimization',
      icon: Users,
      color: 'from-purple-500 to-indigo-500',
      capabilities: ['Behavior Analysis', 'Engagement Optimization', 'Personalization'],
      status: 'Learning',
      tasks: 203,
      accuracy: 91.5
    },
    {
      id: 'process-optimizer',
      name: 'OptiFlow Agent',
      description: 'Business process automation and optimization',
      icon: Cpu,
      color: 'from-green-500 to-teal-500',
      capabilities: ['Process Automation', 'Workflow Optimization', 'Resource Allocation'],
      status: 'Optimizing',
      tasks: 156,
      accuracy: 96.3
    }
  ];

  const toggleAgentSystem = () => {
    setIsRunning(!isRunning);
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-teal-500/20 mb-6"
          >
            <Network className="w-4 h-4 text-teal-400" />
            <span className="text-sm text-gray-300">Agentic AI Systems</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intelligent <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">AI Agents</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience our autonomous AI agents working in real-time to solve complex business challenges
          </p>

          {/* Control Panel */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <button
              onClick={toggleAgentSystem}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                isRunning 
                  ? 'bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30' 
                  : 'bg-green-500/20 border border-green-500/50 text-green-400 hover:bg-green-500/30'
              }`}
            >
              {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span>{isRunning ? 'Pause System' : 'Start System'}</span>
            </button>
            
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-slate-700/50">
              <Activity className={`w-5 h-5 ${isRunning ? 'text-green-400 animate-pulse' : 'text-gray-400'}`} />
              <span className="text-gray-300">System Status: </span>
              <span className={isRunning ? 'text-green-400' : 'text-gray-400'}>
                {isRunning ? 'Active' : 'Standby'}
              </span>
            </div>
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeAgent === index 
                  ? 'border-teal-500/50 shadow-2xl shadow-teal-500/10' 
                  : 'border-slate-700/50 hover:border-slate-600/50'
              }`}
              onClick={() => setActiveAgent(index)}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center mb-4 relative`}>
                <agent.icon className="w-6 h-6 text-white" />
                {isRunning && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{agent.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{agent.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Status</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    isRunning ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {isRunning ? agent.status : 'Standby'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Tasks</span>
                  <span className="text-xs text-white">{isRunning ? agent.tasks : 0}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Accuracy</span>
                  <span className="text-xs text-teal-400">{isRunning ? agent.accuracy : 0}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Agent Details */}
        <motion.div
          key={activeAgent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${agents[activeAgent].color} rounded-2xl flex items-center justify-center`}>
                  <agents[activeAgent].icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{agents[activeAgent].name}</h3>
                  <p className="text-gray-400">{agents[activeAgent].description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Core Capabilities</h4>
                <div className="grid gap-3">
                  {agents[activeAgent].capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Real-time Metrics</h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Processing Speed</span>
                      <span className="text-sm text-white">{isRunning ? '2.3k/sec' : '0/sec'}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isRunning ? '85%' : '0%' }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Memory Usage</span>
                      <span className="text-sm text-white">{isRunning ? '67%' : '0%'}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isRunning ? '67%' : '0%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Success Rate</span>
                      <span className="text-sm text-white">{isRunning ? agents[activeAgent].accuracy : 0}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-400 to-teal-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isRunning ? `${agents[activeAgent].accuracy}%` : '0%' }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAgents;