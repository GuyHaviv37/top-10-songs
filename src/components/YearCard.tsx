import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import { yearThemes } from '../utils/themes';

interface YearCardProps {
  year: number;
}

export function YearCard({ year }: YearCardProps) {
  const theme = yearThemes[year];
  
  return (
    <Link 
      to={`/year/${year}`}
      className={`group relative block overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl`}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h2 className={`text-4xl font-bold ${theme.text}`}>{year}</h2>
          <CalendarDays className={`h-6 w-6 ${theme.buttonText}`} />
        </div>
        <p className={`mt-2 ${theme.buttonText}`}>View Top 10 Songs</p>
      </div>
      
      <div className={`absolute inset-0 z-0 bg-gradient-to-br ${theme.background} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
      
      <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${theme.background} transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`} />
    </Link>
  );
}