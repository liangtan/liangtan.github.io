import { type FC } from "react";
import Editor from "../Editor";
import { ClosingCurlyBrace, JsonKey, OpeningCurlyBrace, StringLiteral } from "../Shared";

const lines = [
	<><OpeningCurlyBrace/></>,
	<>{"  "}<JsonKey>name</JsonKey>: <StringLiteral>"liang-tan"</StringLiteral>,</>,
	<>{"  "}<JsonKey>role</JsonKey>: <StringLiteral>"code-monkey"</StringLiteral>,</>,
	<>{"  "}<JsonKey>version</JsonKey>: <StringLiteral>"1.0.0"</StringLiteral>,</>,
	<>{"  "}<JsonKey>dependencies</JsonKey>: <OpeningCurlyBrace/></>,
	<>{"    "}<JsonKey>curiosity</JsonKey>: <StringLiteral>"^∞"</StringLiteral>,</>,
    <>{"    "}<JsonKey>coffee</JsonKey>: <StringLiteral>"&gt;=1 cups/day</StringLiteral>,</>,
	<>{"    "}<JsonKey>tea</JsonKey>: <StringLiteral>"&gt;=3 cups/day"</StringLiteral></>,
	<>{"  "}<ClosingCurlyBrace/>{","}</>,
	<>{"  "}<JsonKey>devDependencies</JsonKey>: <OpeningCurlyBrace/></>,
	<>{"    "}<JsonKey>ai</JsonKey>: <StringLiteral>"^1.0.0"</StringLiteral></>,
	<>{"  "}<ClosingCurlyBrace/></>,
	<><ClosingCurlyBrace/></>
];

const PackageJson: FC = () => (
	<Editor numLines={lines.length}>
		{lines.map((line, idx) => (
			<div key={idx}>{line}</div>
		))}
	</Editor>
);

export default PackageJson;
