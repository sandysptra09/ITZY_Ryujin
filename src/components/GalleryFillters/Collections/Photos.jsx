import React from 'react';
import Masonry from 'react-masonry-css';
import styles from './collections.module.scss';
import photos from '../../../assets/photos/photos';

export default function Photos() {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <div className={styles.galleryContainer}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}
            >
                {photos.map((photo, index) => (
                    <div key={index} className={styles.galleryItem}>
                        <img src={photo} alt={`Photo ${index + 1}`} className={styles.photo} />
                    </div>
                ))}
            </Masonry>
        </div>
    );
}
