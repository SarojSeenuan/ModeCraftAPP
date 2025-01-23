import { S3 } from '@aws-sdk/client-s3';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const s3 = new S3({
    region: 'ap-southeast-2',
});

const db = sql('events.db');

export async function getEvents() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return db.prepare('SELECT * FROM events').all();
}

export function getEvent(slug) {
    return db.prepare('SELECT * FROM events WHERE slug = ?').get(slug);
}

export async function saveEvent(event) {
    event.slug = slugify(event.title, { lower: true });
    event.instructions = xss(event.instructions);

    const extension = event.image.name.split('.').pop();
    const fileName = `${event.slug}.${extension}`;

    const bufferedImage = await event.image.arrayBuffer();

    s3.putObject({
        Bucket: 'modecraft-events-image',
        Key: fileName,
        Body: Buffer.from(bufferedImage),
        ContentType: event.image.type,
    });

    event.image = fileName;

    db.prepare(
        `
    INSERT INTO products
      (slug, title, image, summary, instructions, creator, creator_email, location, date)
    VALUES (
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
  `
    ).run(event);
}