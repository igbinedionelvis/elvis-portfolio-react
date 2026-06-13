import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MessageSection from "./components/MessageSection";
import Reveal from "./components/Reveal";
import Cursor from "./components/Cursor";
import {
  Routes,
  Route
} from "react-router-dom";

import ProjectDetails from "./pages/ProjectDetails";


function App() {
  return (
    <>
      <Cursor />
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Reveal>
                <Hero />
              </Reveal>

              <Reveal>
                <About />
              </Reveal>

              <Reveal>
                <Projects />
              </Reveal>

              <Reveal>
                <Skills />
              </Reveal>

              <Reveal>
                <MessageSection />
              </Reveal>

              <Reveal>
                <Contact />
              </Reveal>
            </>
          }
        />

        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

      </Routes>

    </>
  );
}

export default App;