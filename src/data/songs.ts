import { Year } from './years';

export interface Song {
  title: string;
  artist: string;
  album: string;
  youtubeUrl: string;
  albumCover: string;
}

export type YearList = {
  [K in Year]: Song[];
};

export const songsByYear: YearList = {
  2023: [
    {
      title: "Anti-Hero",
      artist: "Taylor Swift",
      album: "Midnights",
      youtubeUrl: "https://www.youtube.com/watch?v=b1kbLwvqugk",
      albumCover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop"
    },
  ],
  2022: [
    {
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      youtubeUrl: "https://www.youtube.com/watch?v=H5v3kku4y6Q",
      albumCover: "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?w=400&h=400&fit=crop"
    },
  ],
  2016: [
    {
      title: "Nights",
      artist: "Frank Ocean",
      album: "Blonde",
      youtubeUrl: "https://www.youtube.com/watch?v=r4l9bFqgMaQ",
      albumCover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&h=400&fit=crop"
    },
    {
      title: "Real Friends",
      artist: "Kanye West",
      album: "The Life of Pablo",
      youtubeUrl: "https://www.youtube.com/watch?v=fWD9GF-Ogf4",
      albumCover: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?w=400&h=400&fit=crop"
    },
    {
      title: "Got it Good",
      artist: "Kaytranada ft. Craig David",
      album: "99.9%",
      youtubeUrl: "https://www.youtube.com/watch?v=bAX9envvbj4",
      albumCover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop"
    },
    {
      title: "All Night",
      artist: "Chance The Rapper ft. Knox Fortune",
      album: "Coloring Book",
      youtubeUrl: "https://www.youtube.com/watch?v=lkIUnRRH6l4",
      albumCover: "https://images.unsplash.com/photo-1482442120256-9c03866de390?w=400&h=400&fit=crop"
    },
    {
      title: "Drum",
      artist: "Mø",
      album: "Drum - Single",
      youtubeUrl: "https://www.youtube.com/watch?v=9wLmVK8EmxE",
      albumCover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop"
    },
    {
      title: "Caroline",
      artist: "Amine",
      album: "Good for You",
      youtubeUrl: "https://www.youtube.com/watch?v=3aCQUm3mBYE",
      albumCover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
    },
    {
      title: "On Hold",
      artist: "The xx",
      album: "I See You",
      youtubeUrl: "https://www.youtube.com/watch?v=blJKoXWlqJk",
      albumCover: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?w=400&h=400&fit=crop"
    },
    {
      title: "Overtime",
      artist: "ScHoolboy Q ft. Miguel, Justin Skye",
      album: "Blank Face LP",
      youtubeUrl: "https://www.youtube.com/watch?v=WtQkmGXYl24",
      albumCover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop"
    },
    {
      title: "Lose It",
      artist: "Flume",
      album: "Skin",
      youtubeUrl: "https://youtu.be/MbYuEEU5e50?si=YeEWux-MP5byqW9m",
      albumCover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop"
    },
    {
      title: "Needed Me",
      artist: "Rihanna",
      album: "ANTI",
      youtubeUrl: "https://youtu.be/wfN4PVaOU5Q?si=5-vuso97b8aJdvhn",
      albumCover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&h=400&fit=crop"
    }
  ]
} as YearList;