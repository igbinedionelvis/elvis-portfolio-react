import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>
    </>
  );
}

export default App;