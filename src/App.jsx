import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
