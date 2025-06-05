import { colors } from "./colors";

// tab
export const tabBarStyle: React.CSSProperties = {
  display: "flex",
  backgroundColor: "#1e1e1e",
  borderBottom: `1px solid ${colors.gutter}`,
};

export const tabStyle: React.CSSProperties = {
  padding: "10px 16px",
  color: colors.white,
  backgroundColor: "#1e1e1e",
  cursor: "pointer",
  borderRight: `1px solid ${colors.gutter}`,
  fontSize: "13px",
  textDecoration: "none"
};

export const activeTabStyle: React.CSSProperties = {
  ...tabStyle,
  backgroundColor: colors.background,
  borderBottom: "none",
};

// editor
export const fullEditorStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  backgroundColor: colors.background,
  color: colors.foreground,
  fontFamily: "'Fira Code', monospace",
  fontSize: "14px",
  overflow: "hidden",
};

export const codeWrapperStyle: React.CSSProperties = {
  display: "flex",
  flex: 1,
  overflow: "auto",
};

export const lineNumberStyle: React.CSSProperties = {
  backgroundColor: colors.background,
  color: colors.gray,
  padding: "0 16px",
  textAlign: "right",
  userSelect: "none",
  lineHeight: "1.5em",
  borderRight: `1px solid ${colors.gutter}`,
};

export const codeStyle: React.CSSProperties = {
  backgroundColor: colors.background,
  paddingLeft: "16px",
  whiteSpace: "pre",
  lineHeight: "1.5em",
  flex: 1,
  marginTop: 0, // reset browser default margin
};
