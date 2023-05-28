import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Notfound from './pages/notfound';

const App=() => {
  
  const [getNavbarValue, setNavbarValue] = useState("")

  const changeNavbar =() => {
    setNavbarValue("My contact")
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
