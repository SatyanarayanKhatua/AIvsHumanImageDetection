
import React from 'react';
import { motion } from 'framer-motion';

const EnhancedHowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Upload Your Image",
      description: "Drag and drop any image you want to analyze, or simply click to browse your files.",
      color: "blue",
      delay: 0,
    },
    {
      number: 2,
      title: "AI Analysis",
      description: "Our advanced detection algorithm processes your image and looks for telltale signs of AI generation.",
      color: "indigo",
      delay: 0.2,
    },
    {
      number: 3,
      title: "Get Results",
      description: "Receive detailed results showing the likelihood that your image was created by AI or a human.",
      color: "purple",
      delay: 0.4,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: (delay: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay 
      }
    })
  };

  return (
    <section className="py-16 px-6 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our powerful AI detection system makes it easy to identify AI-generated images in just three simple steps:
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className={`bg-${step.color}-50 p-8 rounded-xl border border-${step.color}-100 shadow-sm`}
              custom={step.delay}
              variants={itemVariants}
            >
              <motion.div 
                className={`w-16 h-16 rounded-full bg-${step.color}-100 flex items-center justify-center mb-6 mx-auto`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className={`text-2xl font-bold text-${step.color}-600`}>{step.number}</span>
              </motion.div>
              <h3 className="text-xl font-medium text-center mb-3">{step.title}</h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedHowItWorks;
