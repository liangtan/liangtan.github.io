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
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;

      const clientX =
        e instanceof TouchEvent ? e.touches[0]?.clientX : (e as MouseEvent).clientX;

      const deltaX = clientX - startX.current;
      let newWidth = startWidth.current + deltaX;
      newWidth = Math.max(MIN_WIDTH, Math.min(newWidth, MAX_WIDTH));
      setWidth(newWidth);
    };

    const onUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const startDragging = (
    e: React.MouseEvent | React.TouchEvent
  ) => {
    isDragging.current = true;
    const clientX =
      "touches" in e ? e.touches[0].clientX : e.clientX;
    startX.current = clientX;
    startWidth.current = width;
    e.preventDefault();
  };

  return (
    <div className={styles.layout}>
      <div
        className={styles.content}
        style={{ width }}
      >
        {children}
        <div
          className={styles.resizer}
          onMouseDown={startDragging}
          onTouchStart={startDragging}
          onDoubleClick={() => setWidth(240)}
        />
      </div>
    </div>
  );
};

export default ResizableSidePanel;
