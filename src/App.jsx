import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetail";
import DraftProlog from "./pages/DraftProlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/draftprolog" element={<DraftProlog />} />
      </Routes>
    </Router>
  );
}

export default App;

