import { type FC } from "react";
import globalStyles from "../../styles/global.module.scss";
import Editor from "../Editor";
import LineNumber from "../LineNumber";
import { ClosingCurlyBrace, JsonKey, OpeningCurlyBrace } from "../Shared";

const lines = [
	<><OpeningCurlyBrace/></>,
	<>{"  "}<JsonKey>name</JsonKey>: "liang-tan",</>,
	<>{"  "}<JsonKey>role</JsonKey>: "code-monkey",</>,
	<>{"  "}<JsonKey>version</JsonKey>: "1.0.0",</>,
	<>{"  "}<JsonKey>dependencies</JsonKey>: <OpeningCurlyBrace/></>,
	<>{"    "}<JsonKey>curiosity</JsonKey>: "^∞",</>,
    <>{"    "}<JsonKey>coffee</JsonKey>: "&gt;=1 cups/day,"</>,
	<>{"    "}<JsonKey>tea</JsonKey>: "&gt;=3 cups/day"</>,
	<>{"  "}<ClosingCurlyBrace/>{","}</>,
	<>{"  "}<JsonKey>devDependencies</JsonKey>: <OpeningCurlyBrace/></>,
	<>{"    "}<JsonKey>ai</JsonKey>: "^1.0.0"</>,
	<>{"  "}<ClosingCurlyBrace/></>,
	<><ClosingCurlyBrace/></>
];

const PackageJson: FC = () => (
  <div className={globalStyles.container}>
    <LineNumber count={lines.length}></LineNumber>
    <Editor>
      {lines.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
    </Editor>
  </div>
);

export default PackageJson;
