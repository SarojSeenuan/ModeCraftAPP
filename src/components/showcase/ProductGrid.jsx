'use client'
import ProductCards from './ProductCards';
import classes from './product-grid.module.css';
import { motion } from 'framer-motion';

export default function ProductGrid({ products }) {
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
            className={classes.products}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {products.map((product) => (
                <motion.li key={product.id} variants={itemVariants}>
                    <ProductCards {...product} />
                </motion.li>
            ))}
        </motion.ul>
    );
}
