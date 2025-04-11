import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Products from "./components/Products"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Solution from "./components/Solution"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Solution/>
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
