import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';


function App() {

  

  return (
    <div className="App">


       <div className="blue-background-animation"></div>


      <Navbar />


      <div className='App__main-page-content'>  
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    
    </div>
  );
}

export default App;
