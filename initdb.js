import sql from 'better-sqlite3';

const dbProducts = sql('products.db');
const dbEvents = sql('events.db');

const dummyProducts = [
    {
        title: 'Shadowpunk Collection',
        slug: 'shadowpunk-collection',
        image: 'ShadowpunkCollection.jpeg',
        summary:
            'An edgy collection of punk-inspired accessories, including spiked bracelets, combat boots with orange laces, bold necklaces, and graffiti-patterned hats. Designed to exude rebellion and creativity, these pieces are perfect for adding a dark, street-style flair to your outfit.',
        instructions: `
        Pairing the Accessories:

        1. Combine the spiked bracelet with the bold necklace for a cohesive punk vibe.
        Style the graffiti-patterned hat with a monochromatic outfit to make it pop.
        Boot Styling:

        2. Wear the combat boots with ripped jeans or leather pants for a complete streetwear look.
        Add matching orange or black socks for a layered touch.
        Mix and Match:

        3. Experiment with layering the metallic chains on the necklace for different looks.
        Pair the accessories with casual or formal wear to create versatile, standout outfits.
        Care Instructions:

        4. Wipe metallic accessories with a soft cloth to maintain shine.
        Keep leather items away from moisture and store in a cool, dry place.
        `,
        creator: 'Saroj Seenuan',
        creator_email: 'kensunshine7@gmail.com',
    },
    {
        title: 'Eclipse Core Accessories',
        slug: 'eclipse-core-accessories',
        image: 'Eclipse-Core-Accessories.jpeg',
        summary:
            'Futuristic glasses with LED lights and a sleek design, perfect for a night out in the city.',
        instructions: `
        Usage Instructions:

        1. Press the button on the side to activate the LED lights.
        2. Adjust the nose pads for a comfortable fit.
        Care Instructions:

        3. Clean the lenses with a microfiber cloth.
        4. Store in the provided case to avoid scratches.
        `,
        creator: 'Alex Doe',
        creator_email: 'alexdoe@example.com',
    },
    {
        title: 'Nocturnal Edge Collection',
        slug: 'nocturnal-edge-collection',
        image: 'Nocturnal-Edge-Collection.jpeg',
        summary:
            'A collection of classic vinyl records from the 70s and 80s, perfect for music enthusiasts and collectors.',
        instructions: `
        Listening Instructions:

        1. Handle records by the edges to avoid fingerprints.
        2. Use a clean needle on your turntable for the best sound quality.
        Care Instructions:

        3. Store records vertically to prevent warping.
        4. Keep away from direct sunlight and heat sources.
        `,
        creator: 'Jane Smith',
        creator_email: 'janesmith@example.com',
    },
    {
        title: 'Darkforge Essentials',
        slug: 'darkforge-essentials',
        image: 'Darkforge-Essentials.jpeg',
        summary:
            'A classic film camera with manual controls, ideal for photography enthusiasts who appreciate the art of analog.',
        instructions: `
        Usage Instructions:

        1. Load the film carefully following the guide.
        2. Adjust the focus and exposure settings manually.
        Care Instructions:

        3. Clean the lens with a soft cloth.
        4. Store in a dry place to prevent mold.
        `,
        creator: 'John Doe',
        creator_email: 'johndoe@example.com',
    },
    {
        title: 'Voidflux Streetwear',
        slug: 'voidflux-streetwear',
        image: 'Voidflux-Streetwear.jpeg',
        summary:
            'An edgy collection of punk-inspired accessories, including spiked bracelets, combat boots with orange laces, bold necklaces, and graffiti-patterned hats. Designed to exude rebellion and creativity, these pieces are perfect for adding a dark, street-style flair to your outfit.',
        instructions: `
        Pairing the Accessories:

        1. Combine the spiked bracelet with the bold necklace for a cohesive punk vibe.
        Style the graffiti-patterned hat with a monochromatic outfit to make it pop.
        Boot Styling:

        2. Wear the combat boots with ripped jeans or leather pants for a complete streetwear look.
        Add matching orange or black socks for a layered touch.
        Mix and Match:

        3. Experiment with layering the metallic chains on the necklace for different looks.
        Pair the accessories with casual or formal wear to create versatile, standout outfits.
        Care Instructions:

        4. Wipe metallic accessories with a soft cloth to maintain shine.
        Keep leather items away from moisture and store in a cool, dry place.
        `,
        creator: 'けんまる',
        creator_email: 'kensunshine7@gmail.com',
    },
    {
        title: 'Punkfire Apparel',
        slug: 'Punkfire-Apparel',
        image: 'Punkfire-Apparel.jpeg',
        summary:
            'An edgy collection of punk-inspired accessories, including spiked bracelets, combat boots with orange laces, bold necklaces, and graffiti-patterned hats. Designed to exude rebellion and creativity, these pieces are perfect for adding a dark, street-style flair to your outfit.',
        instructions: `
        Pairing the Accessories:

        1. Combine the spiked bracelet with the bold necklace for a cohesive punk vibe.
        Style the graffiti-patterned hat with a monochromatic outfit to make it pop.
        Boot Styling:

        2. Wear the combat boots with ripped jeans or leather pants for a complete streetwear look.
        Add matching orange or black socks for a layered touch.
        Mix and Match:

        3. Experiment with layering the metallic chains on the necklace for different looks.
        Pair the accessories with casual or formal wear to create versatile, standout outfits.
        Care Instructions:

        4. Wipe metallic accessories with a soft cloth to maintain shine.
        Keep leather items away from moisture and store in a cool, dry place.
        `,
        creator: 'Saroj Seenuan',
        creator_email: 'kensunshine7@gmail.com',
    },
    {
        title: 'Rogue Circuit Collection',
        slug: 'Rogue-Circuit-Collection',
        image: 'Rogue-Circuit-Collection.jpeg',
        summary:
            'An edgy collection of punk-inspired accessories, including spiked bracelets, combat boots with orange laces, bold necklaces, and graffiti-patterned hats. Designed to exude rebellion and creativity, these pieces are perfect for adding a dark, street-style flair to your outfit.',
        instructions: `
        Pairing the Accessories:

        1. Combine the spiked bracelet with the bold necklace for a cohesive punk vibe.
        Style the graffiti-patterned hat with a monochromatic outfit to make it pop.
        Boot Styling:

        2. Wear the combat boots with ripped jeans or leather pants for a complete streetwear look.
        Add matching orange or black socks for a layered touch.
        Mix and Match:

        3. Experiment with layering the metallic chains on the necklace for different looks.
        Pair the accessories with casual or formal wear to create versatile, standout outfits.
        Care Instructions:

        4. Wipe metallic accessories with a soft cloth to maintain shine.
        Keep leather items away from moisture and store in a cool, dry place.
        `,
        creator: 'シヌアン サロード',
        creator_email: 'kensunshine7@gmail.com',
    },
    {
        title: 'Neon Rebellion Series',
        slug: 'Neon-Rebellion-Series',
        image: 'Neon-Rebellion-Series.jpeg',
        summary:
            'An edgy collection of punk-inspired accessories, including spiked bracelets, combat boots with orange laces, bold necklaces, and graffiti-patterned hats. Designed to exude rebellion and creativity, these pieces are perfect for adding a dark, street-style flair to your outfit.',
        instructions: `
        Pairing the Accessories:

        1. Combine the spiked bracelet with the bold necklace for a cohesive punk vibe.
        Style the graffiti-patterned hat with a monochromatic outfit to make it pop.
        Boot Styling:

        2. Wear the combat boots with ripped jeans or leather pants for a complete streetwear look.
        Add matching orange or black socks for a layered touch.
        Mix and Match:

        3. Experiment with layering the metallic chains on the necklace for different looks.
        Pair the accessories with casual or formal wear to create versatile, standout outfits.
        Care Instructions:

        4. Wipe metallic accessories with a soft cloth to maintain shine.
        Keep leather items away from moisture and store in a cool, dry place.
        `,
        creator: 'まるけん',
        creator_email: 'kensunshine7@gmail.com',
    },
    // 他の製品をここに追加できます
];

