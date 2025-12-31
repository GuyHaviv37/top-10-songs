import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronUp } from 'lucide-react';
import { songsByYear } from '../data/songs';
import { yearThemes } from '../utils/themes';
import type { Year } from '../data/years';
import { FullScreenSongCard } from '../components/FullScreenSongCard';
import { spotifyPlaylistsByYear } from '../data/spotify-playlists';
import SpotifyPlaylistHint from '../components/SpotifyPlaylistHint';

export function YearPage() {
  const { year } = useParams<{ year: string }>();
  const yearNum = parseInt(year || '', 10) as Year;
  const songs = [...(songsByYear[yearNum] || [])].reverse();
  const theme = yearThemes[yearNum];
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const SpotifyPlaylist = spotifyPlaylistsByYear[yearNum] || null;
  const [showPlaylistHint, setShowPlaylistHint] = useState(true);


  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`relative bg-gradient-to-br ${theme.background}`}>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className={`inline-flex items-center text-sm font-medium ${theme.buttonText} hover:opacity-75 transition-opacity`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Years
            </Link>
            <h1 className={`text-lg sm:text-xl font-bold ${theme.text}`}>
              Top 10 Songs of {yearNum}
            </h1>
          </div>
        </div>
      </div>

      {/* Scroll Container with Snap Points */}
      <div
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .snap-y::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {songs.length === 0 ? (
          <div className="h-screen flex items-center justify-center">
            <h2 className={`text-3xl font-bold text-center ${theme.text}`}>
              Coming Soon...
            </h2>
          </div>
        ) : (
          <>
            {songs.map((song, index) => {
              const hasNextSection = index < songs.length - 1 || SpotifyPlaylist !== null;
              const isFirstSong = index === 0;
              console.log(isFirstSong, index);
              return (
                <section
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="snap-start snap-always"
                >
                  {isFirstSong && SpotifyPlaylist && showPlaylistHint && (
                    <SpotifyPlaylistHint theme={theme} hideHint={() => setShowPlaylistHint(false)} />
                  )}
                  <FullScreenSongCard
                    {...song}
                    position={songs.length - index}
                    theme={theme}
                    isLast={songs.length - index === 1}
                    onScrollNext={hasNextSection ? () => scrollToSection(index + 1) : undefined}
                    onScrollBack={index > 0 ? () => scrollToSection(index - 1) : undefined}
                    showScrollIndicator={hasNextSection}
                  />
                </section>
              );
            })}
            
            {/* Spotify Playlist Section */}
            {SpotifyPlaylist && (
              <section
                ref={(el) => (sectionRefs.current[songs.length] = el)}
                className="snap-start snap-always"
              >
                <div
                  className="relative flex h-screen w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
                  style={{
                    opacity: 0,
                    animation: 'fadeSlideIn 0.6s ease-out forwards',
                    animationDelay: '0.2s'
                  }}
                >
                  <button
                    onClick={() => scrollToSection(songs.length - 1)}
                    className={`hidden sm:block absolute top-16 left-1/2 transform -translate-x-1/2 ${theme.text} opacity-70 hover:opacity-100 transition-all hover:scale-110 animate-bounce`}
                    aria-label="Scroll to previous song"
                  >
                    <ChevronUp className="h-10 w-10" />
                  </button>

                  <div className="w-full max-w-6xl">
                    <div className={`rounded-2xl ${theme.cardBg} shadow-2xl p-6 sm:p-8 lg:p-10`}>
                      <h2 className={`text-2xl sm:text-3xl font-bold ${theme.text} mb-4 sm:mb-6 text-center`}>
                        Full Playlist on Spotify
                      </h2>
                      <div className="w-full">
                        <SpotifyPlaylist height={352} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}