import React from 'react'
import Logos from '../TechLogo/logos'
import personCoding from '../../../public/assets/person-coding.svg'
import styles from './LogoCloud.module.css'
import MobileSectionHeader from '../MobileSectionHeader/MobileSectionHeader'

const PersonCoding: React.FC = () => (
  <img 
    className={styles.gridImage}
    src={personCoding.src} 
    alt='person-coding'
  />
)

const LogoCloud: React.FC = () => (
  <div id='skills'>
  <ul className={styles.container}>
  <PersonCoding />
    {
      Logos.map((logo: any, index: number) => (
        <div key={logo.props.id} className={styles[`l${index + 1}`]}>
          <li className={styles.logo}>
            {logo}
          </li>
        </div>
      ))
    }
  </ul>

  {/* Classes for mobile views */}
  <MobileSectionHeader copy={'Skills'} />
  <div className={styles.mobileContainer}>
  <ul className={styles.mobileLogoList}>
    {
      Logos.map((logo: any, index: number) => (
        <div key={logo.props.id} className={styles.mobileLogo}>
          <li>
            {logo}
          </li>
        </div>
      ))
    }
  </ul>
    <PersonCoding />
  </div>
</div>
)

export default LogoCloud