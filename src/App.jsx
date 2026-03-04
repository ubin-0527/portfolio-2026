import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetail";
import DraftProlog from "./pages/DraftProlog";
import Prolog from "./pages/Prolog";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"             element={<Home />}           />
          <Route path="/about"        element={<About />}          />
          <Route path="/projects"     element={<Projects />}       />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/draftprolog"  element={<DraftProlog />}    />
        </Route>
        <Route path="/prolog" element={<Prolog />} />
      </Routes>
    </Router>
  );
}

export default App;
