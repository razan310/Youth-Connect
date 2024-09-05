

import Hero from "./components/Hero/Hero"
import img1 from "./assets/images/Picture5.png"
import OurProjects from "./components/Ourproject/OurProjects"
import Values from "./components/values/Values"
import Footer from './components/footer/Footer'
import Contactus2 from "./components/contactus2/Contactus2"
import NavBar from "./components/Navbar/Navbar"
import Lessons from "./components/LessonsLearned/Lessons"
import About from "./components/About/About"



function App() {
  

  return (
    <>
    <NavBar/>
    <Hero img={img1} desc="Young people have a clear understanding of their identity and affiliations." title="Healthy community"/>
    <About/>
    <OurProjects/>
    <Lessons/>
    <Contactus2/>
    <Footer/>
    </>
  )
}

export default App
