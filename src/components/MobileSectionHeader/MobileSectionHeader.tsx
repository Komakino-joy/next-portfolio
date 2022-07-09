import React from 'react'
import styles from './MobileSectionHeader.module.css'

interface MobileSectionHeaderProps {
  copy: string
}

const MobileSectionHeader: React.FC<MobileSectionHeaderProps> = ({copy}) => {
  return (
    <h1 className={styles.header}>
      {copy}
    </h1>
  )
}

export default MobileSectionHeader