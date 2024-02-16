import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages";
import Portfolio from "./pages/portfolio";
import AboutMe from "./pages/aboutme";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/portfolio" element={<Portfolio/>}/>
        <Route exact path="/aboutme" element={<AboutMe/>}/>
      </Routes>
    </Router>
  )
}

export default App;