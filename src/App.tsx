import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TabBar from "./components/TabBar";
import { fullEditorStyle } from "./constants/styles";
import { routes } from "./routes/Routes";

const App: React.FC = () => {
  return (
    <div style={fullEditorStyle}>
      <Router>
        <TabBar />
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" replace />} />
          {
            routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))
          }
        </Routes>
      </Router>
    </div>
  );
};

export default App;