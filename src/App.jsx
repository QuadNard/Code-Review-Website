import Navbar from "./components/Navbar";
import '../src/styles/App.css'
import Hero from "./components/Hero"
import Experience from "./components/Experience";
import About from '../src/components/About'
import Contact from "../src/components/Contact"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Contact />
    </>
  );
}

export default App;
