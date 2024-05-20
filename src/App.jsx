import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Benefits from './Components/Benefits/Benefits'
import Features from './Components/Features/Features'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Benefits />
      <Features />
    </div>

  )
}

export default App
