import React from 'react'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Experience from './Components/experience/Experience'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Portfolio from './Components/portfolio/Portfolio'
import Services from './Components/services/Services'
import Testimonial from './Components/testimonial/Testimonial'

const App = () => {
  return (
    <div>
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </>
    </div>
  )
}

export default App

/* all other components are called here in the app component in
the order I want them to appear. Also, all components are wrapped 
in React fragment <>..</> */
