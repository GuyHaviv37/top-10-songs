import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { songsByYear } from '../data/songs';
import { SongCard } from '../components/SongCard';
import { yearThemes } from '../utils/themes';
import type { Year } from '../data/years';

export function YearPage() {
  const { year } = useParams<{ year: string }>();
  const yearNum = parseInt(year || '', 10) as Year;
  const songs = (songsByYear[yearNum] || []).toReversed();
  const theme = yearThemes[yearNum];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.background}`}>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`inline-flex items-center text-sm ${theme.buttonText} hover:opacity-75`}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Years
        </Link>
        
        <h1 className={`mt-8 text-4xl font-bold ${theme.text}`}>
          Top 10 Songs of {yearNum}
        </h1>
        
        <div className="mt-12 space-y-8">
          {songs.map((song, index) => (
            <div
              key={index}
              className="transition-all duration-300 hover:translate-x-2"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fadeSlideIn 0.5s ease-out forwards'
              }}
            >
              <SongCard
                position={songs.length - index}
                title={song.title}
                artist={song.artist}
                album={song.album}
                youtubeUrl={song.youtubeUrl}
                albumCover={song.albumCover}
                theme={theme}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}