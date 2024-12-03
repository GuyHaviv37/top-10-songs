import { Year } from '../data/years';
import { yearThemes } from '../utils/themes';
import { YearCard } from './YearCard';

export function FeaturedYearCard({ year }: { year: Year }) {
    const theme = yearThemes[year];
    const themeBg = theme.background
    return (
        <div className={`transform transition-all duration-300 hover:scale-105 bg-gradient-to-r ${themeBg} p-6 rounded-lg shadow-lg`}>
            <YearCard year={year} />
        </div>
    );
} 