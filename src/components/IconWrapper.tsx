import type { FC, ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
}

const iconStyle: React.CSSProperties = {
  lineHeight: "1em", // to not increase the line height
  verticalAlign: "middle",
  display: "inline-block"
};

const IconWrapper: FC<IconWrapperProps> = ({ children }) => (
  <span style={iconStyle}>
    {children}
  </span>
);

export default IconWrapper;
