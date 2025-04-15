import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Solution from "./components/Solution"
import Mission from './components/Mission'


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      {/* <Products /> */}
      <Solution/>
      <Mission/>
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
