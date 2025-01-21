import sql from 'better-sqlite3';

const db = sql('products.db');

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

db.prepare(
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

async function initData() {
    const stmt = db.prepare(`
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

initData();
