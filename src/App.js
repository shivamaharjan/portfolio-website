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
      <Route path="/" Component={Home}></Route>
      <Route path="/contact-me" Component={ContactMe}></Route>
      <Route path="/about" Component={About}></Route>
      <Route path="/experience" Component={Experience}></Route>
      <Route path="/my-projects" Component={MyProjects}></Route>
      <Route path="/skills" Component={Skills}></Route>
    </Routes>
  );
}

export default App;
