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
      albumCover: "http://coverartarchive.org/release/f5d8b68d-b8ad-4817-8f2c-6b9e78687cb8/34273334129_thumb250.jpg",
      genre: "Art pop"
    },
    {
      title: "Will anybody ever love me?",
      artist: "Sufjan Stevens",
      album: "Javelin",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU9",
      albumCover: "https://coverartarchive.org/release/b2a2c1a2-97ca-4eb7-b97e-45c4aabebb8f/36967633475_thumb250.jpg",
      genre: "Indie folk"
    },
    {
      title: "The Firing Line",
      artist: "Royal Blood",
      album: "Back to the Water",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg0",
      albumCover: "https://ia903203.us.archive.org/7/items/mbid-bcdeb00e-c6c2-42c8-a672-a2821e4fb966/mbid-bcdeb00e-c6c2-42c8-a672-a2821e4fb966-39257719020_thumb250.jpg",
      genre: "Rock"
    },
    {
      title: "Wanted it to be you",
      artist: "Sigrid",
      album: "How to Let Go",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg1",
      albumCover: "http://coverartarchive.org/release/24836511-984b-4e10-ac35-8dd68422f9c2/36131469139_thumb250.jpg",
      genre: "Pop"
    },
    {
      title: "After Midnight",
      artist: "Phoenix (feat. Clairo)",
      album: "Alpha Zulu (Remixes)",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg2",
      albumCover: "https://ia801503.us.archive.org/15/items/mbid-b1cdfe24-70a2-4606-84af-be6679fad505/mbid-b1cdfe24-70a2-4606-84af-be6679fad505-33429848334_thumb250.jpg",
      genre: "Indie rock"
    },
    {
      title: "the BLACK Seminole.",
      artist: "Lil Yachty",
      album: "Let's Start Here.",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg3",
      albumCover: "http://coverartarchive.org/release/e2f35059-843f-433e-a0fc-b07a228987b1/34732125728_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Emily I'm sorry",
      artist: "Boygenius",
      album: "the record",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg4",
      albumCover: "http://coverartarchive.org/release/31c4f6a9-c68f-4ae5-911b-5cf1ffec81d2/35270611926_thumb250.jpg",
      genre: "Indie rock"
    },
    {
      title: "baby again…",
      artist: "Fred again.., Skrillex, Four Tet",
      album: "baby again… (Single)",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg5",
      albumCover: "https://ia801604.us.archive.org/12/items/mbid-0da2f3e2-deaf-4352-aafc-8fe66b4b4143/mbid-0da2f3e2-deaf-4352-aafc-8fe66b4b4143-35151675912_thumb250.jpg",
      genre: "Electronic"
    },
    {
      title: "I swear, I really wanted to make a “rap” album but this is literally the way the wind blew me this time",
      artist: "André 3000",
      album: "The Love Below",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg6",
      albumCover: "https://ia600505.us.archive.org/9/items/mbid-a1b8c20c-cde9-4caa-bcbc-bd7fa27841a2/mbid-a1b8c20c-cde9-4caa-bcbc-bd7fa27841a2-37247711392_thumb250.jpg",
      genre: "Alternative hip hop"
    },
    {
      title: "New Gold",
      artist: "Gorillaz (ft. Bootie Brown & Tame Impala)",
      album: "Cracker Island",
      youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd6Cg7",
      albumCover: "https://ia601604.us.archive.org/28/items/mbid-8e6d8b2c-4ac7-4191-808f-320ab459825c/mbid-8e6d8b2c-4ac7-4191-808f-320ab459825c-34976602644_thumb250.jpg",
      genre: "Alternative hip hop"
    }
  ],
  2022: [
    {
      title: "Glimpse of Us",
      artist: "Joji",
      album: "Smithereens",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE48",
      albumCover: "http://coverartarchive.org/release/31ced3da-acb5-4dcd-b3df-1a7319470a63/34003899735_thumb250.jpg",
      genre: "Indie R&B"
    },
    {
      title: "Spitting Off The Edge Of The World",
      artist: "Yeah Yeah Yeahs (ft. Perfume Genius)",
      album: "Cool It Down",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE49",
      albumCover: "https://ia801403.us.archive.org/29/items/mbid-d8b79454-683d-422f-976c-26231433b585/mbid-d8b79454-683d-422f-976c-26231433b585-33727993765_thumb250.jpg",
      genre: "Indie rock"
    },
    {
      title: "Turn On The Lights again...",
      artist: "Fred again... (ft. Future and SHM)",
      album: "Turn On The Lights again... (Single)",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU0",
      albumCover: "https://ia601406.us.archive.org/3/items/mbid-dc30708d-4d5a-407f-bc24-95a56a15be51/mbid-dc30708d-4d5a-407f-bc24-95a56a15be51-33159384311_thumb250.jpg",
      genre: "Electronic"
    },
    {
      title: "Shatter",
      artist: "Maggie Rogers",
      album: "Surrender",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU1",
      albumCover: "http://coverartarchive.org/release/9991d3c5-e838-4191-aaff-70d0a63ce5b9/34147011567_thumb250.jpg",
      genre: "Indie pop"
    },
    {
      title: "Wet Dream",
      artist: "Wet Leg",
      album: "Wet Leg",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU2",
      albumCover: "https://ia800301.us.archive.org/17/items/mbid-9ae2c520-80b4-4b84-9e71-129d9c32a993/mbid-9ae2c520-80b4-4b84-9e71-129d9c32a993-38642593025_thumb250.jpg",
      genre: "Indie rock"
    },
    {
      title: "2 am",
      artist: "Foals",
      album: "Life Is Yours",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU3",
      albumCover: "https://ia800600.us.archive.org/9/items/mbid-fa6021ad-db43-4ba5-ba18-310ee862f709/mbid-fa6021ad-db43-4ba5-ba18-310ee862f709-32682719666_thumb250.jpg",
      genre: "Indie rock"
    },
    {
      title: "Tonight",
      artist: "Phoenix (ft. Ezra Koenig)",
      album: "Alpha Zulu",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU4",
      albumCover: "https://ia801401.us.archive.org/21/items/mbid-e924bf23-690e-498e-af0a-2b2a2a8c958b/mbid-e924bf23-690e-498e-af0a-2b2a2a8c958b-33504645284_thumb250.jpg",
      genre: "Indie rock"
    },
    {
      title: "the perfect pair",
      artist: "beabadoobee",
      album: "Beatopia",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU5",
      albumCover: "https://ia601606.us.archive.org/15/items/mbid-9c1f0927-de84-42c5-9f80-51641a95bbf5/mbid-9c1f0927-de84-42c5-9f80-51641a95bbf5-40018078549_thumb250.jpg",
      genre: "Indie rock"
    },
    {
      title: "a driver saved my night",
      artist: "Sigrid",
      album: "How to Let Go",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU6",
      albumCover: "http://coverartarchive.org/release/24836511-984b-4e10-ac35-8dd68422f9c2/36131469139_thumb250.jpg",
      genre: "Pop"
    },
    {
      title: "Shooting Stars",
      artist: "Flume (ft. Toro y Moi)",
      album: "from triplej Like a Version",
      youtubeUrl: "https://www.youtube.com/watch?v=tvTRZJgwQdU7",
      albumCover: "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/bf/6c/6b/bf6c6b94-de41-7fea-facd-c1afc0a57ae7/197187525454.jpg/250x250bf-60.jpg",
      genre: "Electronic"
    }
  ],
  2021: [
    {
      title: "Hurricane",
      artist: "Kanye West",
      album: "Donda",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k8",
      albumCover: "https://coverartarchive.org/release/c3947e5b-8c83-4110-8439-0384c13adf35/37445710279_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Hardline",
      artist: "Julien Baker",
      album: "Little Oblivions",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k9",
      albumCover: "http://coverartarchive.org/release/44eb4524-5487-43f9-8c31-8ad0738b77af/28690934637_thumb250.jpg",
      genre: "Indie rock"
    },
    {
      title: "Addicted",
      artist: "Jorja Smith",
      album: "Be Right Back",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE40",
      albumCover: "http://coverartarchive.org/release/c149fccf-d66f-4143-85c0-fbec06e7ae68/29132028349_thumb250.jpg",
      genre: "R&B"
    },
    {
      title: "Fly as me",
      artist: "Silk Sonic",
      album: "An Evening with Silk Sonic",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE41",
      albumCover: "http://coverartarchive.org/release/b2b2af98-5735-463e-bd99-73cdd6275795/34236272710_thumb250.jpg",
      genre: "R&B"
    },
    {
      title: "Easy on me",
      artist: "Adele",
      album: "30",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE42",
      albumCover: "http://coverartarchive.org/release/5c2b134a-70df-4bd3-8b72-7cfce4f82e49/30826984527_thumb250.jpg",
      genre: "Pop"
    },
    {
      title: "Typhoons",
      artist: "Royal Blood",
      album: "Typhoons",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE43",
      albumCover: "http://coverartarchive.org/release/e51b32a1-4c35-4272-812b-c89b7f767ccc/35823027270_thumb250.jpg",
      genre: "Rock"
    },
    {
      title: "WUSYANAME",
      artist: "Tyler, The Creator",
      album: "CALL ME IF YOU GET LOST",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE44",
      albumCover: "https://coverartarchive.org/release/f5b58aae-9d96-469b-a9f2-7c35a9d33d31/29709690464_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Wants and Needs",
      artist: "Drake",
      album: "Certified Lover Boy",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE45",
      albumCover: "https://ia902306.us.archive.org/30/items/mbid-18701a2e-8ca7-46ed-b233-33dde2c2197e/mbid-18701a2e-8ca7-46ed-b233-33dde2c2197e-32793768994_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Ben Franklin",
      artist: "Snail Mail",
      album: "Valentine",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE46",
      albumCover: "http://coverartarchive.org/release/c0891bc1-237a-4c78-815c-9f040f1cb916/30582485026_thumb250.jpg",
      genre: "Indie rock"
    },
    {
      title: "Manslaughter",
      artist: "Pop Smoke",
      album: "Faith",
      youtubeUrl: "https://www.youtube.com/watch?v=l9h83622wE47",
      albumCover: "http://coverartarchive.org/release/4381d0de-0a88-4dc5-bd13-02ad0fd837b0/33867787148_thumb250.jpg",
      genre: "Hip hop"
    }
  ],
  2020: [
    {
      title: "I Know The End",
      artist: "Phoebe Bridgers",
      album: "Punisher",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y88",
      albumCover: "https://ia801500.us.archive.org/16/items/mbid-446e1326-f326-4949-83fd-c1e8154db31d/mbid-446e1326-f326-4949-83fd-c1e8154db31d-33422723427_thumb250.jpg",
      genre: "Indie folk"
    },
    {
      title: "Breath Deeper",
      artist: "Tame Impala",
      album: "The Slow Rush",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y89",
      albumCover: "http://coverartarchive.org/release/3a12923d-97cd-4e87-8cfd-fb67be970974/24476666796_thumb250.jpg",
      genre: "Psychedelic rock"
    },
    {
      title: "Snowchild",
      artist: "The Weeknd",
      album: "After Hours",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k0",
      albumCover: "http://coverartarchive.org/release/19e4f6cc-ca0c-4897-8dfc-a36914b7f998/25720993837_thumb250.jpg",
      genre: "R&B"
    },
    {
      title: "Sunblind",
      artist: "Fleet Foxes",
      album: "Shore",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k1",
      albumCover: "http://coverartarchive.org/release/68d83092-6c51-4020-9a1d-116c9ef91f92/29514044499_thumb250.jpg",
      genre: "Indie folk"
    },
    {
      title: "The Void",
      artist: "Kid Cudi",
      album: "Man on the Moon III: The Chosen",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k2",
      albumCover: "http://coverartarchive.org/release/15c4c708-5599-4c7b-896f-741208e12dce/28017801900_thumb250.jpg",
      genre: "Alternative hip hop"
    },
    {
      title: "Delete Forever",
      artist: "Grimes",
      album: "Miss Anthropocene",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k3",
      albumCover: "https://ia903102.us.archive.org/5/items/mbid-7d375d90-cb07-4a9d-8088-c45763716928/mbid-7d375d90-cb07-4a9d-8088-c45763716928-24632839568_thumb250.jpg",
      genre: "Electropop"
    },
    {
      title: "1985",
      artist: "Freddie Gibbs & The Alchemist",
      album: "Alfredo",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k4",
      albumCover: "http://coverartarchive.org/release/afbdebc0-d9e5-494f-a8f6-c02ac035914d/37681153672_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Love Again",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k5",
      albumCover: "http://coverartarchive.org/release/4cd71b3a-af53-41b5-a9c3-c67e51f012e7/27963602431_thumb250.jpg",
      genre: "Pop"
    },
    {
      title: "MODUS",
      artist: "Joji",
      album: "Nectar",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k6",
      albumCover: "http://coverartarchive.org/release/a9401213-34e8-4a65-b1ed-487b165929e5/27350272133_thumb250.jpg",
      genre: "Indie R&B"
    },
    {
      title: "Laugh Now Cry Later",
      artist: "Drake (feat. Lil Durk)",
      album: "Laugh Now Cry Late (Single)",
      youtubeUrl: "https://www.youtube.com/watch?v=41u4k0l394k7",
      albumCover: "https://ia800405.us.archive.org/34/items/mbid-5a8de120-a048-42c3-84b1-e21b312d8615/mbid-5a8de120-a048-42c3-84b1-e21b312d8615-31976441858_thumb250.jpg",
      genre: "Hip hop"
    }
  ],
  2019: [
    {
      title: "Bags",
      artist: "Clairo",
      album: "Immunity",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g8",
      albumCover: "http://coverartarchive.org/release/ad6e1e59-6b26-4476-a9bd-70dcb13684de/23121667485_thumb250.png",
      genre: "Indie pop"
    },
    {
      title: "NO HALO",
      artist: "BROCKHAMPTON",
      album: "Ginger",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g9",
      albumCover: "https://ia902708.us.archive.org/0/items/mbid-8864f74b-4fe0-45a3-a201-a0e2f66ef9c8/mbid-8864f74b-4fe0-45a3-a201-a0e2f66ef9c8-32671868236_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Costa Rica",
      artist: "Dreamville (ft. Buddy, Ski Mask the Slump God)",
      album: "Revenge of the Dreamers III",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y80",
      albumCover: "https://ia803101.us.archive.org/28/items/mbid-4f4c2124-fe65-42dd-824b-4511a79fabee/mbid-4f4c2124-fe65-42dd-824b-4511a79fabee-24684719232_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Hey, Ma",
      artist: "Bon Iver",
      album: "i,i",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y81",
      albumCover: "http://coverartarchive.org/release/ad6f5017-0cf1-495a-a16b-d22ffbb3d0b5/32060673343_thumb250.jpg",
      genre: "Indie folk"
    },
    {
      title: "Heartless",
      artist: "The Weeknd",
      album: "After Hours",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y82",
      albumCover: "http://coverartarchive.org/release/19e4f6cc-ca0c-4897-8dfc-a36914b7f998/25720993837_thumb250.jpg",
      genre: "R&B"
    },
    {
      title: "Omertà",
      artist: "Drake",
      album: "The Best in the World Pack",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y83",
      albumCover: "https://ia801006.us.archive.org/18/items/mbid-cd1f3a1d-cb3c-441f-809f-c09b4d4362e8/mbid-cd1f3a1d-cb3c-441f-809f-c09b4d4362e8-23892261517_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Use This Gospel",
      artist: "Kanye West (ft. Clipse, Kenny G)",
      album: "Jesus Is King",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y84",
      albumCover: "https://ia601704.us.archive.org/22/items/mbid-c347a1ef-11e3-4cff-a99c-e626eca8cdea/mbid-c347a1ef-11e3-4cff-a99c-e626eca8cdea-27721678512_thumb250.jpg",
      genre: "Gospel rap"
    },
    {
      title: "The Box",
      artist: "Roddy Ricch",
      album: "Please Excuse Me for Being Antisocial",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y85",
      albumCover: "http://coverartarchive.org/release/9e344557-cd4c-4429-aad7-920d3860ca19/27180213099_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "WHAT TO DO?",
      artist: "JackBoys",
      album: "JACKBOYS",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y86",
      albumCover: "http://coverartarchive.org/release/98ea43f4-4617-4a41-b8fa-f14bc78bfe11/28619214327_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Half Manne Half Cocaine",
      artist: "Freddie Gibbs & Madlib",
      album: "Alfredo",
      youtubeUrl: "https://www.youtube.com/watch?v=5o90mS0U3y87",
      albumCover: "https://ia804606.us.archive.org/23/items/mbid-afbdebc0-d9e5-494f-a8f6-c02ac035914d/mbid-afbdebc0-d9e5-494f-a8f6-c02ac035914d-37681153672_thumb250.jpg",
      genre: "Hip hop"
    }
  ],
  2018: [
    {
      title: "SICKO MODE",
      artist: "Travis Scott",
      album: "Astroworld",
      youtubeUrl: "https://www.youtube.com/watch?v=2_1o31LhE788",
      albumCover: "https://ia800903.us.archive.org/0/items/mbid-82784744-65ed-4f32-b004-ba45cd726509/mbid-82784744-65ed-4f32-b004-ba45cd726509-22387554802_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Drip Too Hard",
      artist: "Lil Baby & Gunna",
      album: "Drip Harder",
      youtubeUrl: "https://www.youtube.com/watch?v=2_1o31LhE789",
      albumCover: "http://coverartarchive.org/release/216461dd-4522-4f71-9d9d-70377393821e/21210802206_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "CLOUT COBAIN",
      artist: "Denzel Curry",
      album: "TA13OO",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g0",
      albumCover: "https://ia803105.us.archive.org/21/items/mbid-2da72cb7-16d4-4dca-8818-a355b074a977/mbid-2da72cb7-16d4-4dca-8818-a355b074a977-21815634824_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Mo Bamba",
      artist: "Sheck Wes",
      album: "Mudboy",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g1",
      albumCover: "http://coverartarchive.org/release/1deab31f-e0a7-416e-b7ec-f8dcaf53c2a2/21166901055_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "CAN'T GET OVER YOU",
      artist: "Joji",
      album: "BALLADS 1",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g2",
      albumCover: "http://coverartarchive.org/release/8137ca0f-123a-4800-8b28-f1f3be6c938d/22161245781_thumb250.jpg",
      genre: "Indie R&B"
    },
    {
      title: "Praise The Lord (Da Shine)",
      artist: "A$AP Rocky ft. Skepta",
      album: "TESTING",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g3",
      albumCover: "https://ia601705.us.archive.org/25/items/mbid-8cb1451e-5123-4718-aa50-b939f20927b4/mbid-8cb1451e-5123-4718-aa50-b939f20927b4-26951135579_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "R.I.P.",
      artist: "Playboi Carti",
      album: "Die Lit",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g4",
      albumCover: "https://coverartarchive.org/release/c8cf2491-a79c-4b08-a2a8-9f365bb06047/38743511887_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Lucid Dreams",
      artist: "Juice WRLD",
      album: "Goodbye & Good Riddance",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g5",
      albumCover: "http://coverartarchive.org/release/e129a939-e8df-45b6-a04c-a2bd6bf992d7/22027293827_thumb250.jpg",
      genre: "Emo rap"
    },
    {
      title: "Beam",
      artist: "88rising & Rich Brian ft. Playboi Carti",
      album: "Head in the Clouds",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g6",
      albumCover: "https://ia902800.us.archive.org/12/items/mbid-2f2d4ec7-8b9e-44c3-9573-fe0ea4b2f24e/mbid-2f2d4ec7-8b9e-44c3-9573-fe0ea4b2f24e-20502924204_thumb250.jpg",
      genre: "Hip hop"
    },
    {
      title: "Reborn",
      artist: "KIDS SEE GHOSTS",
      album: "KIDS SEE GHOSTS",
      youtubeUrl: "https://www.youtube.com/watch?v=n6d4w9ZbA7g7",
      albumCover: "http://coverartarchive.org/release/7978781d-bf95-4899-9d1d-e12ba68b9491/20374101987_thumb250.jpg",
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