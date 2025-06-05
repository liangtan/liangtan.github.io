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
  <SyntaxSpan color={colors.gray}>{children}</SyntaxSpan>
);

export const Keyword: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.orange}>{children}</SyntaxSpan>
);

export const StringLiteral: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.yellow}>{children}</SyntaxSpan>
);

export const Const: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.cyan}>{children}</SyntaxSpan>
);

export const FunctionName: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.green}>{children}</SyntaxSpan>
);

export const TypeName: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.cyan}>{children}</SyntaxSpan>
);

export const JsonKey: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.cyan}>"{children}"</SyntaxSpan>
);

export const VariableName: FC<{ children: ReactNode }> = ({ children }) => (
  <SyntaxSpan color={colors.offWhite}>{children}</SyntaxSpan>
);

export const EqualSign: FC = () => (
  <SyntaxSpan color={colors.magenta}>=</SyntaxSpan>
);

export const Parentheses: FC = () => (
  <SyntaxSpan color={colors.yellow}>()</SyntaxSpan>
);

export const OpeningCurlyBrace: FC = () => (
  <SyntaxSpan color={colors.yellow}>&#123;</SyntaxSpan>
);

export const ClosingCurlyBrace: FC = () => (
  <SyntaxSpan color={colors.yellow}>&#125;</SyntaxSpan>
);

export const Colon: FC = () => (
  <SyntaxSpan color={colors.magenta}>:</SyntaxSpan>
);
