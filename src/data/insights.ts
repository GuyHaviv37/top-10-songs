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

// Add this helper function before InsightsPage
export function getArtistCounts() {
    const counts: { [key: string]: number } = {};

    Object.values(songsByYear).forEach(songs => {
        songs.forEach(song => {
            // Remove featuring artists for counting
            const mainArtist = song.artist.split('(')[0].trim();
            counts[mainArtist] = (counts[mainArtist] || 0) + 1;
        });
    });

    // Split into frequent artists (>=2) and others
    const frequentArtists = Object.entries(counts)
        .filter(([_, count]) => count >= 2)
        .sort((a, b) => b[1] - a[1]);

    const otherCount = Object.values(counts)
        .filter(count => count < 2)
        .reduce((sum, count) => sum + count, 0);

    return {
        labels: [...frequentArtists.map(([artist]) => artist), 'Other'],
        data: [...frequentArtists.map(([_, count]) => count), otherCount]
    };
}