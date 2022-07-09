import React from 'react'
import SectionText from './SectionText'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import laptopBase from '../../../public/assets/laptop.webp'
import styles from './Project.module.css'

const Desktop = ({...props}) => {
  const { images } = props
  return (
    <div className={`${styles.container} ${styles.desktop}`}>
      <SectionText {...props} />
      <div className={styles.laptopContainer}>
        <img 
          className={styles.laptopFrame} 
          src={laptopBase.src} 
          alt='laptop frame'
        />
        <Carousel 
          className={styles.laptopScreen} 
          showThumbs={false} 
          showStatus={false} 
          renderIndicator={false}
          autoPlay
          infiniteLoop
          interval={3000}
        >
          {
            images.map(image => (
              <img 
                key={image.id} 
                className={styles.cImg}
                src={image.img.src}
                alt={image.alt}
              />
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Desktop