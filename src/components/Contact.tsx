import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { codeStyle, codeWrapperStyle } from "../constants/styles";
import styles from "./Contact.module.scss";
import IconWrapper from "./IconWrapper";
import LineNumber from "./LineNumber";
import { Comment, Const, FunctionName, StringLiteral } from "./Shared";

const Contact: React.FC = () => {
  const lines = [
    <><Comment>// find me on the internet</Comment></>,
    <>
      <Const>const</Const>{" "}
      <FunctionName>email</FunctionName>{" "}
      = <StringLiteral>"liang@example.com"</StringLiteral>
      {"; "}
      <Comment>
		    // <IconWrapper><FiMail/></IconWrapper>
	    </Comment>
    </>,
    <>
      <Const>const</Const>{" "}
      <FunctionName>github</FunctionName>{" "}
      = <StringLiteral>"https://github.com/liangtan"</StringLiteral>;
      {"; "}
      <Comment>
      // <IconWrapper><FiGithub/></IconWrapper>
      </Comment>
    </>,
    <>
      <Const>const</Const>{" "}
      <FunctionName>linkedin</FunctionName>{" "}
      = <StringLiteral>"https://linkedin.com/in/liangtan521"</StringLiteral>;
      {"; "}
      <Comment>
      // <IconWrapper><FiLinkedin/></IconWrapper>
      </Comment>
    </>,
  ];

  return (
    <div style={codeWrapperStyle}>
    <LineNumber count={lines.length}></LineNumber>
      <pre style={codeStyle}>
        {lines.map((line, i) => (
          <div key={i} className={styles.line}>
            <span>{line}</span>
            <span style={{ color: "#75715e", userSelect: "none" }}>
              {i === 0 ? null : i === 1 ? <FiMail /> : i === 2 ? <FiGithub /> : <FiLinkedin />}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
};

export default Contact;
