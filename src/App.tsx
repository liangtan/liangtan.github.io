import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import FileExplorer from "./components/FileExplorer";
import ResizableSidebar from "./components/ResizableSidePanel";
import TabBar from "./components/TabBar";
import { fullEditorStyle } from "./constants/styles";
import { routes } from "./routes/Routes";
import globalStyles from "./styles/global.module.scss";

const App: React.FC = () => {
  return (
    <div style={fullEditorStyle}>
      <Router>
        <div className={globalStyles.container}>
          <ResizableSidebar>
            <FileExplorer/>
          </ResizableSidebar>
          <section className={styles.content}>
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
        </section>
        </div>
      </Router>
    </div>
  );
};

export default App;