import './App.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  const [isOpen , setIsOpen ] = useState(false); 

  const toggle = () => {
    setIsOpen(!isOpen); 
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('resized')
      }
    }; 

    window.addEventListener('resize', hideMenu); 

  }); 

  return (
    <div className="App">
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Router>
      <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/About"   element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Skills"  element={<Skills />} />
      </Routes>
      </Router>
      
      <Footer />


     </div>
  );
}

export default App;
