// import logo from './logo.svg';
// import ReactDOM from "react-dom";
import Navigation from '../src/components/Navigation'
import Footer from '../src/components/Footer'
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from '../src/components/home'
import About from '../src/components/about';
import Experience from '../src/components/experience';
import Projects from '../src/components/projects';
import Contact from '../src/components/contact';
import './App.css';

function App() {
  return (
      <div className="App">
      <Navigation />
      <Switch>
      <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
      </div>
  );
}

export default App;
