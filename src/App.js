//Palette: https://colorhunt.co/palette/27005d9400ffaed2ffe4f1ff
import './App.css';
import Nav from './Nav'
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from "gsap";

function App() {

  const sectionRef = useRef(null);
    
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "600px",
        threshold: 0.5
    });

    const fadeOut = (element) => {
        gsap.to(element, 0.3, {
            opacity: 0,
        })
    };

    const fadeIn = (element) => {
        gsap.to(element, 0.3, {
            opacity: 1,
            backgroundColor: '#E4F1FF'
        })
    };

    intersection && intersection.intersectionRatio < 0.5
    ? fadeOut(".body")
    : fadeIn(".body")

  return (
    <div className="App">
      <div className="content">
        <Nav />
        <Home />
        <div className="body"
        ref={sectionRef}>
          <About />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;