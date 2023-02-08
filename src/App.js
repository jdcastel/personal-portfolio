import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/screens/NavBar";
import { Banner } from "./components/screens/Banner";
import { Skills } from "./components/screens/Skills";
import { Projects } from "./components/screens/Projects";
import { Contact } from "./components/screens/Contact";
import { Footer } from "./components/screens/Footer";
import { About } from './components/screens/About';
import React from 'react';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
