
import React, { useState } from 'react';
import { Music, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpotifyAuthProps {
  onLogin: () => void;
  isLoggedIn: boolean;
}

const SpotifyAuth: React.FC<SpotifyAuthProps> = ({ onLogin, isLoggedIn }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-2xl font-bold mb-2">Connect with Spotify</h2>
        <p className="text-muted-foreground">
          Connect your Spotify account to access your top tracks and create playlists.
        </p>
      </div>
      
      <div 
        className={cn(
          "glass-panel rounded-xl p-8 text-center animate-fade-up",
          isLoggedIn ? "border-green-500/20 bg-green-50/30" : ""
        )}
        style={{ animationDelay: '0.2s' }}
      >
        <div className="flex flex-col items-center">
          {isLoggedIn ? (
            <>
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <Music className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-green-600">
                Connected to Spotify
              </h3>
              <p className="text-muted-foreground mb-4">
                Your account is connected and ready to use.
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-melo-purple/10 flex items-center justify-center mb-4">
                <Music className="w-8 h-8 text-melo-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-1">
                Connect Your Spotify Account
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                We'll use this to access your listening preferences and create custom playlists for you.
              </p>
              <button
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={onLogin}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="relative w-5 h-5">
                  <LogIn 
                    size={20} 
                    className={cn(
                      "absolute inset-0 transition-all duration-300",
                      isHovering ? "opacity-0 translate-x-2" : "opacity-100"
                    )}
                  />
                  <svg 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    className={cn(
                      "absolute inset-0 transition-all duration-300 fill-current",
                      isHovering ? "opacity-100" : "opacity-0 -translate-x-2"
                    )}
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </div>
                <span>Connect with Spotify</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotifyAuth;
