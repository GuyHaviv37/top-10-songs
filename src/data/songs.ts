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
      albumCover: "http://coverartarchive.org/release/f5d8b68d-b8ad-4817-8f2c-6b9e78687cb8/34273334129.jpg",
      genre: "Art pop"
    },
    {
      title: "Will anybody ever love me?",
      artist: "Sufjan Stevens",
      album: "Javelin",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU9",
      albumCover: "https://coverartarchive.org/release/b2a2c1a2-97ca-4eb7-b97e-45c4aabebb8f/36967633475.jpg",
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
      albumCover: "http://coverartarchive.org/release/24836511-984b-4e10-ac35-8dd68422f9c2/36131469139.jpg",
      genre: "Pop"
    },
    {
      title: "After Midnight",
      artist: "Phoenix (feat. Clairo)",
      album: "Alpha Zulu (remixes)",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg2",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Alpha_Zulu.jpg/220px-Alpha_Zulu.jpg",
      genre: "Indie rock"
    },
    {
      title: "the BLACK Seminole.",
      artist: "Lil Yachty",
      album: "Let's Start Here.",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg3",
      albumCover: "http://coverartarchive.org/release/e2f35059-843f-433e-a0fc-b07a228987b1/34732125728.jpg",
      genre: "Hip hop"
    },
    {
      title: "Emily I'm sorry",
      artist: "Boygenius",
      album: "the record",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg4",
      albumCover: "http://coverartarchive.org/release/31c4f6a9-c68f-4ae5-911b-5cf1ffec81d2/35270611926.jpg",
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
      title: "Glimpse of Us",
      artist: "Joji",
      album: "Smithereens",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE48",
      albumCover: "http://coverartarchive.org/release/31ced3da-acb5-4dcd-b3df-1a7319470a63/34003899735.jpg",
      genre: "Indie R&B"
    },
    {
      title: "Spitting Off The Edge Of The World",
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
      title: "Shatter",
      artist: "Maggie Rogers",
      album: "Surrender",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU1",
      albumCover: "http://coverartarchive.org/release/9991d3c5-e838-4191-aaff-70d0a63ce5b9/34147011567.jpg",
      genre: "Indie pop"
    },
    {
      title: "Wet Dream",
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
      title: "Tonight",
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
      albumCover: "http://coverartarchive.org/release/24836511-984b-4e10-ac35-8dd68422f9c2/36131469139.jpg",
      genre: "Pop"
    },
    {
      title: "Shooting Stars",
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
      albumCover: "https://coverartarchive.org/release/c3947e5b-8c83-4110-8439-0384c13adf35/37445710279.jpg",
      genre: "Hip hop"
    },
    {
      title: "Hardline",
      artist: "Julien Baker",
      album: "Little Oblivions",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k9",
      albumCover: "http://coverartarchive.org/release/44eb4524-5487-43f9-8c31-8ad0738b77af/28690934637.jpg",
      genre: "Indie rock"
    },
    {
      title: "Addicted",
      artist: "Jorja Smith",
      album: "Be Right Back",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE40",
      albumCover: "http://coverartarchive.org/release/c149fccf-d66f-4143-85c0-fbec06e7ae68/29132028349.jpg",
      genre: "R&B"
    },
    {
      title: "Fly as me",
      artist: "Silk Sonic",
      album: "An Evening with Silk Sonic",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE41",
      albumCover: "http://coverartarchive.org/release/b2b2af98-5735-463e-bd99-73cdd6275795/34236272710.jpg",
      genre: "R&B"
    },
    {
      title: "Easy on me",
      artist: "Adele",
      album: "30",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE42",
      albumCover: "http://coverartarchive.org/release/5c2b134a-70df-4bd3-8b72-7cfce4f82e49/30826984527.jpg",
      genre: "Pop"
    },
    {
      title: "Typhoons",
      artist: "Royal Blood",
      album: "Typhoons",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE43",
      albumCover: "http://coverartarchive.org/release/e51b32a1-4c35-4272-812b-c89b7f767ccc/35823027270.jpg",
      genre: "Rock"
    },
    {
      title: "WUSYANAME",
      artist: "Tyler, The Creator",
      album: "CALL ME IF YOU GET LOST",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE44",
      albumCover: "https://coverartarchive.org/release/f5b58aae-9d96-469b-a9f2-7c35a9d33d31/29709690464.jpg",
      genre: "Hip hop"
    },
    {
      title: "Wants and Needs",
      artist: "Drake",
      album: "Certified Lover Boy",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE45",
      albumCover: "http://coverartarchive.org/release/ac42ebb0-26d4-44c8-b8b4-fa45b54bd965/32793982004.jpg",
      genre: "Hip hop"
    },
    {
      title: "Ben Franklin",
      artist: "Snail Mail",
      album: "Valentine",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE46",
      albumCover: "http://coverartarchive.org/release/c0891bc1-237a-4c78-815c-9f040f1cb916/30582485026.jpg",
      genre: "Indie rock"
    },
    {
      title: "Manslaughter",
      artist: "Pop Smoke",
      album: "Faith",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE47",
      albumCover: "http://coverartarchive.org/release/4381d0de-0a88-4dc5-bd13-02ad0fd837b0/33867787148.jpg",
      genre: "Hip hop"
    }
  ],
  2020: [
    {
      title: "I Know The End",
      artist: "Phoebe Bridgers",
      album: "Punisher",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y88",
      albumCover: "http://coverartarchive.org/release/02ebd58b-2e50-4f02-9191-795d7fdc6295/26697443941.jpg",
      genre: "Indie folk"
    },
    {
      title: "Breath Deeper",
      artist: "Tame Impala",
      album: "The Slow Rush",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y89",
      albumCover: "http://coverartarchive.org/release/3a12923d-97cd-4e87-8cfd-fb67be970974/24476666796.jpg",
      genre: "Psychedelic rock"
    },
    {
      title: "Snowchild",
      artist: "The Weeknd",
      album: "After Hours",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k0",
      albumCover: "http://coverartarchive.org/release/19e4f6cc-ca0c-4897-8dfc-a36914b7f998/25720993837.jpg",
      genre: "R&B"
    },
    {
      title: "Sunblind",
      artist: "Fleet Foxes",
      album: "Shore",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k1",
      albumCover: "http://coverartarchive.org/release/68d83092-6c51-4020-9a1d-116c9ef91f92/29514044499.jpg",
      genre: "Indie folk"
    },
    {
      title: "The Void",
      artist: "Kid Cudi",
      album: "Man on the Moon III: The Chosen",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k2",
      albumCover: "http://coverartarchive.org/release/15c4c708-5599-4c7b-896f-741208e12dce/28017801900.jpg",
      genre: "Alternative hip hop"
    },
    {
      title: "Delete Forever",
      artist: "Grimes",
      album: "Miss Anthropocene",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k3",
      albumCover: "http://coverartarchive.org/release/ab90c270-5aae-4712-8b69-3c137459736d/24649231843.jpg",
      genre: "Electropop"
    },
    {
      title: "1985",
      artist: "Freddie Gibbs & The Alchemist",
      album: "Alfredo",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k4",
      albumCover: "http://coverartarchive.org/release/afbdebc0-d9e5-494f-a8f6-c02ac035914d/37681153672.jpg",
      genre: "Hip hop"
    },
    {
      title: "Love Again",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k5",
      albumCover: "http://coverartarchive.org/release/4cd71b3a-af53-41b5-a9c3-c67e51f012e7/27963602431.jpg",
      genre: "Pop"
    },
    {
      title: "MODUS",
      artist: "Joji",
      album: "Nectar",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k6",
      albumCover: "http://coverartarchive.org/release/a9401213-34e8-4a65-b1ed-487b165929e5/27350272133.jpg",
      genre: "Indie R&B"
    },
    {
      title: "Laugh Now Cry Later",
      artist: "Drake",
      album: "Dark Lane Demo Tapes",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k7",
      albumCover: "http://coverartarchive.org/release/ac42ebb0-26d4-44c8-b8b4-fa45b54bd965/32793982004.jpg",
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
      title: "CAN'T GET OVER YOU",
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
      albumCover: "https://archive.org/download/mbid-0da52546-6eb2-481d-8ee5-09beba7f8384/mbid-0da52546-6eb2-481d-8ee5-09beba7f8384-35140909611_thumb500.jpg",
      genre: "Hip hop"
    },
    {
      title: "Chanel",
      artist: "Frank Ocean",
      album: "Chanel",
      youtubeUrl: "https://www.youtube.com/watch?v=2_1o31LhE78",
      albumCover: "https://archive.org/download/mbid-0dfea1b2-f914-430a-aee6-c440d995f9c5/mbid-0dfea1b2-f914-430a-aee6-c440d995f9c5-16171646342_thumb500.jpg",
      genre: "R&B"
    },
    {
      title: "Revenge",
      artist: "XXXTentacion",
      album: "17",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g",
      albumCover: "https://archive.org/download/mbid-1395477c-a71e-4058-a893-d33dfcad6a4b/mbid-1395477c-a71e-4058-a893-d33dfcad6a4b-17799765239_thumb500.jpg",
      genre: "Hip hop"
    },
    {
      title: "XO Tour Llif3",
      artist: "Lil Uzi Vert",
      album: "Luv Is Rage 2",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y8",
      albumCover: "https://archive.org/download/mbid-61aad13f-df50-4fa8-aa0b-07d2b48e3852/mbid-61aad13f-df50-4fa8-aa0b-07d2b48e3852-17799567279_thumb500.jpg",
      genre: "Hip hop"
    },
    {
      title: "I don't wanna waste my time",
      artist: "Joji",
      album: "In Tongues",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k",
      albumCover: "https://archive.org/download/mbid-198c5978-6ddd-4926-a9f4-811d0cb5e547/mbid-198c5978-6ddd-4926-a9f4-811d0cb5e547-19282316431_thumb500.jpg",
      genre: "Indie R&B"
    },
    {
      title: "911 / Mr. Lonely",
      artist: "Tyler, The Creator",
      album: "Flower Boy",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE4",
      albumCover: "https://archive.org/download/mbid-523f5e88-9988-436d-ab60-6d514c1f0e15/mbid-523f5e88-9988-436d-ab60-6d514c1f0e15-17224281295_thumb500.jpg",
      genre: "Hip hop"
    },
    {
      title: "HUMBLE.",
      artist: "Kendrick Lamar",
      album: "DAMN.",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU",
      albumCover: "https://archive.org/download/mbid-acbb807b-4a1a-411a-a800-965a23955561/mbid-acbb807b-4a1a-411a-a800-965a23955561-23527034876_thumb500.jpg",
      genre: "Hip hop"
    },
    {
      title: "Passionfruit",
      artist: "Drake",
      album: "More Life",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg",
      albumCover: "https://archive.org/download/mbid-4360c85f-0c62-4983-9463-d18aee8b945a/mbid-4360c85f-0c62-4983-9463-d18aee8b945a-16758585892_thumb500.jpg",
      genre: "R&B / Hip hop"
    },
    {
      title: "Ocean Eyes",
      artist: "Billie Eilish",
      album: "Don't Smile at Me",
      youtubeUrl: "https://www.youtube.com/watch?v=VyaRWM5sB-0",
      albumCover: "https://archive.org/download/mbid-5ecfd312-e96a-425c-ac40-40a623a71bcd/mbid-5ecfd312-e96a-425c-ac40-40a623a71bcd-29292390002_thumb500.jpg",
      genre: "Pop"
    },
    {
      title: "8TEEN",
      artist: "Khalid",
      album: "American Teen",
      youtubeUrl: "https://www.youtube.com/watch?v=w4-r11p92wM",
      albumCover: "https://archive.org/download/mbid-f9fb779f-902e-4cc8-a187-0f8c283f5d7d/mbid-f9fb779f-902e-4cc8-a187-0f8c283f5d7d-16105051216_thumb500.jpg",
      genre: "R&B"
    }
  ],
  2016: [
    {
      title: "Nights",
      artist: "Frank Ocean",
      album: "Blonde",
      youtubeUrl: "https://www.youtube.com/watch?v=r4l9bFqgMaQ",
      albumCover: "https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_Blonde-1200x1200.jpg",
      genre: "R&B"
    },
    {
      title: "Real Friends",
      artist: "Kanye West",
      album: "The Life of Pablo",
      youtubeUrl: "https://www.youtube.com/watch?v=fWD9GF-Ogf4",
      albumCover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2Fad4bYt006pvNqKTMYflIIzJg9LE%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-8288880-1541012924-1306.jpeg.jpg&f=1&nofb=1&ipt=b7e526882d6f943b81d5e8b73ad3c2a63fef49574dabbce9d47d40ffd384dac6&ipo=images",
      genre: "Hip hop"
    },
    {
      title: "Got it Good",
      artist: "Kaytranada ft. Craig David",
      album: "99.9%",
      youtubeUrl: "https://www.youtube.com/watch?v=bAX9envvbj4",
      albumCover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.hmv.com%2Fr%2Fw-1280%2Fhmv%2Ffiles%2Fae%2Faecb4d79-5402-4906-8f3c-c74306c0ae55.jpg&f=1&nofb=1&ipt=a2f69111b906eb564c3f3c8f8d20e757a29d3fc57bac7e80e37c84d5f94cbf5f&ipo=images",
      genre: "R&B / Electronic"
    },
    {
      title: "All Night",
      artist: "Chance The Rapper ft. Knox Fortune",
      album: "Coloring Book",
      youtubeUrl: "https://www.youtube.com/watch?v=lkIUnRRH6l4",
      albumCover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tinymixtapes.com%2Fsites%2Fdefault%2Ffiles%2F1605%2Fchance-the-rapper-coloring-book_0.jpg&f=1&nofb=1&ipt=5841e7b8fbf963dc93c03fc57d2fb3e475246612b099afbf398d4b3f87937fd9&ipo=images",
      genre: "Hip hop"
    },
    {
      title: "Drum",
      artist: "Mø",
      album: "Drum - Single",
      youtubeUrl: "https://youtu.be/-cO43nfWxMA?si=ruuR_ISaSh52OeNy",
      albumCover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.coveralia.com%2Faudio%2Fm%2FMO-Drum_(CD_Single)-Frontal.jpg&f=1&nofb=1&ipt=a41296aeffd84da2adc36ee0d55afa06b615cfd74d4ee788b8e23a1e2d01b7d0&ipo=images",
      genre: "Indie Pop"
    },
    {
      title: "Caroline",
      artist: "Amine",
      album: "Good for You",
      youtubeUrl: "https://www.youtube.com/watch?v=3aCQUm3mBYE",
      albumCover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebackpackerz.com%2Fwp-content%2Fuploads%2F2017%2F07%2Famine-good-for-you-album-800x800.jpg&f=1&nofb=1&ipt=80168c9da6184913713f621197f65a9446c93798d1a9cef150fdcbebdbff5dbf&ipo=images",
      genre: "Hip hop / R&B"
    },
    {
      title: "On Hold",
      artist: "The xx",
      album: "I See You",
      youtubeUrl: "https://www.youtube.com/watch?v=blJKoXWlqJk",
      albumCover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.pitchfork.com%2Fphotos%2F5929c041ea9e61561daa7bb3%2F1%3A1%2Fw_600%2F55fa992b.jpg&f=1&nofb=1&ipt=a49cb6eefb13dd022c6b3070384545778618830cc952f20bdf2b947348ecf46e&ipo=images",
      genre: "Indie Rock"
    },
    {
      title: "Overtime",
      artist: "ScHoolboy Q ft. Miguel, Justin Skye",
      album: "Blank Face LP",
      youtubeUrl: "https://youtu.be/l72-AuyMDEs?si=0WWyUvIhIIFXI_ns",
      albumCover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.r-u-ntrtnd.com%2Fuploads%2F4%2F4%2F1%2F5%2F44157805%2Fblank-face_1_orig.jpg&f=1&nofb=1&ipt=d49778bcdbea94cec6b099471c8063cb6407edacd82a299a5b821d6eccceb6e3&ipo=images",
      genre: "Hip hop"
    },
    {
      title: "Lose It",
      artist: "Flume",
      album: "Skin",
      youtubeUrl: "https://youtu.be/MbYuEEU5e50?si=YeEWux-MP5byqW9m",
      albumCover: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2.thelineofbestfit.com%2Fimages%2Fremote%2Fhttp_cdn2.thelineofbestfit.com%2Fmedia%2F2014%2FFlume_-_Skin.jpg&f=1&nofb=1&ipt=525840b43af5c6a68197cc2cc3f7b44c17e73d0bcc2ca5905beb91fff23fddb2&ipo=images",
      genre: "Electronic"
    },
    {
      title: "Needed Me",
      artist: "Rihanna",
      album: "ANTI",
      youtubeUrl: "https://youtu.be/wfN4PVaOU5Q?si=5-vuso97b8aJdvhn",
      albumCover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F61IeCixjIZL._SL1002_.jpg&f=1&nofb=1&ipt=1eace2f4214d6e108494e3cec2dbd51aef5157e06367ae307244840028a1ef4a&ipo=images",
      genre: "R&B"
    }
  ]
} as YearList;