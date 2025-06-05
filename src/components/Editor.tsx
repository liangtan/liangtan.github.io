import { type FC, type ReactNode } from "react";
import { codeStyle } from "../constants/styles";

interface EditorProps {
  children: ReactNode;
}

const Editor: FC<EditorProps> = ({ children }) => (
  <code>
    <pre style={codeStyle}>
      { children }
    </pre>
  </code>
);

export default Editor;
