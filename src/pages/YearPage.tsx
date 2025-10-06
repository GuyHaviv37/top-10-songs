import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { songsByYear } from '../data/songs';
import { yearThemes } from '../utils/themes';
import type { Year } from '../data/years';
import { FullScreenSongCard } from '../components/FullScreenSongCard';

export function YearPage() {
  const { year } = useParams<{ year: string }>();
  const yearNum = parseInt(year || '', 10) as Year;
  const songs = [...(songsByYear[yearNum] || [])].reverse();
  const theme = yearThemes[yearNum];
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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
          songs.map((song, index) => (
            <section
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="snap-start snap-always"
            >
              <FullScreenSongCard
                {...song}
                position={songs.length - index}
                theme={theme}
                isLast={songs.length - index === 1}
                onScrollNext={index < songs.length - 1 ? () => scrollToSection(index + 1) : undefined}
                showScrollIndicator={index < songs.length - 1}
              />
            </section>
          ))
        )}
      </div>
    </div>
  );
}