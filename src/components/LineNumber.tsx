import React from "react";
import { lineNumberStyle } from "../constants/styles";

interface LineNumberProps {
  count: number;
}

const LineNumber: React.FC<LineNumberProps> = ({ count }: { count: number }) => {
  return (
    <div style={lineNumberStyle}>
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
};

export default LineNumber;
