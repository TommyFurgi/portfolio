import Background from "./components/Background";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Background />
      <NavBar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer /> 
      <Links /> 
    </div>
  );
}

export default App;