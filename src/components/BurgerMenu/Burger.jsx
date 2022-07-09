import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-scroll'

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)

    return (
      <Menu isOpen={open}>
        <Link 
          onClick={setOpen}
          activeClass="active" 
          to="bio" 
          spy={true} 
          smooth={true} 
          duration={500}>
          <i className="fas fa-address-card menu-icon" /> ABOUT
        </Link>
        <Link 
          onClick={setOpen}
          activeClass="active" 
          to="projects" 
          spy={true} 
          smooth={true} 
          duration={500}>
          <i className="fas fa-tools menu-icon" /> PROJECTS
        </Link>
        <Link 
          onClick={setOpen}
          activeClass="active" 
          to="skills" 
          spy={true} 
          smooth={true} 
          duration={500}>
          <i className="fas fa-toolbox menu-icon" /> SKILLS
        </Link>
      </Menu>
    )
}

export default BurgerMenu
