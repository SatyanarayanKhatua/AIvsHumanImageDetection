
import React from 'react';
import { User, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800">Ready to Implement AI Detection?</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mb-8">
              Join organizations who trust our solution to provide reliable, accurate, 
              and secure image verification.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link 
                to="/signup"
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 w-full sm:w-auto"
              >
                <User size={20} />
                Free Sign-up
              </Link>
              
              <Link 
                to="/#how-it-works"
                className="border border-red-600 text-red-600 hover:bg-red-50 font-medium px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 w-full sm:w-auto mt-4 sm:mt-0"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('how-it-works');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Play size={20} fill="currentColor" />
                Try It Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
