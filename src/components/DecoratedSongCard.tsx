import { SongCard } from './SongCard';
import type { Song } from '../data/songs';
import type { YearTheme } from '../utils/themes';

interface DecoratedSongCardProps extends Song {
    position: number;
    theme: YearTheme;
    isLast: boolean;
}

export function DecoratedSongCard({ position, theme, isLast, ...song }: DecoratedSongCardProps) {
    return (
        <div
            className={`transition-all duration-300 hover:translate-x-2 ${isLast ? 'transform scale-110 shadow-[0_0_20px_0px_rgba(255,215,0,0.5)] rounded-xl' : ''
                }`}
            style={{
                animationDelay: `${position * 100}ms`,
                opacity: 0,
                animation: 'fadeSlideIn 0.5s ease-out forwards',
                ...(isLast && {
                    background: 'linear-gradient(145deg, rgba(255,215,0,0.2), transparent)',
                })
            }}
        >
            <SongCard {...song} position={position} theme={theme} />
        </div>
    );
} 