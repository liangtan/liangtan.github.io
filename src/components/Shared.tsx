import type { ReactNode } from "react";
import React from "react";
import { colors } from "../constants/colors";

interface SyntaxSpanProps {
  children: ReactNode;
  color: string;
}

const SyntaxSpan: React.FC<SyntaxSpanProps> = ({ children, color }) => (
  <span style={{ color }}>{children}</span>
);

export const Comment: React.FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.comment}>{children}</SyntaxSpan>
);

export const Keyword: React.FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.orange}>{children}</SyntaxSpan>
);

export const StringLiteral: React.FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.red}>{children}</SyntaxSpan>
);

export const Const: React.FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.yellow}>{children}</SyntaxSpan>
);

export const FunctionName: React.FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.green}>{children}</SyntaxSpan>
);

export const TypeName: React.FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.cyan}>{children}</SyntaxSpan>
);
