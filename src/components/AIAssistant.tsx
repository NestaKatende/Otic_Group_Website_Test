import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Otic AI, your intelligent assistant. I can help you learn about our AI solutions, training programs, and how we're transforming Africa's digital landscape. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const aiResponses = {
    greeting: [
      "Hello! Welcome to Otic Group. How can I assist you with our AI solutions today?",
      "Hi there! I'm here to help you explore our AI training programs and services.",
      "Greetings! Ready to discover how Otic Group is revolutionizing AI in Africa?"
    ],
    services: [
      "Otic Group offers comprehensive AI solutions through four divisions: Otic Technologies (corporate training & outsourcing), Otic Foundation (community programs), OIET (professional certifications), and Otic Rwanda (regional expansion). Which area interests you most?",
      "We provide AI consultancy, training, business process outsourcing, and professional certifications. Our programs have trained over 5,500 learners across Uganda and Rwanda!"
    ],
    training: [
      "Our training programs include corporate AI consultancy, free community skilling through NFASI, university programs, and professional certifications in Finance, Risk, Insurance, Marketing, Tax, and Cyber Intelligence. Which program would you like to learn more about?",
      "We offer both free and professional AI training. Our National Free AI Skilling Initiative (NFASI) has reached thousands across Uganda, while our OIET certifications provide specialized industry skills."
    ],
    contact: [
      "You can reach us at +256 756 722 263, email info@oticgroup.net, or visit www.oticgroup.net. We're based in Uganda with operations in Rwanda. Would you like me to help you get in touch with our team?",
      "Our team is ready to help! Contact us via phone (+256 756 722 263), email (info@oticgroup.net), or through our website. We serve clients across Uganda and Rwanda."
    ],
    default: [
      "That's an interesting question! Otic Group is Africa's leading AI powerhouse with government endorsement and over 15,000 community members. Could you be more specific about what you'd like to know?",
      "I'd be happy to help! We specialize in AI training, consultancy, and building Africa's AI ecosystem. What specific aspect of our work interests you?",
      "Great question! As Africa's premier AI company, we're transforming the continent through education, innovation, and practical AI solutions. How can I assist you further?"
    ]
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return aiResponses.greeting[Math.floor(Math.random() * aiResponses.greeting.length)];
    }
    
    if (message.includes('service') || message.includes('what do you do') || message.includes('about')) {
      return aiResponses.services[Math.floor(Math.random() * aiResponses.services.length)];
    }
    
    if (message.includes('training') || message.includes('course') || message.includes('learn') || message.includes('program')) {
      return aiResponses.training[Math.floor(Math.random() * aiResponses.training.length)];
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return aiResponses.contact[Math.floor(Math.random() * aiResponses.contact.length)];
    }
    
    return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 ${isOpen ? 'hidden' : 'flex'} items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white rounded-full shadow-2xl hover:shadow-teal-500/25 transition-all duration-300`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(20, 184, 166, 0.3)",
            "0 0 30px rgba(20, 184, 166, 0.5)",
            "0 0 20px rgba(20, 184, 166, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-8 h-8" />
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Sparkles className="w-2 h-2 text-white" />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Otic AI Assistant</h3>
                  <p className="text-white/80 text-sm">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto h-80">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-blue-500' 
                        : 'bg-gradient-to-r from-teal-500 to-blue-600'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-800 text-gray-100 border border-slate-700'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-slate-800 border border-slate-700 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-teal-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-teal-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-teal-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-700/50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Otic Group..."
                  className="flex-1 bg-slate-800 border border-slate-600 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors duration-300"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-xl transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;