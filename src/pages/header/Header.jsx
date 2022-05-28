import React from 'react'
import Nav from './nav/Nav.jsx'
import About from './about/About.jsx'
import Experience from './experience/Experience.jsx'
import Projects from './projects/Projects.jsx'
import Skills from './skills/Skills.jsx'
import Contact from './contact/Contact.jsx'

const Header = () => {
  return (
    <div>Header
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default Header