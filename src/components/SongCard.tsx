import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { YouTubeEmbed } from './YouTubeEmbed';
import { getYoutubeVideoId } from '../utils/youtube';
import type { YearTheme } from '../utils/themes';

interface SongCardProps {
  position: number;
  title: string;
  artist: string;
  album: string;
  youtubeUrl: string;
  albumCover: string;
  genre: string;
  theme: YearTheme;
}

export function SongCard({ position, title, artist, album, youtubeUrl, albumCover, genre, theme }: SongCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYoutubeVideoId(youtubeUrl);

  return (
    <div className={`group animate-fade-in rounded-lg ${theme.cardBg} p-6 shadow-lg transition-all hover:shadow-xl ${theme.accent}`}>
      <div className="flex items-start gap-4">
        <span className={`text-4xl font-bold ${theme.numberColor}`}>#{position}</span>
        <div className="flex-1">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className={`text-xl font-semibold ${theme.text}`}>{title}</h3>
              <p className="text-gray-600">{artist}</p>
              <p className="text-sm text-gray-500">{album} ({genre})</p>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`mt-2 inline-flex items-center gap-2 rounded-md ${theme.buttonBg} px-3 py-1 text-sm ${theme.buttonText} ${theme.buttonHoverBg}`}
              >
                {isPlaying ? (
                  <>
                    <X className="h-4 w-4" />
                    Close Player
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    Play Song
                  </>
                )}
              </button>
            </div>
            <img
              src={albumCover}
              alt={`${album} cover`}
              className="h-24 w-24 rounded-lg object-cover shadow-md transition-transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {isPlaying && videoId && (
        <div className="mt-4">
          <YouTubeEmbed videoId={videoId} />
        </div>
      )}
    </div>
  );
}