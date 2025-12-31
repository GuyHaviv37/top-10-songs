import { Music, X } from 'lucide-react';
import { YearTheme } from '../utils/themes';

const SpotifyPlaylistHint = ({ theme, hideHint }: { theme: YearTheme, hideHint: () => void }) => {    
    
    return (
        <div
            className={`fixed top-20 right-4 z-40 ${theme.cardBg} rounded-lg shadow-lg p-3 pr-8 max-w-xs border border-1-4 border-lime-500`}
            style={{
                opacity: 0,
                animation: 'fadeSlideIn 0.6s ease-out forwards',
                animationDelay: '0.5s'
            }}
        >
            <button
                onClick={hideHint}
                className={`absolute top-2 right-2 ${theme.text} opacity-60 hover:opacity-100 transition-opacity`}
                aria-label="Dismiss hint"
            >
                <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
                <Music className={`h-4 w-4 ${theme.text} opacity-90`} />
                <p className={`text-xs sm:text-sm ${theme.text} opacity-90`}>
                    Full Spotify playlist available at the end
                </p>
            </div>
        </div>
    )
}

export default SpotifyPlaylistHint;