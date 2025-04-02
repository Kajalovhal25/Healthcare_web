import React from 'react'
import './App.css'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Benefits from './components/benefits'
import Team from './components/team'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import Footer from './components/footer'

export default function App() {
  return (
    <div>
      <Hero />
      <About/>
      <Services/>
      <Benefits/>
      <Team/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}
