import { type FC, type ReactNode } from "react";
import { codeStyle } from "../constants/styles";

interface EditorProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Editor: FC<EditorProps> = ({ children, className }) => (
  <code className={className}>
    <pre style={codeStyle}>
      { children }
    </pre>
  </code>
);

export default Editor;
