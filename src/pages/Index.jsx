import React from 'react'

// imoport components
import Gallery from '../components/Gallery/Gallery'
import Overview from '../components/Overview/Overview'

// import module styles
import styles from '../components/Gallery/gallery.module.scss'
import Hero from '../components/Hero/Hero'
import Discography from '../components/Discography/Discography'

export default function Index() {
    return (
        <div>
            <Hero />
            <Overview />
            <Gallery />
            <Discography />
            <div className={styles.spacer}></div>
        </div>
    )
}
