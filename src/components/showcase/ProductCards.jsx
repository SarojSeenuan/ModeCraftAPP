import Link from 'next/link';
import Image from 'next/image';
import classes from './product-card.module.css';

export default function ProductCards({ title, slug, image, summary, creator }) {
    return (
        <article className={classes.product}>
            <header>
                <div className={classes.image}>
                    <Image src={`https://modecraft-products-image.s3.amazonaws.com/${image}`} alt={title} fill />
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/showcase/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}
