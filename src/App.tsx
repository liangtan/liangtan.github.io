import React from "react";
import { HashRouter } from "react-router-dom";
import Workbench from "./components/Workbench";
import { fullEditorStyle } from "./constants/styles";
import globalStyles from "./styles/global.module.scss";

const App: React.FC = () => {
  return (
    <div style={fullEditorStyle}>
      <HashRouter>
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
      </HashRouter>
    </div>
  );
};

export default App;