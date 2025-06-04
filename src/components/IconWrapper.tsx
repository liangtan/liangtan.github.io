import React, { ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <span style={{ verticalAlign: "middle", marginRight: 6, display: "inline-block" }}>
    {children}
  </span>
);

export default IconWrapper;
