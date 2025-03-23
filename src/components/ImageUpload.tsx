
import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  onImageSelected: (file: File) => void;
  isAnalyzing: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected, isAnalyzing }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    handleFile(file);
  };

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Create preview URL
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Call the parent callback
    onImageSelected(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (!file) return;
    
    handleFile(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-2xl font-bold mb-2">Upload an Image</h2>
        <p className="text-muted-foreground">
          We'll analyze the mood and create a playlist that matches the vibe.
        </p>
      </div>
      
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 animate-fade-up",
          "flex flex-col items-center justify-center cursor-pointer text-center",
          "min-h-[300px] glass-panel hover-scale",
          isDragging ? "border-melo-purple bg-melo-purple/5" : "border-melo-purple/20",
          isAnalyzing ? "opacity-50 pointer-events-none" : "opacity-100",
        )}
        style={{ animationDelay: '0.2s' }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          disabled={isAnalyzing}
        />
        
        {previewUrl ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="max-h-[250px] max-w-full object-contain rounded-lg" 
            />
            {isAnalyzing && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border-4 border-melo-purple border-t-transparent rounded-full animate-spin mb-4"></div>
                  <span className="text-sm font-medium">Analyzing image...</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="w-20 h-20 rounded-full bg-melo-purple/10 flex items-center justify-center mb-4">
              <ImageIcon className="w-10 h-10 text-melo-purple" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Drag and drop an image</h3>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Or click to browse. We support JPG, PNG and GIF files.
            </p>
            <button 
              className="btn-gradient flex items-center gap-2"
              type="button"
              disabled={isAnalyzing}
            >
              <Upload size={16} />
              <span>Select Image</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
