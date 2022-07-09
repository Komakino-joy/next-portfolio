import React from 'react'
import MobileSectionHeader from '../MobileSectionHeader/MobileSectionHeader'
import bioImg from '../../../public/assets/profile-image.webp'
import bioText from './bioText'

import styles from './Bio.module.css'

const Bio: React.FC = () => (
  <>
    <MobileSectionHeader copy={'Bio'} />
    <div id='bio' className={styles.container}>
      <div className={styles.imageContainer}>
          <img 
            className={`${styles.image} ${styles.floating}`} 
            src={bioImg.src} 
            alt='bryan alvarez' 
          />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.header}>
          About Me
        </h3>
        <p className={styles.detail}>
          {bioText}
        </p>
      </div>
    </div>
  </>
)

export default Bio
