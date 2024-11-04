import React from 'react'

// imoport components
import Gallery from '../components/Gallery/Gallery'
import Overview from '../components/Overview/Overview'

// import module styles
import styles from '../components/Gallery/gallery.module.scss'

export default function Index() {
  return (
    <div>
        <div className={styles.spacer}>
            <Overview />
        </div>
        <Gallery />
    </div>
  )
}
