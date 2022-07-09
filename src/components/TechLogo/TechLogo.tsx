import { StaticImageData } from 'next/image';
import React from 'react'

import styles from './TechLogo.module.css'

export interface TechLogoProps {
  id: number,
  image: StaticImageData;
  href : string;
  alt: string;
  title: string
}

const TechLogo: React.FC<TechLogoProps> = ({image, href, alt, title }) => {
  return (
    <a 
      href={href} 
      target='blank' 
      title={title}
    >
      <img 
        className={styles.logo} 
        src={image.src} 
        alt={alt} 
      />
    </a>
  )
}

export default TechLogo