import React from 'react';
import Masonry from 'react-masonry-css';
import styles from './collections.module.scss';
import fanarts from '../../../assets/fanarts/fanarts';

export default function FanArts() {
    // initialize masonry
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <div className={`${styles.galleryContainer} mt-12`}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}
            >
                {fanarts.map((fanart, index) => (
                    <div key={index} className={styles.galleryItem}>
                        <img src={fanart} alt={`Ryujin Fanart's ${index + 1}`} className={styles.photo} />
                    </div>
                ))}
            </Masonry>
        </div>
    )
}
