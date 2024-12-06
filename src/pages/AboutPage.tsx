import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const aboutContent = `
# Guy's Top 10 Songs

This is a personal collection of my favorite songs from each year, carefully curated to capture the music that defined these moments of my life.

## How It Works

Each year features my top 10 songs that came out that year.  
I did make an expection here or there, if a song was released late in the prior year and it had a great effect on me for the following year.  
**The only real rule to follow** - there can only be one song per artist!
## Why This Project?

I created this site to:
- Document my musical journey through the years
- Share my favorite songs with the people I care about
- Create a time capsule of musical memories
- Maybe later I'll use it to get insights into my music preferences over time
- Try and build a cool static website strictly with AI tools

Feel free to explore the years and discover some new music!
`;

export function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="inline-flex items-center text-sm text-slate-200 hover:opacity-75"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Years
                </Link>

                <div className="mt-8 prose prose-invert prose-slate max-w-none">
                    <ReactMarkdown>{aboutContent}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
} 