import React from 'react'
import styles from './Banner.module.css'

const Banner: React.FC = () => (
    <section className={styles.container}>
      <i className={`${styles.laptop} fas fa-laptop-code`} />
      <p className={styles.header}>Bryan Alvarez</p>
      <p className={styles.subheader}>FULL STACK WEB DEVELOPER</p>
    </section>
  )

export default Banner
