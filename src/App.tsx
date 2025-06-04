import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import TabBar from "./components/TabBar";
import { fullEditorStyle } from "./constants/styles";

const App: React.FC = () => {
  return (
    <div style={fullEditorStyle}>
      <Router>
        <TabBar />
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" replace />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;