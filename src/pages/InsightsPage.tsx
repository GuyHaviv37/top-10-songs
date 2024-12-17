import { Link } from 'react-router-dom';
import { ArrowLeft, Headphones, TrendingUp } from 'lucide-react';
import { Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
} from 'chart.js';
import { getArtistCounts, getGenreCounts } from '../data/insights';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Filler,
    Title,
    Tooltip,
    Legend
);

function InsightsPage() {
    const genreCounts = getGenreCounts();
    const artistCounts = getArtistCounts();

    const data = {
        labels: genreCounts.map(count => count.year.toString()),
        datasets: [
            {
                label: 'Hip Hop Songs',
                data: genreCounts.map(count => count.hipHop),
                borderColor: '#38bdf8', // sky-400
                backgroundColor: 'rgba(56, 189, 248, 0.5)',
                tension: 0.3,
            },
            {
                label: 'Indie Songs',
                data: genreCounts.map(count => count.indie),
                borderColor: '#f472b6', // pink-400
                backgroundColor: 'rgba(244, 114, 182, 0.5)',
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: '#e2e8f0' // slate-200
                }
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 1,
                    color: '#e2e8f0' // slate-200
                },
                grid: {
                    color: 'rgba(226, 232, 240, 0.1)' // slate-200 with opacity
                }
            },
            x: {
                ticks: {
                    color: '#e2e8f0' // slate-200
                },
                grid: {
                    color: 'rgba(226, 232, 240, 0.1)' // slate-200 with opacity
                }
            }
        }
    };

    const pieData = {
        labels: artistCounts.labels,
        datasets: [{
            data: artistCounts.data,
            backgroundColor: [
                '#38bdf8', // sky-400
                '#f472b6', // pink-400
                '#4ade80', // green-400
                '#fb923c', // orange-400
                '#a78bfa', // violet-400
                '#f87171', // red-400
                '#facc15', // yellow-400
                '#2dd4bf', // teal-400
                '#e879f9', // fuchsia-400
                '#60a5fa', // blue-400 (for Other)
                '#c084fc', // purple-400 (for Other)
                '#fb7185', // rose-400 (for Other)
                '#94a3b8', // slate-400 (for Other)
            ],
            borderColor: '#1e293b', // slate-800
            borderWidth: 2,
        }],
    };

    const getLegendFontSize = () => {
        if (typeof window !== 'undefined') {
            return window.matchMedia('(min-width: 640px)').matches ? 13 : 11;
        }
        return 11;
    };

    const getContainerHeight = () => {
        if (typeof window !== 'undefined') {
            return window.matchMedia('(min-width: 640px)').matches ? 550 : 450;
        }
        return 450;
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    color: '#e2e8f0',
                    padding: 15,
                    font: {
                        size: getLegendFontSize()
                    },
                    boxWidth: 12
                }
            },
            title: {
                display: true,
                text: 'Most Featured Artists',
                color: '#e2e8f0',
                font: {
                    size: 16
                },
                padding: 15
            }
        },
        layout: {
            padding: {
                left: 15,
                right: 15,
                bottom: 20,
                top: 20
            }
        }
    };

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
                    <h1 className="flex items-center gap-3">
                        Musical Insights
                        <TrendingUp className="h-8 w-8" />
                    </h1>

                    <p>
                        As each year I compiled my top 10 favorite songs, I had to try and look deeper into the data. Looking back reveals interesting patterns in how my musical taste has evolved and changed over time. Here are some of the interesting patterns I found.
                    </p>

                    <div className="mt-8 p-6 bg-slate-800/50 rounded-lg">
                        <Line options={options} data={data} />
                    </div>

                    <h2>Genre Evolution</h2>
                    <p>
                        The data reveals a fascinating transformation in musical preferences over the years.
                        Starting with a strong foundation in hip-hop during the late 2010s, there's been a
                        gradual shift towards indie music, particularly indie rock and folk, in recent years.
                        This trend could indicate a return to my musical roots of Hard Rock and Britpop from the highschool years.
                        It could also indicate of a general trend in the music industry where in the late 2010s Hip Hop ruled the charts, while Pop takes back over in recent years.
                    </p>
                    <div className="flex items-center justify-center gap-4 my-8">
                        <div className="h-px bg-slate-600 flex-1" />
                        <Headphones className="w-5 h-5 text-slate-400" />
                        <div className="h-px bg-slate-600 flex-1" />
                    </div>


                    <div
                        className="mt-8 p-6 bg-slate-800/50 rounded-lg"
                        style={{ height: `${getContainerHeight()}px` }}
                    >
                        <Pie
                            options={pieOptions}
                            data={pieData}
                        />
                    </div>
                    <h2>Artist Frequency</h2>
                    <p>
                        Looking at the most frequently appearing artists reveals an interesting pattern - while Joji,
                        Drake, and Kanye West emerge as the top three most featured artists, they represent a small
                        minority in an otherwise incredibly diverse collection. The fact that only a select few artists
                        appear more than once, with the vast majority appearing just once, demonstrates a commitment
                        to exploring different voices and styles rather than repeatedly returning to the same artists.
                        <br />
                        <span className="text-sm text-slate-400 italic">*This is also a testament that while my favorite artists include Frank Ocean and Kendrick Lamar, they don't release enough music to be featured consistently.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InsightsPage;