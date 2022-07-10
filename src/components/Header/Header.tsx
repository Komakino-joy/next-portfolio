import React, { useState, useEffect, useCallback } from 'react'
import BurgerMenu from '../BurgerMenu/Burger'
import linkedIn from '../../../public/assets/linkedin.logo.svg'
import gitHub from '../../../public/assets/github.logo.svg'

import styles from './header.module.css'

const Header = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [visible, setVisible] = useState(true)
  
  const handleScroll = useCallback(
    () => {
      const currentScrollPos = window.pageYOffset;
      const topOfPage = window.pageYOffset === 0;
      const bottomOfPage = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
      const userScrolledUp = prevScrollpos > currentScrollPos && currentScrollPos !== 0;
      setPrevScrollpos(currentScrollPos);
      
      if ( !userScrolledUp || bottomOfPage ) setVisible(false);
      if ( userScrolledUp || topOfPage) setVisible(true);
      
    },[prevScrollpos],
    )
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll])
  
  
  const navBarClassName = !visible ? `${styles.header} ${styles.hidden}` : styles.header
  return (
    <nav className={navBarClassName}> 
     <BurgerMenu />
      <a 
        href='https://github.com/Komakino-joy' 
        target='_blank' 
        rel="noreferrer"
      >
        <img 
          className={`${styles.logo} ${styles.github}`} 
          src={gitHub.src} 
          alt='github logo'
        />
      </a> 
      <a 
        href='https://www.linkedin.com/in/bryan-alvarez-8b37b8132' 
        target='_blank' 
        rel="noreferrer"
      >
        <img 
          className={styles.logo} 
          src={linkedIn.src} 
          alt='linked in logo'
        />
      </a> 
    </nav>
  )
}

export default Header
