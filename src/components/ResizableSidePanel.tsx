import React, { useEffect, useRef, useState } from "react";
import styles from "./ResizableSidePanel.module.scss";

const DEFAULT_WIDTH = 200;
const MIN_WIDTH = 10;
const MAX_WIDTH = 500;

const ResizableSidePanel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!isDragging.current) {
        return;
      }

      const deltaX = e.clientX - startX.current;
      let newWidth = startWidth.current + deltaX;
      newWidth = Math.max(newWidth, MIN_WIDTH);
      newWidth = Math.min(newWidth, MAX_WIDTH);
      setWidth(newWidth);
    }

    function onMouseUp() {
      isDragging.current = false;
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  function onMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    startX.current = e.clientX;
    startWidth.current = width;
    e.preventDefault();
  }

  return (
    <div className={styles.layout}>
      <div
        className={styles.content}
        style={{ width }}
      >
        {children}
        <div
          className={styles.resizer}
          onMouseDown={onMouseDown}
          onDoubleClick={() => setWidth(240)}
        />
      </div>
    </div>
  );
};

export default ResizableSidePanel;
