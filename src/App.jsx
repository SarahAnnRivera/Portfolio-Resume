import "./App.css";
import "./index.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { useState } from "react";
import ContactModal from "./Components/ContactModal";


function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />

       <button
        className="contact__floating"
        onClick={() => setIsContactOpen(true)}
      >
        ✉
      </button>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />


    </div>
  )
}

export default App;
