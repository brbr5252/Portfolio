import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import Projects from './containers/projects';


function App() {
  return (
    <div>
             <div className="blue-background-animation"></div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="projects1">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}


export default App;
