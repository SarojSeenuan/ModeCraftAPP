'use client'
import Link from 'next/link';
import Image from 'next/image';
import classes from './EventItem.module.css';
import { motion } from 'framer-motion';

export default function EventItem({ title, location, creator, image, date, slug }) {
    const formattedDate = new Date(date).toLocaleDateString('jp', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
    return (
        <motion.article
            className={classes.events}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
        >
            <header>
                <div className={classes.image}>
                    <Image
                        src={`https://modecraft-events-image.s3.amazonaws.com/${image}`}
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
                <p className={classes.date}>{formattedDate}</p>
                <p className={classes.location}>{location}</p>
                <div className={classes.actions}>
                    <Link href={`/events/${slug}`}>View Details</Link>
                </div>
            </div>
        </motion.article>
    );
}
