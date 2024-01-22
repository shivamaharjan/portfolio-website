import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componenets/Home';
import ContactMe from './componenets/ContactMe';
import Skills from './componenets/Skills';
import About from './componenets/About';
import Experience from './componenets/Experience';
import MyProjects from './componenets/MyProjects';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact-me" element={<ContactMe/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/experience" element={<Experience/>}></Route>
      <Route path="/my-projects" element={<MyProjects/>}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
    </Routes>
  );
}

export default App;
