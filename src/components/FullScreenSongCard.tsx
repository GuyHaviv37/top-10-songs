import { useState } from 'react';
import { Play, X, ChevronDown, ChevronUp } from 'lucide-react';
import { YouTubeEmbed } from './YouTubeEmbed';
import { getYoutubeVideoId } from '../utils/youtube';
import type { YearTheme } from '../utils/themes';

interface FullScreenSongCardProps {
    position: number;
    title: string;
    artist: string;
    album: string;
    youtubeUrl: string;
    albumCover: string;
    genre: string;
    theme: YearTheme;
    isLast: boolean;
    onScrollNext?: () => void;
    onScrollBack?: () => void;
    showScrollIndicator?: boolean;
}

export function FullScreenSongCard({
    position,
    title,
    artist,
    album,
    youtubeUrl,
    albumCover,
    genre,
    theme,
    isLast,
    onScrollNext,
    onScrollBack,
    showScrollIndicator = true
}: FullScreenSongCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = getYoutubeVideoId(youtubeUrl);

    return (
        <div
            className="relative flex h-screen w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{
                opacity: 0,
                animation: 'fadeSlideIn 0.6s ease-out forwards',
                animationDelay: '0.2s'
            }}
        >
            {onScrollBack && (
                <button
                    onClick={onScrollBack}
                    className={`absolute top-16 left-1/2 transform -translate-x-1/2 ${theme.text} opacity-70 hover:opacity-100 transition-all hover:scale-110 animate-bounce`}
                    aria-label="Scroll to previous song"
                >
                    <ChevronUp className="h-10 w-10" />
                </button>
            )}


            {/* Main Content Container */}
            <div className={`w-full max-w-6xl relative`}>
                {isLast && (
                    <div
                        className={`text-center opacity-90 ${theme.text} z-10 mb-8`}
                        style={{
                            opacity: 0,
                            animation: 'fadeSlideIn 0.5s ease-out forwards',
                            animationDelay: '0.4s'
                        }}
                    >
                        <div className="text-2xl sm:text-3xl font-bold tracking-wider">
                            🏆 Song of the Year 🏆
                        </div>
                        <div className="mt-2 h-1 mx-auto w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                    </div>
                )}
                <div className={`rounded-2xl ${theme.cardBg} p-6 sm:p-8 lg:p-12 shadow-2xl transition-all ${isLast ? 'shadow-[0_0_40px_0px_rgba(255,215,0,0.4)] ring-4 ring-yellow-400/30' : ''
                    }`}>
                    {/* Top Section: Song Info and Album Cover */}
                    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
                        {/* Left: Song Information */}
                        <div className="flex-1 w-full">
                            <div className="flex items-start gap-4">
                                <span className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${theme.numberColor} ${isLast ? 'text-yellow-400' : ''
                                    }`}>
                                    #{position.toString().padStart(2, '0')}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${theme.text} mb-2 break-words`}>
                                        {title}
                                    </h2>
                                    <p className={`text-lg sm:text-xl ${theme.text} opacity-90 mb-1`}>
                                        {artist}
                                    </p>
                                    <div className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-600">
                                        <span>{album}</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span>{genre}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Play Button */}
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className={`mt-6 inline-flex items-center gap-2 rounded-lg ${theme.buttonBg} px-6 py-3 text-base sm:text-lg font-semibold ${theme.buttonText} ${theme.buttonHoverBg} transition-all hover:scale-105 shadow-lg`}
                            >
                                {isPlaying ? (
                                    <>
                                        <X className="h-5 w-5" />
                                        Close Player
                                    </>
                                ) : (
                                    <>
                                        <Play className="h-5 w-5" />
                                        Play Song
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Right: Album Cover */}
                        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                            <img
                                src={albumCover}
                                alt={`${album} cover`}
                                className={`h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-2xl object-cover shadow-2xl transition-transform hover:scale-105 ${isLast ? 'ring-4 ring-yellow-400/50' : ''
                                    }`}
                            />
                        </div>
                    </div>

                    {/* YouTube Embed */}
                    {isPlaying && videoId && (
                        <div
                            className="mt-8"
                            style={{
                                opacity: 0,
                                animation: 'fadeSlideIn 0.4s ease-out forwards'
                            }}
                        >
                            <YouTubeEmbed videoId={videoId} />
                        </div>
                    )}
                </div>
            </div>

            {/* Scroll Down Indicator */}
            {showScrollIndicator && onScrollNext && (
                <button
                    onClick={onScrollNext}
                    className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${theme.text} opacity-70 hover:opacity-100 transition-all hover:scale-110 animate-bounce`}
                    aria-label="Scroll to next song"
                >
                    <ChevronDown className="h-10 w-10" />
                </button>
            )}
        </div>
    );
}
