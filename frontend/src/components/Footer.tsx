
import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <h2 className="text-lg font-bold gradient-text">AI Image Detector</h2>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Advanced AI detection technology to identify artificially generated images.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">AI Detection Guide</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">How It Works</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">API Documentation</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Limitations</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} AI Image Detector. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
