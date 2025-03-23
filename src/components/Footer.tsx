
import React from 'react';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-4 mt-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-melo-purple to-melo-blue flex items-center justify-center shadow-md">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-4 h-4 text-white"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <p className={cn(
            "text-sm font-medium",
            "bg-gradient-to-r from-melo-purple via-melo-blue to-melo-pink bg-clip-text text-transparent",
          )}>
            Melo Match
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors duration-200">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors duration-200">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors duration-200">About</a>
          <a href="#" className="hover:text-foreground transition-colors duration-200">Contact</a>
        </div>
        
        <div className="mt-4 md:mt-0 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Melo Match. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
