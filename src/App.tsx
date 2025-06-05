import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import FileExplorer from "./components/FileExplorer";
import ResizableSidebar from "./components/ResizableSidePanel";
import TabBar from "./components/TabBar";
import { fullEditorStyle } from "./constants/styles";
import { routes } from "./routes/Routes";

const App: React.FC = () => {
  return (
    <div style={fullEditorStyle}>
      <Router>
        <TabBar />
        <section className={styles.content}>
          <ResizableSidebar>
            <FileExplorer/>
          </ResizableSidebar>
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
        </section>
      </Router>
    </div>
  );
};

export default App;