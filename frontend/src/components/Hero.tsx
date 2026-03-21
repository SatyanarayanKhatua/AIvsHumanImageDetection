
import React from 'react';
import { cn } from '@/lib/utils';
import ImageUploader from './ImageUploader';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToHowItWorks = () => {
    const section = document.getElementById('how-it-works');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full min-h-[92vh] bg-hero-pattern flex flex-col items-center justify-center px-4 pt-16 pb-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 50 + 10}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 z-10">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">Detect AI Generated Images</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
            With Advanced Technology
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Our advanced AI detection tool can identify if an image was created by artificial intelligence with high accuracy.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass-morphism rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl max-w-2xl mx-auto w-full"
        >
          <ImageUploader />
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <p>Free to use</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
            <p>No sign up required</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
            <p>Instant results</p>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
  className="absolute bottom-4 left-0 right-0 flex justify-center z-20"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.6,
    repeat: Infinity,
    repeatType: "reverse"
  }}
>
  <button 
    onClick={scrollToHowItWorks}
    className="text-white hover:text-white flex flex-col items-center gap-1 cursor-pointer"
  >
    <span className="text-sm">Learn more</span>
    <ArrowDown size={20} />
  </button>
</motion.div>
    </section>
  );
};

export default Hero;
