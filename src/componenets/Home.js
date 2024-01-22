import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NavBar from './NavBar'
import Hero from './Hero'
import Skills from './Skills'
import About from './About'
import MyProjects from './MyProjects'
import Experience from './Experience'
import ContactMe from './ContactMe'

function Home() {
  return (
   <div>
    <NavBar />
    <Hero/>
    <About/>
    <Skills/>
    <MyProjects/>
    <Experience/>
    <ContactMe/>
   </div>
  )
}

export default Home