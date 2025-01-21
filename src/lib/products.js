import { S3 } from '@aws-sdk/client-s3';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const s3 = new S3({
    region: 'ap-southeast-2',
});

const db = sql('products.db');

export async function getProducts() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return db.prepare('SELECT * FROM products').all();
}

export function getProduct(slug) {
    return db.prepare('SELECT * FROM products WHERE slug = ?').get(slug);
}


export async function saveProduct(product) {
    product.slug = slugify(product.title, { lower: true });
    product.instructions = xss(product.instructions);

    const extension = product.image.name.split('.').pop();
    const fileName = `${product.slug}.${extension}`;

    const bufferedImage = await product.image.arrayBuffer();

    s3.putObject({
        Bucket: 'modecraft-products-image',
        Key: fileName,
        Body: Buffer.from(bufferedImage),
        ContentType: product.image.type,
    });

    product.image = fileName;

    db.prepare(
        `
    INSERT INTO products
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
    ).run(product);
}
