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
    <>
      <NavbarComp shopRef={shopRef} aboutRef={aboutRef} landingRef={landingRef} />
      <RoutesContainer />
      <LandingPage shopRef={shopRef} landingRef={landingRef} />
      <Shop shopRef={shopRef} />
      <About aboutRef={aboutRef} />
      <Footer />
    </>
  )
}

export default App
