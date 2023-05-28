import "./styles/App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
