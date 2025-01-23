import { getProduct } from 'modecraft/lib/products';
import classes from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';


export async function generateMetadata({ params }) {
    const product = await getProduct(params.productSlug);
    return {
        title: product.title,
        description: product.summary,
    };
}

export default async function ProductDetailsPage({ params }) {
    const product = await getProduct(params.productSlug);

    if (!product) {
        notFound();
    }

    product.instructions = product.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image
                        src={`https://modecraft-products-image.s3.amazonaws.com/${product.image}`}
                        alt={product.title}
                        fill
                    />{' '}
                </div>
                <div className={classes.headerText}>
                    <h1>{product.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`malito:${product.creator_email}`}>{product.creator}</a>
                    </p>
                    <p className={classes.summary}>{product.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{ __html: product.instructions }}
                ></p>
            </main>
        </>
    );
}
