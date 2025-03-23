
import React, { useState } from 'react';
import { toast } from "sonner";
import Header from '@/components/Header';
import ImageUpload from '@/components/ImageUpload';
import MoodAnalysis, { MoodAnalysisResult } from '@/components/MoodAnalysis';
import SpotifyAuth from '@/components/SpotifyAuth';
import TopTracks, { Track } from '@/components/TopTracks';
import PlaylistGenerator, { GeneratedTrack } from '@/components/PlaylistGenerator';
import Footer from '@/components/Footer';
import { analyzeImage } from '@/services/imageAnalysis';
import { 
  authenticateWithSpotify,
  getUserTopTracks,
  generatePlaylist,
  createSpotifyPlaylist
} from '@/services/spotify';

const Index: React.FC = () => {
  // Image and analysis state
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [moodAnalysis, setMoodAnalysis] = useState<MoodAnalysisResult | null>(null);
  
  // Spotify state
  const [isSpotifyLoggedIn, setIsSpotifyLoggedIn] = useState(false);
  const [isLoadingTracks, setIsLoadingTracks] = useState(false);
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  
  // Playlist state
  const [isGeneratingPlaylist, setIsGeneratingPlaylist] = useState(false);
  const [generatedTracks, setGeneratedTracks] = useState<GeneratedTrack[]>([]);
  const [playlistUrl, setPlaylistUrl] = useState<string | null>(null);
  
  // Handle image upload and analysis
  const handleImageSelected = async (file: File) => {
    setSelectedImage(file);
    setIsAnalyzing(true);
    
    try {
      const analysis = await analyzeImage(file);
      setMoodAnalysis(analysis);
      toast.success("Image analysis complete!");
    } catch (error) {
      console.error('Error analyzing image:', error);
      toast.error("Failed to analyze image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };
  
  // Handle Spotify login
  const handleSpotifyLogin = async () => {
    try {
      const success = await authenticateWithSpotify();
      
      if (success) {
        setIsSpotifyLoggedIn(true);
        toast.success("Connected to Spotify!");
        
        // Get user's top tracks after login
        setIsLoadingTracks(true);
        const tracks = await getUserTopTracks();
        setTopTracks(tracks);
        setIsLoadingTracks(false);
      }
    } catch (error) {
      console.error('Error authenticating with Spotify:', error);
      toast.error("Failed to connect to Spotify. Please try again.");
    }
  };
  
  // Handle playlist generation
  const handleGeneratePlaylist = async () => {
    if (!moodAnalysis || !isSpotifyLoggedIn || topTracks.length === 0) {
      toast.error("Please complete image analysis and connect to Spotify first.");
      return;
    }
    
    setIsGeneratingPlaylist(true);
    
    try {
      // Generate tracks based on mood and user's top tracks
      const tracks = await generatePlaylist(moodAnalysis, topTracks);
      setGeneratedTracks(tracks);
      
      // Create a Spotify playlist with the generated tracks
      const playlistLink = await createSpotifyPlaylist(tracks, moodAnalysis.mood);
      setPlaylistUrl(playlistLink);
      
      toast.success("Your playlist is ready!");
    } catch (error) {
      console.error('Error generating playlist:', error);
      toast.error("Failed to generate playlist. Please try again.");
    } finally {
      setIsGeneratingPlaylist(false);
    }
  };
  
  // Determine which steps to show based on current state
  const showMoodAnalysis = moodAnalysis !== null;
  const showSpotifyAuth = showMoodAnalysis && !isSpotifyLoggedIn;
  const showTopTracks = isSpotifyLoggedIn && topTracks.length > 0;
  const showPlaylistGenerator = showTopTracks && moodAnalysis !== null;
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Match Your Mood</span> <br className="md:hidden" />
            <span>with Music</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload an image and we'll analyze its vibe to create the perfect playlist,
            personalized to match your music taste.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Image Upload Section */}
          <section>
            <ImageUpload 
              onImageSelected={handleImageSelected}
              isAnalyzing={isAnalyzing}
            />
          </section>
          
          {/* Mood Analysis Section */}
          {(showMoodAnalysis || isAnalyzing) && (
            <section>
              <MoodAnalysis 
                result={moodAnalysis}
                isLoading={isAnalyzing}
              />
            </section>
          )}
          
          {/* Spotify Auth Section */}
          {(showSpotifyAuth || isSpotifyLoggedIn) && (
            <section>
              <SpotifyAuth 
                onLogin={handleSpotifyLogin}
                isLoggedIn={isSpotifyLoggedIn}
              />
            </section>
          )}
          
          {/* Top Tracks Section */}
          {(showTopTracks || isLoadingTracks) && (
            <section>
              <TopTracks 
                tracks={topTracks}
                isLoading={isLoadingTracks}
              />
            </section>
          )}
          
          {/* Playlist Generator Section */}
          {(showPlaylistGenerator || isGeneratingPlaylist) && (
            <section>
              <PlaylistGenerator 
                tracks={generatedTracks}
                isGenerating={isGeneratingPlaylist}
                playlistUrl={playlistUrl}
                onGeneratePlaylist={handleGeneratePlaylist}
              />
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
