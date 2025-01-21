'use client'
import Link from 'next/link';
import Image from 'next/image';
import classes from './product-card.module.css';
import { motion } from 'framer-motion';

export default function ProductCards({ title, slug, image, summary, creator }) {
    return (
        <motion.article
            className={classes.product}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
        >
            <header>
                <div className={classes.image}>
                    <Image
                        src={`https://modecraft-products-image.s3.amazonaws.com/${image}`}
                        alt={title}
                        fill
                    />
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
        </motion.article>
    );
}
