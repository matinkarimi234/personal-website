import React from 'react';
import './App.css';
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
