import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Workbench from "./components/Workbench";
import { fullEditorStyle } from "./constants/styles";
import globalStyles from "./styles/global.module.scss";

const App: React.FC = () => {
  return (
    <div style={fullEditorStyle}>
      <Router>
        <div className={globalStyles.container}>
          <Workbench></Workbench>
          {/* <ResizableSidePanel>
            <FileExplorer/>
          </ResizableSidePanel>
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
          </section> */}
        </div>
      </Router>
    </div>
  );
};

export default App;