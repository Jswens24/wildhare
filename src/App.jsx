import { useRef, useState } from 'react'
import './App.css'
import RoutesContainer from './RoutesContainer'
import NavbarComp from './components/NavbarComp'
import LandingPage from './components/LandingPage'
import Shop from './components/Shop'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  const shopRef = useRef(null);
  const aboutRef = useRef(null);
  const landingRef = useRef(null);

  return (
    <div className='app-container'>
      <NavbarComp shopRef={shopRef} aboutRef={aboutRef} landingRef={landingRef} />
      <RoutesContainer />
      <Footer />
    </div>
  )
}

export default App
