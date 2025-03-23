
import { Track } from '@/components/TopTracks';
import { GeneratedTrack } from '@/components/PlaylistGenerator';
import { MoodAnalysisResult } from '@/components/MoodAnalysis';

// Simulated auth function - in real app, this would initiate Spotify OAuth flow
export const authenticateWithSpotify = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // Simulate auth delay
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

// Simulated function to get user's top tracks from Spotify
export const getUserTopTracks = async (): Promise<Track[]> => {
  // In a real implementation, this would call the Spotify API
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      // Mock top tracks data
      const mockTracks: Track[] = [
        {
          id: '1',
          name: 'Blinding Lights',
          artist: 'The Weeknd',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a'
        },
        {
          id: '2',
          name: 'Bad Guy',
          artist: 'Billie Eilish',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b2732a038d3bf856d7d5aa3a6ef0'
        },
        {
          id: '3',
          name: 'Don\'t Start Now',
          artist: 'Dua Lipa',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d9a8f9'
        },
        {
          id: '4',
          name: 'Watermelon Sugar',
          artist: 'Harry Styles',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f'
        },
        {
          id: '5',
          name: 'Levitating',
          artist: 'Dua Lipa ft. DaBaby',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b2739b347a1031d469b790269e3a'
        },
        {
          id: '6',
          name: 'Save Your Tears',
          artist: 'The Weeknd',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a'
        },
        {
          id: '7',
          name: 'drivers license',
          artist: 'Olivia Rodrigo',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a'
        },
        {
          id: '8',
          name: 'Montero (Call Me By Your Name)',
          artist: 'Lil Nas X',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273be82673b5f79d9658ec0a d7f'
        },
        {
          id: '9',
          name: 'Stay',
          artist: 'The Kid LAROI & Justin Bieber',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273f4b9759945e7a3a6f55841ad'
        },
        {
          id: '10',
          name: 'good 4 u',
          artist: 'Olivia Rodrigo',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b2737dbc2894c28c2316ba3ae71c'
        }
      ];
      
      resolve(mockTracks);
    }, 2000); // Simulate 2 second API call
  });
};

