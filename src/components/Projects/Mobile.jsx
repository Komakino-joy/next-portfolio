import React, {useState} from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import SectionText from './SectionText';

import styles from './Project.module.css'

const Mobile = ({children, ...props}) => {
  const { projectName, mobileImage } = props

  const [isExpanded, setIsExpanded] = useState(false);
  const expandSection = () => {
    setIsExpanded(!isExpanded);
  }; 

  const iconClass = !isExpanded ?  `${styles.dropDownIcon} fas fa-angle-right` : `${styles.dropDownIcon} fas fa-angle-down dropdown-icon` 

  return (
    <div className={styles.mobile}>
      <Accordion 
        allowZeroExpanded 
        className={styles.accordion}
      >
        <AccordionItem className={styles.accordionItem}>
          <AccordionItemHeading onClick={expandSection}>
            <AccordionItemButton>
              <i className={iconClass} />
              {projectName}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className={styles.container}>
              <SectionText {...props} />
              <img 
                className={styles.mobileImage} 
                src={mobileImage.src} 
                alt='mobile phone'
              />
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <hr className={styles.hr} />
    </div>
  )
}

export default Mobile