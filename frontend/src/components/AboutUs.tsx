
import React from 'react';
import { Users, Shield, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">About Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We are a team of computer science students working on AI and image analysis.Our project detects whether an image is real or created by artificial intelligence.We aim to help people understand and trust what they see online.
          Our goal is to make technology more transparent and responsible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center space-y-4 transform transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Our Team</h3>
            <p className="text-gray-600">
            We are the group of computer science students with a shared interest in AI and digital media.
Our project focuses on detecting whether images are real or AI-generated.
We aim to build simple, effective tools that help people trust what they see online.


            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 transform transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-gray-600">
            We're dedicated to combating misinformation by developing tools that detect AI-generated images.
Our goal is to empower people with knowledge, encourage critical thinking, and promote media literacy.
Through technology and awareness, we aim to build a more trustworthy digital world.


            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 transform transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
              <Award className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold">Our Values</h3>
            <p className="text-gray-600">
            We believe in transparency, accuracy, accessibility, and education.
Our tools are built to be reliable, ethical, and easy to use for everyone — from students to professionals.
We’re committed to creating technology that empowers people and supports informed decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
