import { Year } from './years';

export interface Song {
  title: string;
  artist: string;
  album: string;
  youtubeUrl: string;
  albumCover: string;
  genre: string;
}

export type YearList = {
  [K in Year]: Song[];
};

export const songsByYear: YearList = {
  2024: [],
  2023: [
    {
      title: "Bunny is a Rider",
      artist: "Caroline Polachek",
      album: "Desire, I Want to Turn Into You",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU8",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Desire,_I_Want_to_Turn_Into_You.jpg/220px-Desire,_I_Want_to_Turn_Into_You.jpg",
      genre: "Art pop"
    },
    {
      title: "Will anybody ever love me?",
      artist: "Sufjan Stevens",
      album: "Javelin",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU9",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Javelin_%28Sufjan_Stevens_album%29.jpg/220px-Javelin_%28Sufjan_Stevens_album%29.jpg",
      genre: "Indie folk"
    },
    {
      title: "The Firing Line",
      artist: "Royal Blood",
      album: "Back to the Water",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg0",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Back_to_the_Water.jpg/220px-Back_to_the_Water.jpg",
      genre: "Rock"
    },
    {
      title: "Wanted it to be you",
      artist: "Sigrid",
      album: "How to Let Go",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg1",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/How_to_Let_Go.jpg/220px-How_to_Let_Go.jpg",
      genre: "Pop"
    },
    {
      title: "After Midnight",
      artist: "Phoenix (feat. Clairo)",
      album: "Alpha Zulu",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg2",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Alpha_Zulu.jpg/220px-Alpha_Zulu.jpg",
      genre: "Indie rock"
    },
    {
      title: "the BLACK Seminole.",
      artist: "Lil Yachty",
      album: "Let's Start Here.",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg3",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Let%27s_Start_Here..jpg/220px-Let%27s_Start_Here..jpg",
      genre: "Hip hop"
    },
    {
      title: "Emily I’m sorry",
      artist: "Boygenius",
      album: "the record",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg4",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/the_record.jpg/220px-the_record.jpg",
      genre: "Indie rock"
    },
    {
      title: "baby again…",
      artist: "Fred again.., Skrillex, Four Tet",
      album: "DGTD",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg5",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/DGTD.jpg/220px-DGTD.jpg",
      genre: "Electronic"
    },
    {
      title: "I swear, I really wanted to make a “rap” album but this is literally the way the wind blew me this time",
      artist: "André 3000",
      album: "The Love Below",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg6",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/The_Love_Below.jpg/220px-The_Love_Below.jpg",
      genre: "Alternative hip hop"
    },
    {
      title: "New Gold",
      artist: "Gorillaz (ft. Bootie Brown & Tame Impala)",
      album: "Cracker Island",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg7",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Cracker_Island.jpg/220px-Cracker_Island.jpg",
      genre: "Alternative hip hop"
    }
  ],
  2022: [
    {
      title: "glimpse of us",
      artist: "Joji",
      album: "Smithereens",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE48",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Joji_-_SMITHEREENS.jpg/220px-Joji_-_SMITHEREENS.jpg",
      genre: "Indie R&B"
    },
    {
      title: "spitting off the edge of the world",
      artist: "Yeah Yeah Yeahs (ft. Perfume Genius)",
      album: "Cool It Down",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE49",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Cool_It_Down.jpg/220px-Cool_It_Down.jpg",
      genre: "Indie rock"
    },
    {
      title: "turn on the lights",
      artist: "Fred again... (ft. Future and SHM)",
      album: "Actual Life 3 (January 1 - September 9 2022)",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU0",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Actual_Life_3_%28January_1_-_September_9_2022%29.jpg/220px-Actual_Life_3_%28January_1_-_September_9_2022%29.jpg",
      genre: "Electronic"
    },
    {
      title: "shatter",
      artist: "Maggie Rogers",
      album: "Surrender",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU1",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Surrender_%28Maggie_Rogers_album%29.jpg/220px-Surrender_%28Maggie_Rogers_album%29.jpg",
      genre: "Indie pop"
    },
    {
      title: "wet dream",
      artist: "Wet Leg",
      album: "Wet Leg",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU2",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Wet_Leg_%28album%29.jpg/220px-Wet_Leg_%28album%29.jpg",
      genre: "Indie rock"
    },
    {
      title: "2 am",
      artist: "Foals",
      album: "Life Is Yours",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU3",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Life_Is_Yours.jpg/220px-Life_Is_Yours.jpg",
      genre: "Indie rock"
    },
    {
      title: "tonight",
      artist: "Phoenix (ft. Ezra Koenig)",
      album: "Alpha Zulu",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU4",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Alpha_Zulu.jpg/220px-Alpha_Zulu.jpg",
      genre: "Indie rock"
    },
    {
      title: "the perfect pair",
      artist: "beabadoobee",
      album: "Beatopia",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU5",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Beatopia.jpg/220px-Beatopia.jpg",
      genre: "Indie rock"
    },
    {
      title: "a driver saved my night",
      artist: "Sigrid",
      album: "How to Let Go",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU6",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/How_to_Let_Go.jpg/220px-How_to_Let_Go.jpg",
      genre: "Pop"
    },
    {
      title: "shooting stars",
      artist: "Flume (ft. Toro y Moi)",
      album: "Flume",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU7",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Flume_%28album%29.jpg/220px-Flume_%28album%29.jpg",
      genre: "Electronic"
    }
  ],
  2021: [
    {
      title: "Hurricane",
      artist: "Kanye West",
      album: "Donda",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k8",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Donda_%28album%29.jpg/220px-Donda_%28album%29.jpg",
      genre: "Hip hop"
    },
    {
      title: "Hardline",
      artist: "Julien Baker",
      album: "Little Oblivions",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k9",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Little_Oblivions.jpg/220px-Little_Oblivions.jpg",
      genre: "Indie rock"
    },
    {
      title: "Addicted",
      artist: "Jorja Smith",
      album: "Be Right Back",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE40",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Be_Right_Back.jpg/220px-Be_Right_Back.jpg",
      genre: "R&B"
    },
    {
      title: "Fly as me",
      artist: "Silk Sonic",
      album: "An Evening with Silk Sonic",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE41",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/An_Evening_with_Silk_Sonic.jpg/220px-An_Evening_with_Silk_Sonic.jpg",
      genre: "R&B"
    },
    {
      title: "Easy on me",
      artist: "Adele",
      album: "30",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE42",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/30_%28Adele_album%29.jpg/220px-30_%28Adele_album%29.jpg",
      genre: "Pop"
    },
    {
      title: "Typhoons",
      artist: "Blood Orange",
      album: "Angel’s Pulse",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE43",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Angel%27s_Pulse.jpg/220px-Angel%27s_Pulse.jpg",
      genre: "R&B"
    },
    {
      title: "WUSYANAME",
      artist: "Tyler, The Creator",
      album: "CALL ME IF YOU GET LOST",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE44",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Call_Me_If_You_Get_Lost.jpg/220px-Call_Me_If_You_Get_Lost.jpg",
      genre: "Hip hop"
    },
    {
      title: "Wants and Needs",
      artist: "Drake",
      album: "Certified Lover Boy",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE45",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Certified_Lover_Boy.jpg/220px-Certified_Lover_Boy.jpg",
      genre: "Hip hop"
    },
    {
      title: "Ben Franklin",
      artist: "Snail Mail",
      album: "Valentine",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE46",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Valentine_%28Snail_Mail_album%29.jpg/220px-Valentine_%28Snail_Mail_album%29.jpg",
      genre: "Indie rock"
    },
    {
      title: "Manslaughter",
      artist: "Pop Smoke",
      album: "Faith",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE47",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Faith_%28Pop_Smoke_album%29.jpg/220px-Faith_%28Pop_Smoke_album%29.jpg",
      genre: "Hip hop"
    }
  ],
  2020: [
    {
      title: "I Know The End",
      artist: "Phoebe Bridgers",
      album: "Punisher",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y88",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Punisher_%28Phoebe_Bridgers_album%29.jpg/220px-Punisher_%28Phoebe_Bridgers_album%29.jpg",
      genre: "Indie folk"
    },
    {
      title: "Breath Deeper",
      artist: "Tame Impala",
      album: "The Slow Rush",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y89",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/The_Slow_Rush.jpg/220px-The_Slow_Rush.jpg",
      genre: "Psychedelic rock"
    },
    {
      title: "Snowchild",
      artist: "The Weeknd",
      album: "After Hours",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k0",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/After_Hours_%28The_Weeknd_album%29.jpg/220px-After_Hours_%28The_Weeknd_album%29.jpg",
      genre: "R&B"
    },
    {
      title: "Sunblind",
      artist: "Fleet Foxes",
      album: "Shore",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k1",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Shore_%28Fleet_Foxes_album%29.jpg/220px-Shore_%28Fleet_Foxes_album%29.jpg",
      genre: "Indie folk"
    },
    {
      title: "The Void",
      artist: "Kid Cudi",
      album: "Man on the Moon III: The Chosen",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k2",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Man_on_the_Moon_III:_The_Chosen.jpg/220px-Man_on_the_Moon_III:_The_Chosen.jpg",
      genre: "Alternative hip hop"
    },
    {
      title: "Delete Forever",
      artist: "Grimes",
      album: "Miss Anthropocene",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k3",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Miss_Anthropocene.jpg/220px-Miss_Anthropocene.jpg",
      genre: "Electropop"
    },
    {
      title: "1985",
      artist: "Freddie Gibbs & The Alchemist",
      album: "Alfredo",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k4",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Alfredo_%28album%29.jpg/220px-Alfredo_%28album%29.jpg",
      genre: "Hip hop"
    },
    {
      title: "Love Again",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k5",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Future_Nostalgia.jpg/220px-Future_Nostalgia.jpg",
      genre: "Pop"
    },
    {
      title: "MODUS",
      artist: "Joji",
      album: "Nectar",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k6",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Nectar_%28Joji_album%29.jpg/220px-Nectar_%28Joji_album%29.jpg",
      genre: "Indie R&B"
    },
    {
      title: "Laugh Now Cry Later",
      artist: "Drake",
      album: "Dark Lane Demo Tapes",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k7",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Dark_Lane_Demo_Tapes.jpg/220px-Dark_Lane_Demo_Tapes.jpg",
      genre: "Hip hop"
    }
  ],
  2019: [
    {
      title: "Bags",
      artist: "Clairo",
      album: "Immunity",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g8",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Immunity_%28Clairo_album%29.jpg/220px-Immunity_%28Clairo_album%29.jpg",
      genre: "Indie pop"
    },
    {
      title: "NO HALO",
      artist: "BROCKHAMPTON",
      album: "PULSE",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g9",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/PULSE_%28Brockhampton_album%29.jpg/220px-PULSE_%28Brockhampton_album%29.jpg",
      genre: "Hip hop"
    },
    {
      title: "Costa Rica",
      artist: "Dreamville (ft. Buddy, Ski Mask the Slump God)",
      album: "Revenge of the Dreamers III",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y80",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Revenge_of_the_Dreamers_III.jpg/220px-Revenge_of_the_Dreamers_III.jpg",
      genre: "Hip hop"
    },
    {
      title: "Hey, Ma",
      artist: "Bon Iver",
      album: "i,i",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y81",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/i,_i.jpg/220px-i,_i.jpg",
      genre: "Indie folk"
    },
    {
      title: "Heartless",
      artist: "The Weeknd",
      album: "After Hours",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y82",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/After_Hours_%28The_Weeknd_album%29.jpg/220px-After_Hours_%28The_Weeknd_album%29.jpg",
      genre: "R&B"
    },
    {
      title: "Omertà",
      artist: "Drake",
      album: "Dark Lane Demo Tapes",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y83",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Dark_Lane_Demo_Tapes.jpg/220px-Dark_Lane_Demo_Tapes.jpg",
      genre: "Hip hop"
    },
    {
      title: "Use This Gospel",
      artist: "Kanye West (ft. Clipse, Kenny G)",
      album: "Jesus Is King",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y84",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Jesus_Is_King.jpg/220px-Jesus_Is_King.jpg",
      genre: "Gospel rap"
    },
    {
      title: "The Box",
      artist: "Roddy Ricch",
      album: "Please Excuse Me for Being Antisocial",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y85",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Please_Excuse_Me_for_Being_Antisocial.jpg/220px-Please_Excuse_Me_for_Being_Antisocial.jpg",
      genre: "Hip hop"
    },
    {
      title: "WHAT TO DO?",
      artist: "JackBoys",
      album: "JACKBOYS",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y86",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/JACKBOYS.jpg/220px-JACKBOYS.jpg",
      genre: "Hip hop"
    },
    {
      title: "Half Manne Half Cocaine",
      artist: "Freddie Gibbs & Madlib",
      album: "Alfredo",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y87",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Alfredo_%28album%29.jpg/220px-Alfredo_%28album%29.jpg",
      genre: "Hip hop"
    }
  ],
  2018: [
    {
      title: "SICKO MODE",
      artist: "Travis Scott",
      album: "Astroworld",
      youtubeUrl: "https://www.youtube.com/watch?v=2_1o31LhE788",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Astroworld_by_Travis_Scott.jpg/220px-Astroworld_by_Travis_Scott.jpg",
      genre: "Hip hop"
    },
    {
      title: "Drip Too Hard",
      artist: "Lil Baby & Gunna",
      album: "Drip Harder",
      youtubeUrl: "https://www.youtube.com/watch?v=2_1o31LhE789",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Drip_Harder.jpg/220px-Drip_Harder.jpg",
      genre: "Hip hop"
    },
    {
      title: "CLOUT COBAIN",
      artist: "Denzel Curry",
      album: "TA13OO",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g0",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/TA13OO.jpg/220px-TA13OO.jpg",
      genre: "Hip hop"
    },
    {
      title: "Mo Bamba",
      artist: "Sheck Wes",
      album: "Mudboy",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g1",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Mudboy.jpg/220px-Mudboy.jpg",
      genre: "Hip hop"
    },
    {
      title: "CAN’T GET OVER YOU",
      artist: "Joji",
      album: "BALLADS 1",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g2",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Joji_-_BALLADS_1.jpg/220px-Joji_-_BALLADS_1.jpg",
      genre: "Indie R&B"
    },
    {
      title: "Praise The Lord (Da Shine)",
      artist: "A$AP Rocky ft. Skepta",
      album: "Testing",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g3",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Testing_%28A%24AP_Rocky_album%29.jpg/220px-Testing_%28A%24AP_Rocky_album%29.jpg",
      genre: "Hip hop"
    },
    {
      title: "R.I.P.",
      artist: "Playboi Carti",
      album: "Die Lit",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g4",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Die_Lit.jpg/220px-Die_Lit.jpg",
      genre: "Hip hop"
    },
    {
      title: "Lucid Dreams",
      artist: "Juice WRLD",
      album: "Goodbye & Good Riddance",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g5",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Goodbye_%26_Good_Riddance.jpg/220px-Goodbye_%26_Good_Riddance.jpg",
      genre: "Emo rap"
    },
    {
      title: "Beam",
      artist: "Rich Brian ft. Playboi Carti",
      album: "The Sailor",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g6",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/The_Sailor.jpg/220px-The_Sailor.jpg",
      genre: "Hip hop"
    },
    {
      title: "Reborn",
      artist: "KIDS SEE GHOSTS",
      album: "KIDS SEE GHOSTS",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g7",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Kids_See_Ghosts.jpg/220px-Kids_See_Ghosts.jpg",
      genre: "Alternative hip hop"
    }
  ],
  2017: [
    {
      title: "Lamb",
      artist: "Brockhampton",
      album: "SATURATION",
      youtubeUrl: "https://www.youtube.com/watch?v=d-aZ00d89Yk",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Brockhampton_SATURATION.jpg/220px-Brockhampton_SATURATION.jpg",
      genre: "Hip hop"
    },
    {
      title: "Chanel",
      artist: "Frank Ocean",
      album: "Chanel",
      youtubeUrl: "https://www.youtube.com/watch?v=2_1o31LhE78",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Frank_Ocean_-_Chanel.jpg/220px-Frank_Ocean_-_Chanel.jpg",
      genre: "R&B"
    },
    {
      title: "Revenge",
      artist: "XXXTentacion",
      album: "17",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/XXXTentacion_-_17.png/220px-XXXTentacion_-_17.png",
      genre: "Hip hop"
    },
    {
      title: "XO Tour Llif3",
      artist: "Lil Uzi Vert",
      album: "Luv Is Rage 2",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y8",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Lil_Uzi_Vert_-_Luv_Is_Rage_2.jpg/220px-Lil_Uzi_Vert_-_Luv_Is_Rage_2.jpg",
      genre: "Hip hop"
    },
    {
      title: "I don't wanna waste my time",
      artist: "Joji",
      album: "SMITHEREENS",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Joji_-_SMITHEREENS.jpg/220px-Joji_-_SMITHEREENS.jpg",
      genre: "Indie R&B"
    },
    {
      title: "911 / Mr. Lonely",
      artist: "Tyler, The Creator",
      album: "Flower Boy",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE4",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Flower_Boy_by_Tyler,_The_Creator.jpg/220px-Flower_Boy_by_Tyler,_The_Creator.jpg",
      genre: "Hip hop"
    },
    {
      title: "HUMBLE.",
      artist: "Kendrick Lamar",
      album: "DAMN.",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Kendrick_Lamar_-_DAMN..png/220px-Kendrick_Lamar_-_DAMN..png",
      genre: "Hip hop"
    },
    {
      title: "Passionfruit",
      artist: "Drake",
      album: "More Life",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Drake_-_More_Life.jpg/220px-Drake_-_More_Life.jpg",
      genre: "R&B / Hip hop"
    },
    {
      title: "Ocean Eyes",
      artist: "Billie Eilish",
      album: "Don't Smile at Me",
      youtubeUrl: "https://www.youtube.com/watch?v=VyaRWM5sB-0",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Billie_Eilish_-_Dont_Smile_at_Me.jpg/220px-Billie_Eilish_-_Dont_Smile_at_Me.jpg",
      genre: "Pop"
    },
    {
      title: "8TEEN",
      artist: "Khalid",
      album: "American Teen",
      youtubeUrl: "https://www.youtube.com/watch?v=w4-r11p92wM",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Khalid_-_American_Teen.jpg/220px-Khalid_-_American_Teen.jpg",
      genre: "R&B"
    }
  ],
  2016: [
    {
      title: "Nights",
      artist: "Frank Ocean",
      album: "Blonde",
      youtubeUrl: "https://www.youtube.com/watch?v=r4l9bFqgMaQ",
      albumCover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&h=400&fit=crop",
      genre: "R&B"
    },
    {
      title: "Real Friends",
      artist: "Kanye West",
      album: "The Life of Pablo",
      youtubeUrl: "https://www.youtube.com/watch?v=fWD9GF-Ogf4",
      albumCover: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?w=400&h=400&fit=crop",
      genre: "Hip hop"
    },
    {
      title: "Got it Good",
      artist: "Kaytranada ft. Craig David",
      album: "99.9%",
      youtubeUrl: "https://www.youtube.com/watch?v=bAX9envvbj4",
      albumCover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop",
      genre: "R&B / Electronic"
    },
    {
      title: "All Night",
      artist: "Chance The Rapper ft. Knox Fortune",
      album: "Coloring Book",
      youtubeUrl: "https://www.youtube.com/watch?v=lkIUnRRH6l4",
      albumCover: "https://images.unsplash.com/photo-1482442120256-9c03866de390?w=400&h=400&fit=crop",
      genre: "Hip hop"
    },
    {
      title: "Drum",
      artist: "Mø",
      album: "Drum - Single",
      youtubeUrl: "https://www.youtube.com/watch?v=9wLmVK8EmxE",
      albumCover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop",
      genre: "Indie Pop"
    },
    {
      title: "Caroline",
      artist: "Amine",
      album: "Good for You",
      youtubeUrl: "https://www.youtube.com/watch?v=3aCQUm3mBYE",
      albumCover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      genre: "Hip hop / R&B"
    },
    {
      title: "On Hold",
      artist: "The xx",
      album: "I See You",
      youtubeUrl: "https://www.youtube.com/watch?v=blJKoXWlqJk",
      albumCover: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?w=400&h=400&fit=crop",
      genre: "Indie Rock"
    },
    {
      title: "Overtime",
      artist: "ScHoolboy Q ft. Miguel, Justin Skye",
      album: "Blank Face LP",
      youtubeUrl: "https://www.youtube.com/watch?v=WtQkmGXYl24",
      albumCover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
      genre: "Hip hop"
    },
    {
      title: "Lose It",
      artist: "Flume",
      album: "Skin",
      youtubeUrl: "https://youtu.be/MbYuEEU5e50?si=YeEWux-MP5byqW9m",
      albumCover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
      genre: "Electronic"
    },
    {
      title: "Needed Me",
      artist: "Rihanna",
      album: "ANTI",
      youtubeUrl: "https://youtu.be/wfN4PVaOU5Q?si=5-vuso97b8aJdvhn",
      albumCover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&h=400&fit=crop",
      genre: "R&B"
    }
  ]
} as YearList;