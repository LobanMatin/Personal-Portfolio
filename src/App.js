//Palette: https://colorhunt.co/palette/27005d9400ffaed2ffe4f1ff
import './App.css';
import Nav from './Nav'
import Home from './Home';
import About from './About';
import Accent from './Accent';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Nav />
        <Home />
        <Accent />
        <About />
      </div>
    </div>
  );
}

export default App;