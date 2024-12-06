import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { songsByYear } from '../data/songs';
import { yearThemes } from '../utils/themes';
import type { Year } from '../data/years';
import { DecoratedSongCard } from '../components/DecoratedSongCard';

export function YearPage() {
  const { year } = useParams<{ year: string }>();
  const yearNum = parseInt(year || '', 10) as Year;
  const songs = [...(songsByYear[yearNum] || [])].reverse();
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
          {songs.length === 0 ? (
            <h2 className={`text-3xl font-bold text-center ${theme.text}`}>
              Coming Soon...
            </h2>
          ) : (
            songs.map((song, index) => (
              <>
                {songs.length - index === 1 && (
                  <div
                    className={`text-center mb-12 opacity-90 ${theme.text}`}
                    style={{
                      opacity: 0,
                      animation: 'fadeSlideIn 0.5s ease-out forwards',
                      animationDelay: '0.3s'
                    }}
                  >
                    <div className="text-3xl font-bold tracking-wider">
                      Song of the Year
                    </div>
                    <div className="mt-2 h-1 mx-auto w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                  </div>
                )}
                <DecoratedSongCard
                  key={index}
                  {...song}
                  position={songs.length - index}
                  theme={theme}
                  isLast={songs.length - index === 1}
                />
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
}