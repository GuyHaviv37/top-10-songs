import { Year } from "../data/years";

export interface YearTheme {
  background: string;
  cardBg: string;
  accent: string;
  text: string;
  numberColor: string;
  buttonBg: string;
  buttonText: string;
  buttonHoverBg: string;
}

export const yearThemes: Record<Year, YearTheme> = {
  2024: {
    background: 'from-cyan-100 via-blue-200 to-indigo-300',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    accent: 'border-l-4 border-cyan-500',
    text: 'text-cyan-950',
    numberColor: 'text-cyan-400',
    buttonBg: 'bg-cyan-100',
    buttonText: 'text-cyan-700',
    buttonHoverBg: 'hover:bg-cyan-200'
  },
  2023: {
    background: 'from-rose-100 via-pink-100 to-purple-200',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    accent: 'border-l-4 border-rose-500',
    text: 'text-rose-950',
    numberColor: 'text-rose-300',
    buttonBg: 'bg-rose-100',
    buttonText: 'text-rose-700',
    buttonHoverBg: 'hover:bg-rose-200'
  },
  2022: {
    background: 'from-amber-100 via-orange-100 to-yellow-100',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    accent: 'border-l-4 border-amber-500',
    text: 'text-amber-950',
    numberColor: 'text-amber-300',
    buttonBg: 'bg-amber-100',
    buttonText: 'text-amber-700',
    buttonHoverBg: 'hover:bg-amber-200'
  },
  2021: {
    background: 'from-emerald-100 via-green-100 to-teal-100',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    accent: 'border-l-4 border-emerald-500',
    text: 'text-emerald-950',
    numberColor: 'text-emerald-300',
    buttonBg: 'bg-emerald-100',
    buttonText: 'text-emerald-700',
    buttonHoverBg: 'hover:bg-emerald-200'
  },
  2020: {
    background: 'from-sky-100 via-blue-100 to-indigo-100',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    accent: 'border-l-4 border-sky-500',
    text: 'text-sky-950',
    numberColor: 'text-sky-300',
    buttonBg: 'bg-sky-100',
    buttonText: 'text-sky-700',
    buttonHoverBg: 'hover:bg-sky-200'
  },
  2019: {
    background: 'from-violet-100 via-purple-100 to-fuchsia-100',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    accent: 'border-l-4 border-violet-500',
    text: 'text-violet-950',
    numberColor: 'text-violet-300',
    buttonBg: 'bg-violet-100',
    buttonText: 'text-violet-700',
    buttonHoverBg: 'hover:bg-violet-200'
  },
  2018: {
    background: 'from-cyan-100 via-teal-100 to-emerald-100',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    accent: 'border-l-4 border-cyan-500',
    text: 'text-cyan-950',
    numberColor: 'text-cyan-300',
    buttonBg: 'bg-cyan-100',
    buttonText: 'text-cyan-700',
    buttonHoverBg: 'hover:bg-cyan-200'
  },
  2017: {
    background: 'from-red-100 via-rose-100 to-pink-100',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    accent: 'border-l-4 border-red-500',
    text: 'text-red-950',
    numberColor: 'text-red-300',
    buttonBg: 'bg-red-100',
    buttonText: 'text-red-700',
    buttonHoverBg: 'hover:bg-red-200'
  },
  2016: {
    background: 'from-purple-100 via-indigo-100 to-blue-100',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    accent: 'border-l-4 border-purple-500',
    text: 'text-purple-950',
    numberColor: 'text-purple-300',
    buttonBg: 'bg-purple-100',
    buttonText: 'text-purple-700',
    buttonHoverBg: 'hover:bg-purple-200'
  }
};