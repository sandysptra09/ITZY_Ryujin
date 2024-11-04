import React, { useEffect, useState, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useTransform, useScroll } from 'framer-motion';
import styles from './Gallery.module.scss'
import { styles as globalStyles } from '../../styles';
import images from '../../assets/images/images';

export default function Gallery() {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    });

    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", resize);
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div className='mb-4'>
            <motion.div
                className={`${globalStyles.sectionHeadText} text-center mb-8` } 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={globalStyles.sectionHeadText}>Ryujin Gallery's</h2>
            </motion.div>
            <div ref={gallery} className={styles.gallery}>
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
            </div>
            <div className={styles.spacer}></div>
        </div>
    );
}

const Column = ({ images, y }) => {
    return (
        <motion.div className={styles.column} style={{ y }}>
            {images.map((src, i) => (
                <div key={i} className={styles.imageContainer}>
                    <img src={src} alt={`gallery-image-${i + 1}`} />
                </div>
            ))}
        </motion.div>
    );
};
