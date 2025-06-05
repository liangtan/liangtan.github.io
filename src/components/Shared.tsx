import type { FC, ReactNode } from "react";
import { colors } from "../constants/colors";

interface SyntaxSpanProps {
  children: ReactNode;
  color: string;
}

const SyntaxSpan: FC<SyntaxSpanProps> = ({ children, color }) => (
  <span style={{ color }}>{children}</span>
);

export const Comment: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.comment}>{children}</SyntaxSpan>
);

export const Keyword: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.orange}>{children}</SyntaxSpan>
);

export const StringLiteral: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.red}>{children}</SyntaxSpan>
);

export const Const: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.yellow}>{children}</SyntaxSpan>
);

export const FunctionName: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.green}>{children}</SyntaxSpan>
);

export const TypeName: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.cyan}>{children}</SyntaxSpan>
);
