import { ChevronDown, ChevronUp } from 'lucide-react';
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
                    className={`hidden sm:block absolute top-16 left-1/2 transform -translate-x-1/2 ${theme.text} opacity-70 hover:opacity-100 transition-all hover:scale-110 animate-bounce`}
                    aria-label="Scroll to previous song"
                >
                    <ChevronUp className="h-10 w-10" />
                </button>
            )}


            {/* Main Content Container */}
            <div className={`w-full max-w-6xl relative`}>
                {/* Song of the Year Badge */}
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

                <div className={`rounded-2xl ${theme.cardBg} shadow-2xl transition-all overflow-hidden ${isLast ? 'shadow-[0_0_40px_0px_rgba(255,215,0,0.4)] ring-4 ring-yellow-400/30' : ''
                    }`}>
                    {/* Mobile Layout (< sm) */}
                    <div className="block sm:hidden p-6 border-b border-gray-200/20">
                        {/* Row 1: Rank + Small Album Art */}
                        <div className="flex justify-between mb-4">
                            <span className={`text-5xl font-bold ${theme.numberColor} ${isLast ? 'text-yellow-400' : ''
                                }`}>
                                #{position.toString().padStart(2, '0')}
                            </span>
                            <img
                                src={albumCover}
                                alt={`${album} cover`}
                                className={`h-20 w-20 rounded-lg object-cover shadow-lg ${isLast ? 'ring-2 ring-yellow-400/50' : ''
                                    }`}
                            />
                        </div>

                        {/* Row 2: All Info Stacked */}
                        <div>
                            <h2 className={`text-2xl font-bold ${theme.text} mb-1 break-words leading-tight`}>
                                {title}
                            </h2>
                            <p className={`text-lg ${theme.text} opacity-90 mb-2 font-medium`}>
                                {artist}
                            </p>
                            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                                <span>{album}</span>
                                <span>•</span>
                                <span>{genre}</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout (≥ sm) - Headliner Style */}
                    <div className="hidden sm:flex items-center gap-6 lg:gap-8 p-8 lg:p-10 border-b border-gray-200/20">
                        {/* Rank Number */}
                        <div className="flex-shrink-0">
                            <span className={`text-7xl lg:text-8xl font-bold ${theme.numberColor} ${isLast ? 'text-yellow-400' : ''
                                }`}>
                                #{position.toString().padStart(2, '0')}
                            </span>
                        </div>

                        {/* Title & Artist Info */}
                        <div className="flex-1 min-w-0">
                            <h2 className={`text-3xl lg:text-4xl font-bold ${theme.text} mb-2 break-words leading-tight`}>
                                {title}
                            </h2>
                            <p className={`text-2xl ${theme.text} opacity-90 mb-2 font-medium`}>
                                {artist}
                            </p>
                            <div className="flex flex-wrap gap-2 text-base text-gray-500">
                                <span>{album}</span>
                                <span>•</span>
                                <span>{genre}</span>
                            </div>
                        </div>

                        {/* Album Cover */}
                        <div className="flex-shrink-0">
                            <img
                                src={albumCover}
                                alt={`${album} cover`}
                                className={`h-40 w-40 lg:h-48 lg:w-48 rounded-xl object-cover shadow-2xl transition-transform hover:scale-105 ${isLast ? 'ring-4 ring-yellow-400/50' : ''
                                    }`}
                            />
                        </div>
                    </div>

                    {/* YouTube Embed Section */}
                    {videoId && (
                        <div
                            className="p-6 sm:p-8 lg:p-10 bg-black/5"
                            style={{
                                opacity: 0,
                                animation: 'fadeSlideIn 0.4s ease-out forwards',
                                animationDelay: '0.3s'
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
                    className={`hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 ${theme.text} opacity-70 hover:opacity-100 transition-all hover:scale-110 animate-bounce`}
                    aria-label="Scroll to next song"
                >
                    <ChevronDown className="h-10 w-10" />
                </button>
            )}
        </div>
    );
}
