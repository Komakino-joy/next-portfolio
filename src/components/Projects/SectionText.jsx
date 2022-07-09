import React from 'react'
import TechLogo from '../TechLogo/TechLogo'
import styles from './Project.module.css'

const SectionText = ({...props}) => (
  <div className={styles.text}>
    <h3 className={styles.header}>{props.projectName}</h3>
    <h4 className={styles.title}>Project Description</h4>
    <p className={styles.detail}> {props.description} </p>
    <br/>
    <h4 className={styles.githubTitle}>GitHub Repository</h4>
    <a href={props.githubRepo} target='_blank' rel='noreferrer'>
        <p className={`${styles.link} ${styles.gitHubLink}`}> {props.githubRepo} </p>
    </a>
    {props?.liveDemo &&
      <>
        <h4 className={styles.title}>Live Demonstration</h4>
        <a href={props.liveDemo} target='_blank' rel='noreferrer'>
          <p className={styles.link}> {props.liveDemo} </p>
        </a>
      </>
    }
    <br/>
    <h4 className={styles.title}>Technologies Used</h4>
    <ul className={styles.techStack}>
        {
          props.techStack.map( tech => (
            <li key={tech.id} className={styles.techItem}> 
              <TechLogo {...tech} />
            </li>
          ))
        }
    </ul>
  </div>
)

export default SectionText