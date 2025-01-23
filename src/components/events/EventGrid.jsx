'use client'
import EventItem from './EventItem';
import classes from './event-grid.module.css';
import { motion } from 'framer-motion';

export default function EventGrid({ events }) {
    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.2, // Animates children one by one
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.ul
            className={classes.events}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {events.map((event) => (
                <motion.li key={event.id} variants={itemVariants}>
                    <EventItem {...event} />
                </motion.li>
            ))}
        </motion.ul>
    );
}
