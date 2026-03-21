
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';
import EnhancedHowItWorks from '@/components/EnhancedHowItWorks';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <EnhancedHowItWorks />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Why Detect AI Images?</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                In today's digital world, distinguishing between AI-generated and human-created images is becoming increasingly important for:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-medium mb-2">Media Verification</h3>
                  <p className="text-gray-600 text-sm">
                    Verify the authenticity of news images and combat misinformation.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-medium mb-2">Content Moderation</h3>
                  <p className="text-gray-600 text-sm">
                    Identify synthetically generated inappropriate or harmful content.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-medium mb-2">Creative Industries</h3>
                  <p className="text-gray-600 text-sm">
                    Protect original human artwork and ensure proper attribution.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-medium mb-2">Digital Forensics</h3>
                  <p className="text-gray-600 text-sm">
                    Support investigations by determining image origins.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
        
        <AboutUs />
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
