import { useEffect, useRef, useState, type FC } from "react";
import { Panel, PanelGroup, PanelResizeHandle, type ImperativePanelHandle } from "react-resizable-panels";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes/Routes";
import FileExplorer from "./FileExplorer";
import TabBar from "./TabBar";
import styles from "./Workbench.module.scss";

const Workbench: FC = () => {
  const [collapsedSize, setCollapsedSize] = useState(1);
  const [maxCollapsedSize, setMaxCollapsedSize] = useState(30);
  const panelRef = useRef<ImperativePanelHandle | null>(null);

   useEffect(() => {
    if (panelRef.current && window.innerWidth < 768) {
      panelRef.current.collapse();
      setMaxCollapsedSize(50);
      setCollapsedSize(8);
    }
  }, []);

  return (
    <PanelGroup direction="horizontal">
      <Panel ref={panelRef} defaultSize={15} maxSize={maxCollapsedSize} minSize={10} collapsible collapsedSize={collapsedSize}>
        <FileExplorer/>
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={100} className={styles.content}>
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
      </Panel>
    </PanelGroup>
  );
};

export default Workbench;
