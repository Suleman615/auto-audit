
import './App.css'
import AboutUs from './components/AboutUs'
import Achievements from './components/Achievements'
import Commitments from './components/Commitments'
import Contact from './components/Contact'
import CountriesSlider from './components/CountriesSlider'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Network from './components/Network'
import Packages from './components/Packages'
import Services from './components/Services'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <CountriesSlider/>
    <AboutUs/>
    <Achievements/>
    <Services/>
    <Packages/>
    <Commitments/>
    <Network/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
