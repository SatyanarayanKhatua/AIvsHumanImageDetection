
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <header className={cn(
  "w-full py-4 px-6 fixed top-0 left-0 z-50 transition-all duration-300",
  isHome
    ? (isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm"
        : "bg-white/30 backdrop-blur-sm")
    : "bg-white shadow-sm"
)}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-blue-600" />
              <h1 className={cn(
                "text-xl font-bold tracking-tight",
                isScrolled ? "gradient-text" : "text-white"
              )}>
                AI Image Detector
              </h1>
            </div>
          </Link>
        </motion.div>
        
        <div className="flex items-center">
          <nav className="hidden md:block mr-4">
            <ul className="flex space-x-6">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link to="/" className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"
                )}>
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link to="/blog" className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"
                )}>
                  Blog
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link to="/contact" className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"
                )}>
                  Contact
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <a 
                  href="#how-it-works" 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600",
                    isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"
                  )}
                >
                  How It Works
                </a>
              </motion.li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden mr-2">
            <Button 
              variant="ghost" 
              size="sm"
              className={`text-${isScrolled ? 'gray-600' : 'white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={isScrolled ? "outline" : "secondary"} 
                  size="sm" 
                  className="gap-1"
                >
                  <User size={16} /> 
                  <span>Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 animate-fade-in">
                <Link to="/login">
                  <DropdownMenuItem className="cursor-pointer">Log In</DropdownMenuItem>
                </Link>
                <Link to="/signup">
                  <DropdownMenuItem className="cursor-pointer">Sign Up</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 px-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <Link 
                to="/" 
                className="text-gray-800 font-medium block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className="text-gray-800 font-medium block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-gray-800 font-medium block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <a 
                href="#how-it-works" 
                className="text-gray-800 font-medium block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
