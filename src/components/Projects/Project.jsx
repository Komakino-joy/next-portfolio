import React from 'react'
import Mobile from './Mobile'
import Desktop from './Desktop'

const Project = ({...props}) => { 
  return (
    <div id='projects'>
      <Mobile {...props} />
      <Desktop {...props} /> 
    </div>
  )
}

export default Project
