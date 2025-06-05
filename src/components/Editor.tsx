import { type FC, type ReactNode } from "react";
import { codeStyle } from "../constants/styles";

interface EditorProps {
  children: ReactNode;
}

const Editor: FC<EditorProps> = ({ children }) => (
  <pre style={codeStyle}>
    <code>
      { children }
    </code>
  </pre>
);

export default Editor;
