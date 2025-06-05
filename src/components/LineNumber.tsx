import type { FC } from "react";
import { lineNumberStyle } from "../constants/styles";

interface LineNumberProps {
  numLines: number;
}

const LineNumber: FC<LineNumberProps> = ({ numLines }: { numLines: number }) => {
  return (
    <div style={lineNumberStyle}>
      {Array.from({ length: numLines }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
};

export default LineNumber;
