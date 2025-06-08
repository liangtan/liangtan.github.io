import { type FC, type ReactNode } from "react";
import { codeStyle } from "../constants/styles";
import styles from "./Editor.module.scss";
import LineNumber from "./LineNumber";

interface EditorProps {
  children: ReactNode;
  numLines: number;
}

const Editor: FC<EditorProps> = ({ children, numLines }) => (
  <div className={styles.container}>
    <LineNumber numLines={numLines}></LineNumber>
    <div className={styles.editor}>
      <pre style={codeStyle}>
        { children }
      </pre>
    </div>
  </div>
);

export default Editor;
