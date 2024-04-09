import Header from './components/header/Header';
import Home from './components/home/Home';
import AboutMe from './components/about/AboutMe';
import CONTACT from './components/CONTACT/CONTACT'
// import PORTFOLIO from './components/PORTFOLIO/PORTFOLIO';
// import Qualifications from './components/Qualifications/Qualifications';
import ScrollUp from './components/scrollup/ScrollUp';
// import Services from './components/Services/Services';
import Skills from './components/skills/Skills';
// import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/footer/Footer';
import './App.css'

function App() {

  return (
    <>
      <Header/>

      <main className="main">
        <Home/>
        <AboutMe/>
        <Skills/>
        {/* <PORTFOLIO/> */}
        {/* <Qualifications/> */}
        {/* <Services/> */}
        {/* <Testimonials/>  */}
        <CONTACT/>
      </main>

      <ScrollUp/>
      <Footer/>
    </>
  )
}

export default App
