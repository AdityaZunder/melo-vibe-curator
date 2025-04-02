
import React from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-theme-violet to-theme-blue flex items-center justify-center shadow-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 text-white"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <h1 className={cn(
            "text-2xl font-bold tracking-tight",
            "bg-gradient-to-r from-theme-violet via-theme-blue to-accent bg-clip-text text-transparent",
          )}>
            Melo Match
          </h1>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#" 
            className="text-muted-foreground hover:text-theme-gray transition-colors duration-200"
          >
            How it works
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-theme-gray transition-colors duration-200"
          >
            About
          </a>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-theme-violet to-theme-blue text-white font-medium shadow-md hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
