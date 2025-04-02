
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
    </div>
  );
};

export default MoodAnalysis;