const dummyEvents = [
    {
        slug: "fashion-future-expo",
        title: "Fashion Future Expo",
        image: "fashionshow.jpeg",
        summary: "Explore the cutting-edge of fashion technology",
        instructions: "Registration required. Bring your innovation spirit!",
        creator: "ModeCraft Team",
        creator_email: "events@modecraft.com",
        location: "Tokyo International Forum, Tokyo, Japan",
        date: "2024-09-15"
    },
    {
        slug: "web-creator",
        title: "Webクリエイター交流会",
        image: "webdesigner.jpg",
        summary: "Join industry leaders to discuss the future of technology.",
        instructions: "Tickets available online. Early bird discounts apply.",
        creator: "Tech World",
        creator_email: "info@techworld.com",
        location: "Shinjuku Gyoen, Tokyo, Japan",
        date: "2024-10-05"
    },
    {
        slug: "art-exhibition-2024",
        title: "Art Exhibition 2024",
        image: "artgallery.jpeg",
        summary: "Showcasing contemporary art from emerging artists.",
        instructions: "Free entry. Donations welcome.",
        creator: "Art Collective",
        creator_email: "contact@artcollective.com",
        location: "Tokyo Art Museum, Tokyo, Japan",
        date: "2024-11-01"
    },
    {
        slug: "summer-sonic-festival",
        title: "Summer Sonic Festival",
        image: "summersonic.jpg",
        summary: "A weekend of live music and fun activities.",
        instructions: "2024年は、東京⼤阪全⽇程がソールドアウトとなり、ソニックマニアを合わせ25万8000⼈の動員を記録。サマソニ⼤阪は万博記念公園に場所を移しての開催、また、新たな試みとしてサマソニバンコクを初開催し、アジア圏のリーディングフェスティバルとしての存在を世界にアピールした。24回⽬の開催となる2025年も、東京・⼤阪の各会場へ各国から多様なアーティストを迎えるべく⽬下準備を進行中とのことだ。",
        creator: "Music Lovers",
        creator_email: "hello@musiclovers.com",
        location: "Zozomarine stadium, Tokyo, Japan",
        date: "2025-08-16"
    },
    {
        slug: "osaka-gigantic",
        title: "OSAKA GIGANTIC MUSIC FESTIVAL 2025",
        image: "gigantic.jpg",
        summary: "osaka gigantic music festival",
        instructions: "ジャイガ”の愛称で知られる「オオサカ ジャイガンティック ミュージック フェスティバル」は、2017年にスタートした大阪発の人気音楽フェスだ。2024年の開催時には、2日間で55,000人を動員。マキシマム ザ ホルモンやキタニタツヤ、ずっと真夜中でいいのに。、MY FIRST STORY、imaseら幅広いジャンルの人気アーティストが多数出演し、ステージを熱く盛り上げた。",
        creator: "Gigantic",
        creator_email: "info@culinaryarts.com",
        location: "Osaka 万博記念公園, Osaka, Japan",
        date: "2025-7-19"
    },
    {
        slug: "startup-pitch-night",
        title: "Startup Pitch Night",
        image: "startup.jpeg",
        summary: "Watch startups pitch their ideas to investors.",
        instructions: "Networking session after pitches. Refreshments provided.",
        creator: "Startup Hub",
        creator_email: "events@startuphq.com",
        location: "Tokyo Startup Center, Tokyo, Japan",
        date: "2025-11-30"
    },
    // ... more events
];

dbProducts.prepare(
    `
   CREATE TABLE IF NOT EXISTS products (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

dbEvents.prepare(
    `
   CREATE TABLE IF NOT EXISTS events (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL,
       location TEXT NOT NULL,
       date TEXT NOT NULL
    )
`
).run();

async function initDataEvents() {
    const stmt = dbEvents.prepare(`
        INSERT INTO events VALUES (
            null,
            @slug,
            @title,
            @image,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @location,
            @date
        )
    `);

    for (const event of dummyEvents) {
        stmt.run(event);
    }
}

async function initDataProduct() {
    const stmt = dbProducts.prepare(`
      INSERT INTO products VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

    for (const product of dummyProducts) {
        stmt.run(product);
    }
}

initDataProduct();
initDataEvents();