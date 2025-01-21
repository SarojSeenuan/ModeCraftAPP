'use client'
import React from 'react';
import { motion } from 'framer-motion';

const AboutUS = () => {
    return (
        <>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                ABOUT US
            </motion.h2>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                「モークラフト」は、ファッションの未来を形作る革新的なプラットフォームであり、あなたの創造力を引き出し、あなた自身のスタイルを見つける手助けをします。私たちと共に、ファッションの新しい可能性を探求し、未来を共に創り上げましょう。
            </motion.p>
        </>
    );
};

export default AboutUS;
