import { type FC } from "react";
import EditorWithLineNumber from "../EditorWithLineNumber";
import {
  Colon,
  Comment,
  Const,
  EqualSign,
  FunctionName,
  Keyword,
  Parentheses,
  StringLiteral,
  TypeName,
  VariableName,
} from "../Shared";
import { TypingEffect } from "../TypingEffect";

const lines = [
  <Comment>// Hi there! It's-a-me 👋</Comment>,
  <>
    <Const>const</Const>{" "}
    <VariableName>name</VariableName>{" "}
    <EqualSign/>{" "}
    <StringLiteral>"Liang Tan"</StringLiteral>;
  </>,
  <>
    <Const>const</Const>{" "}
    <VariableName>title</VariableName>{" "}
    <EqualSign/>{" "}
    <StringLiteral>"Chief Code Officer 🧠💻"</StringLiteral>;
  </>,
  <>
    <Const>const</Const>{" "}
    <VariableName>loves</VariableName>{" "}
    <EqualSign/>{" "}[
    <StringLiteral>"design curious"</StringLiteral>, <StringLiteral>"code"</StringLiteral>, <StringLiteral>"making weird ideas real"</StringLiteral>, <StringLiteral>"debugging at 3:21 PM"</StringLiteral>
    ];
  </>,
  <>
  	<br />
  </>,
  <>
    <Keyword>function</Keyword> <FunctionName>sayHi</FunctionName><Parentheses/><Colon/> <TypeName>string</TypeName> {"{"}
  </>,
  <>
    {"  "}
    <Keyword>return</Keyword> <StringLiteral>"Thanks for visiting!"</StringLiteral>;
  </>,
  <>
    {"}"}
  </>,
  <br/>
];

const AboutMe: FC = () => (
  <EditorWithLineNumber numLines={lines.length + 1}>
    {lines.map((line, index) => (
      <div key={index}>{line}</div>
    ))}
    <TypingEffect texts={["sayHi();"]}></TypingEffect>
  </EditorWithLineNumber>
);

export default AboutMe;
