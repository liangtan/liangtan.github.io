import type { FC, ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper: FC<IconWrapperProps> = ({ children }: { children: ReactNode }) => (
  <span style={{ verticalAlign: "middle", marginRight: 6, display: "inline-block" }}>
    {children}
  </span>
);

export default IconWrapper;
