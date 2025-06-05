import { type FC, type ReactNode } from "react";
import globalStyles from "../styles/global.module.scss";
import Editor from "./Editor";
import styles from "./EditorWithLineNumber.module.scss";
import LineNumber from "./LineNumber";

interface EditorProps {
  children: ReactNode;
  numLines: number;
}

const EditorWithLineNumber: FC<EditorProps> = ({ children, numLines }) => (
  <div className={globalStyles.container}>
    <LineNumber numLines={numLines}></LineNumber>
    <Editor className={styles.editor}>
      { children}
    </Editor>
  </div>
);

export default EditorWithLineNumber;
