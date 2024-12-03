import { years } from '../data/years';
import { YearCard } from '../components/YearCard';
import { Music, Disc3 } from 'lucide-react';
import { FeaturedYearCard } from '../components/FeaturedYearCard';
import { Link } from 'react-router-dom';

export function HomePage() {
  const latestYear = years[years.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] -z-1" />

      <nav className="absolute top-0 right-0 p-4">
        <Link
          to="/about"
          className="px-4 py-2 font-medium text-gray-600 hover:text-indigo-600 transition-colors"
        >
          About
        </Link>
      </nav>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <Disc3 className="h-12 w-12 animate-spin-slow text-indigo-600" />
            <Music className="h-12 w-12 text-purple-600" />
            <Disc3 className="h-12 w-12 animate-spin-slow text-pink-600" />
          </div>
          <h1 className="mt-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text py-3 text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
            Guy's Top 10 Songs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A musical journey through the years, featuring the tracks that defined each moment
          </p>
        </div>

        <div className="mt-16">
          <FeaturedYearCard year={latestYear} />
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Discover the Hits of Previous Years
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Each year tells a unique story through music.
            <br />
            Click on a year to explore its top tracks.
          </p>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {years.slice(0, years.length - 1).map((year, index) => (
            <div
              key={year}
              className="transform transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fadeSlideIn 0.5s ease-out forwards'
              }}
            >
              <YearCard year={year} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}