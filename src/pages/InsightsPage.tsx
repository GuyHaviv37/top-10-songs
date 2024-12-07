import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { getGenreCounts } from '../data/insights';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function InsightsPage() {
    const genreCounts = getGenreCounts();

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

                    <h2 className="mt-12">Key Observations</h2>
                    <ul>
                        <li>Hip-hop dominated the selections during 2018-2019 with 8-9 songs per year</li>
                        <li>Indie music has seen a significant rise in recent years (2022-2023), making up 60% of selections</li>
                        <li>The trends appear to be inverse of each other, showing a clear shift in musical taste</li>
                    </ul>

                    <h2>Genre Evolution</h2>
                    <p>
                        The data reveals a fascinating transformation in musical preferences over the years.
                        Starting with a strong foundation in hip-hop during the late 2010s, there's been a
                        gradual shift towards indie music, particularly indie rock and folk, in recent years.
                        This evolution suggests an expanding musical palette and an increasing appreciation
                        for alternative sounds and styles.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InsightsPage;