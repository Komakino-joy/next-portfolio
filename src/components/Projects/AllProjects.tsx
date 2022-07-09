import React from 'react'
import Project from './Project'
import projects from '../../data/homepageData'
import MobileSectionHeader from '../MobileSectionHeader/MobileSectionHeader'

const AllProjects: React.FC = () =>  (
    <>
      <MobileSectionHeader copy={'Projects'} />
        { 
          projects.map(project => (
            <Project key={project.projectName} {...project} />
          ))
        }
    </>
  )

export default AllProjects