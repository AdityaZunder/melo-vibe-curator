
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
    </div>
  );
};

export default MoodAnalysis;