// Simulated function to generate a playlist based on mood and user preferences
export const generatePlaylist = async (
  moodAnalysis: MoodAnalysisResult,
  userTracks: Track[]
): Promise<GeneratedTrack[]> => {
  // In a real implementation, this would use the Spotify recommendations API
  // based on the mood analysis and user's top tracks as seed data
  
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      // Template tracks for different moods
      const tracksByMood: Record<string, GeneratedTrack[]> = {
        'Serene & Peaceful': [
          {
            id: 's1',
            name: 'Gymnopédie No. 1',
            artist: 'Erik Satie',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b2739991cc7eb5d5573ce1cf389f'
          },
          {
            id: 's2',
            name: 'Weightless',
            artist: 'Marconi Union',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b2731a5eeaab9d7236c1517396dd'
          },
          {
            id: 's3',
            name: 'Horizon Variations',
            artist: 'Max Richter',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b273a0ca870c10cfac7d9ea4143e'
          },
          {
            id: 's4',
            name: 'Claire de Lune',
            artist: 'Claude Debussy',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b273d8a75d3c2778510d7d2c6ca6'
          },
        ],
        'Energetic & Vibrant': [
          {
            id: 'e1',
            name: 'Physical',
            artist: 'Dua Lipa',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe4197ede848be'
          },
          {
            id: 'e2',
            name: 'Dynamite',
            artist: 'BTS',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b2737d35d503ceee6331ce3744b2'
          },
          {
            id: 'e3',
            name: 'Dance Monkey',
            artist: 'Tones and I',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b27348a7aed5c18bbbd83e76d86e'
          },
          {
            id: 'e4',
            name: 'Can\'t Stop the Feeling!',
            artist: 'Justin Timberlake',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b273b4c26a947228e3862d62863f'
          },
        ],
        'Nostalgic & Warm': [
          {
            id: 'n1',
            name: 'Vienna',
            artist: 'Billy Joel',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2'
          },
          {
            id: 'n2',
            name: 'Dreams',
            artist: 'Fleetwood Mac',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b2739e2f95ae77cf436017ada9cb'
          },
          {
            id: 'n3',
            name: 'September',
            artist: 'Earth, Wind & Fire',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b2736e9941f4e9abef3d569dc0bc'
          },
          {
            id: 'n4',
            name: 'Landslide',
            artist: 'Fleetwood Mac',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b273f9f1d613f1ac9ddcabdc56b5'
          },
        ],
        'Melancholic & Reflective': [
          {
            id: 'm1',
            name: 'Liability',
            artist: 'Lorde',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b27334828dde4dfd53a51ffb29be'
          },
          {
            id: 'm2',
            name: 'Exile (feat. Bon Iver)',
            artist: 'Taylor Swift',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b273c956f9afc5abe7b9e99c1718'
          },
          {
            id: 'm3',
            name: 'Someone You Loved',
            artist: 'Lewis Capaldi',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b273fc2101e6889d6ce9025f85f2'
          },
          {
            id: 'm4',
            name: 'Motion Sickness',
            artist: 'Phoebe Bridgers',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a'
          },
        ],
        'Mysterious & Intriguing': [
          {
            id: 'my1',
            name: 'Nightmare',
            artist: 'Halsey',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b27308e36752c33faa432cb7afd3'
          },
          {
            id: 'my2',
            name: 'Seven Nation Army',
            artist: 'The White Stripes',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b273a7cea6140fd0e25963d2b507'
          },
          {
            id: 'my3',
            name: 'Bad Guy',
            artist: 'Billie Eilish',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b2732a038d3bf856d7d5aa3a6ef0'
          },
          {
            id: 'my4',
            name: 'Another Brick in the Wall, Pt. 2',
            artist: 'Pink Floyd',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b273883b942ae3c39cffa453e394'
          },
        ]
      };
      
      // Get the base tracks for the identified mood
      let baseTracks = tracksByMood[moodAnalysis.mood] || tracksByMood['Energetic & Vibrant'];
      
      // Create a full playlist with a mix of mood-based tracks and some of the user's top tracks
      // that would match the mood (in reality, this would use Spotify's recommendation system)
      const generatedTracks: GeneratedTrack[] = [
        ...baseTracks,
        ...userTracks.slice(0, 4).map(track => ({
          id: `user-${track.id}`,
          name: track.name,
          artist: track.artist,
          albumArt: track.albumArt
        })),
        // Add more tracks to reach 20
        {
          id: 'g1',
          name: 'Sunflower',
          artist: 'Post Malone, Swae Lee',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f'
        },
        {
          id: 'g2',
          name: 'Adore You',
          artist: 'Harry Styles',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273d51f3370c3e06de1c1d01bb4'
        },
        {
          id: 'g3',
          name: 'Circles',
          artist: 'Post Malone',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273b3c3eadcfd11bba39488332d'
        },
        {
          id: 'g4',
          name: 'Memories',
          artist: 'Maroon 5',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273c0e7bf5cdd630f314f20586a'
        },
        {
          id: 'g5',
          name: 'Before You Go',
          artist: 'Lewis Capaldi',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273fc2101e6889d6ce9025f85f2'
        },
        {
          id: 'g6',
          name: 'Stuck with U',
          artist: 'Ariana Grande & Justin Bieber',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273a7c4f5bc47c721b6dc19fe39'
        },
        {
          id: 'g7',
          name: 'Savage Love',
          artist: 'Jawsh 685, Jason Derulo',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273bb5c51c9737e5049e6bf11b0'
        },
        {
          id: 'g8',
          name: 'Kings & Queens',
          artist: 'Ava Max',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b2733faf4487a04097359e6976c9'
        },
        {
          id: 'g9',
          name: 'Roses',
          artist: 'SAINt JHN, Imanbek',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b2735f5977f8d2727f013e61af68'
        },
        {
          id: 'g10',
          name: 'Mood',
          artist: '24kGoldn, iann dior',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273d14a0bcb6f6008e5b96eeaff'
        },
        {
          id: 'g11',
          name: 'What You Know Bout Love',
          artist: 'Pop Smoke',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b2732453af58f62afb55edaa2bc3'
        },
        {
          id: 'g12',
          name: 'Lonely',
          artist: 'Justin Bieber & benny blanco',
          albumArt: 'https://i.scdn.co/image/ab67616d0000b273ea9eef15a48464577c2c7b62'
        }
      ];
      
      // Take only the first 20 tracks
      resolve(generatedTracks.slice(0, 20));
    }, 3000); // Simulate 3 second API call
  });
};

// Simulated function to create a Spotify playlist
export const createSpotifyPlaylist = async (
  tracks: GeneratedTrack[],
  moodName: string
): Promise<string> => {
  // In a real implementation, this would call the Spotify API to create a playlist
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      // Mock Spotify playlist URL
      // In a real implementation, this would be the actual URL returned by the Spotify API
      resolve('https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd');
    }, 2000); // Simulate 2 second API call
  });
};
