import { type FC } from "react";
import { fullEditorStyle } from "../constants/styles";
import styles from "./AboutMe.module.scss";
import Editor from "./Editor";
import LineNumber from "./LineNumber";
import {
  Comment,
  FunctionName,
  Keyword,
  StringLiteral,
} from "./Shared";

const lines = [
  <Comment key="c1">// Hi there! It's-a-me 👋</Comment>,
  <>
    <Keyword>const</Keyword> name = <StringLiteral>"Liang Tan"</StringLiteral>;
  </>,
  <>
    <Keyword>const</Keyword> role = <StringLiteral>"Chief Code Officer 🧠💻"</StringLiteral>;
  </>,
  <>
    <Keyword>const</Keyword> loves = [
    <StringLiteral>"design curious"</StringLiteral>, <StringLiteral>"code"</StringLiteral>, <StringLiteral>"making weird ideas real"</StringLiteral>, <StringLiteral>"debugging at 3:21 PM"</StringLiteral>
    ];
  </>,
  <>
  	<br />
  </>,
  <>
    <Keyword>function</Keyword> <FunctionName>sayHi</FunctionName>(): string {"{"}
  </>,
  <>
    {"  "}
    <Keyword>return</Keyword> <StringLiteral>"Thanks for visiting!"</StringLiteral>;
  </>,
  <>
    {"}"}
  </>
];

const AboutMe: FC = () => (
  <div style={fullEditorStyle}>
    <div className={styles.container}>
      <LineNumber count={lines.length}></LineNumber>
      <Editor>
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </Editor>
    </div>
  </div>
);

export default AboutMe;
