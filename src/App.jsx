import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RoutesContainer from './RoutesContainer'
import NavbarComp from './components/NavbarComp'
import LandingPage from './components/LandingPage'
import Shop from './components/Shop'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0);

  const shopRef = useRef(null);
  const aboutRef = useRef(null);
  const landingRef = useRef(null);

  return (
    <>
      <NavbarComp shopRef={shopRef} aboutRef={aboutRef} landingRef={landingRef} />
      <RoutesContainer />
      <LandingPage landingRef={landingRef} />
      <Shop shopRef={shopRef} />
      <About aboutRef={aboutRef} />
      <Footer />
    </>
  )
}

export default App
