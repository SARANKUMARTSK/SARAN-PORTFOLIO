import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import TopContent from './components/TopContent/TopContent'
import Project from './components/Projects/Project'
import About from './components/About/About'
import Experience from './components/Experience/Experience'

function App() {
  return <>
  <Navbar />
  <TopContent />
  <About />
  <Skills />
  <Project />
  <Experience />
  <Footer />
  </>
}

export default App