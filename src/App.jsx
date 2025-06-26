import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='font-mono bg-gray-800'>
      <Header />
      <Hero />
      <Skill />
      <Projects />
    </div>
  )
}

export default App
