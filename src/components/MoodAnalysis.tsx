
import React from 'react';
import { cn } from '@/lib/utils';

export interface MoodAnalysisResult {
  mood: string;
  description: string;
  dominantColors: string[];
  intensityScore: number;
  tags: string[];
}

interface MoodAnalysisProps {
  result: MoodAnalysisResult | null;
  isLoading: boolean;
}

const MoodAnalysis: React.FC<MoodAnalysisProps> = ({ result, isLoading }) => {
  if (isLoading) {
    return (
      <div className="glass-panel rounded-xl p-8 w-full max-w-2xl mx-auto animate-pulse">
        <div className="h-6 bg-melo-purple/20 rounded-md w-1/3 mb-4"></div>
        <div className="h-4 bg-melo-purple/10 rounded-md w-full mb-3"></div>
        <div className="h-4 bg-melo-purple/10 rounded-md w-5/6 mb-6"></div>
        <div className="flex flex-wrap gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 bg-melo-purple/15 rounded-full w-20"></div>
          ))}
        </div>
        <div className="h-5 bg-melo-purple/10 rounded-md w-1/4 mb-3"></div>
        <div className="w-full bg-melo-purple/5 rounded-full h-3">
          <div className="bg-melo-purple/30 h-3 rounded-full w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div 
      className="glass-panel rounded-xl p-8 w-full max-w-2xl mx-auto animate-fade-up hover-scale"
      style={{ animationDelay: '0.3s' }}
    >
      <h2 className="text-2xl font-bold mb-4 gradient-text">
        {result.mood}
      </h2>
      
      <p className="text-muted-foreground mb-6">
        {result.description}
      </p>
      
      <div className="mb-6">
        <div className="text-sm font-medium mb-2">Dominant Colors</div>
        <div className="flex flex-wrap gap-2">
          {result.dominantColors.map((color, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 p-1 pl-2 pr-3 rounded-full bg-secondary"
            >
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-xs font-medium">{color}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="text-sm font-medium mb-2">Tags</div>
        <div className="flex flex-wrap gap-2">
          {result.tags.map((tag, index) => (
            <span 
              key={index}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium",
                "bg-melo-purple/10 text-melo-purple-dark",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Intensity</span>
          <span className="text-sm text-muted-foreground">{result.intensityScore}/10</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-melo-blue to-melo-purple h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${(result.intensityScore / 10) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MoodAnalysis;
