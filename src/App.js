//Palette: https://colorhunt.co/palette/27005d9400ffaed2ffe4f1ff
import './App.css';
import Nav from './Nav'
import Home from './Home';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Nav />
        <Home />
        <About />
        <Projects />  
      </div>
    </div>
  );
}

export default App;