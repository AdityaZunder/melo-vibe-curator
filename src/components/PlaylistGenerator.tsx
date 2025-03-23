
import React, { useState } from 'react';
import { ExternalLink, Music, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface GeneratedTrack {
  id: string;
  name: string;
  artist: string;
  albumArt: string;
}

interface PlaylistGeneratorProps {
  tracks: GeneratedTrack[];
  isGenerating: boolean;
  playlistUrl: string | null;
  onGeneratePlaylist: () => void;
}

const PlaylistGenerator: React.FC<PlaylistGeneratorProps> = ({
  tracks,
  isGenerating,
  playlistUrl,
  onGeneratePlaylist,
}) => {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  if (!tracks.length && !isGenerating) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-2xl font-bold mb-2">Your Curated Playlist</h2>
        <p className="text-muted-foreground">
          Based on your image vibe and music taste.
        </p>
      </div>
      
      {isGenerating ? (
        <div className="glass-panel rounded-xl p-8 text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col items-center">
            <Loader2 className="w-10 h-10 text-melo-purple animate-spin mb-4" />
            <h3 className="text-lg font-semibold mb-1">Generating Your Perfect Playlist</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Our AI is crafting a unique playlist that matches your image's vibe with your music preferences.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-6">
          <div 
            className="glass-panel rounded-xl p-6 animate-fade-up hover-scale"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tracks.map((track, index) => (
                <div 
                  key={track.id}
                  className={cn(
                    "flex items-center gap-4 p-3 transition-all duration-300 hover:bg-melo-purple/5 rounded-lg cursor-pointer",
                    "animate-fade-in border border-transparent",
                    activeTrack === track.id ? "border-melo-purple/50 bg-melo-purple/5" : ""
                  )}
                  style={{ animationDelay: `${0.05 * index}s` }}
                  onClick={() => setActiveTrack(track.id === activeTrack ? null : track.id)}
                >
                  <div className="flex-shrink-0">
                    <img 
                      src={track.albumArt} 
                      alt={track.name} 
                      className="w-12 h-12 rounded-md object-cover shadow-md"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium truncate">{track.name}</h4>
                    <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="glass-panel rounded-xl p-6 text-center animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            {playlistUrl ? (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <Music className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  Your Playlist is Ready!
                </h3>
                <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                  Your curated playlist has been created on Spotify and is ready to play.
                </p>
                <a
                  href={playlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ExternalLink size={18} />
                  <span>Open in Spotify</span>
                </a>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-melo-purple/10 flex items-center justify-center mb-4">
                  <Music className="w-8 h-8 text-melo-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  Ready to Create Your Playlist?
                </h3>
                <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                  We'll add these tracks to a new Spotify playlist that matches your image's vibe.
                </p>
                <button
                  onClick={onGeneratePlaylist}
                  className="btn-gradient flex items-center gap-2"
                >
                  <Music size={18} />
                  <span>Create Spotify Playlist</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistGenerator;
