'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import classes from './showcaseHeader.module.css'

export default function ShowcaseHeader() {
    return (

        <header className={classes.header}>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                あなたの手で創る
                <motion.span
                    className={classes.highlight}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [ 0.17, 0.67, 0.83, 0.67 ],
                        delay: 0.4,
                    }}
                >
                    クリエイティブなプロダクト
                </motion.span>

            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                お気に入りのプロダクトを選んで、自分だけの作品を作りましょう。簡単で楽しいです！
            </motion.p>
            <motion.p
                className={classes.cta}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Link href='/showcase/share'>お気に入りのプロダクトをシェアする</Link>
            </motion.p>
        </header>

    )
}