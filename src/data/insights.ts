import { songsByYear } from './songs';
import { Year } from './years';

interface YearlyGenreCounts {
    year: Year;
    hipHop: number;
    indie: number;
}

const isHipHop = (genre: string): boolean => {
    const hipHopGenres = ['hip hop', 'rap', 'alternative hip hop', 'emo rap', 'gospel rap'];
    return hipHopGenres.some(g => genre.toLowerCase().includes(g));
};

const isIndie = (genre: string): boolean => {
    const indieGenres = ['indie', 'art pop'];
    return indieGenres.some(g => genre.toLowerCase().includes(g));
};

export const getGenreCounts = (): YearlyGenreCounts[] => {
    return Object.entries(songsByYear).map(([year, songs]) => ({
        year: parseInt(year) as Year,
        hipHop: songs.filter(song => isHipHop(song.genre)).length,
        indie: songs.filter(song => isIndie(song.genre)).length,
    })).sort((a, b) => a.year - b.year);
}; 