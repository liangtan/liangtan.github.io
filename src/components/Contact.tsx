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
      = <StringLiteral>
        "<a href="mailto:liangtan@me.com" style={{ color: "inherit", textDecoration: "none" }}>
        liangtan@me.com
      </a>"
      </StringLiteral>
      {"; "}
      <Comment>
		    // <IconWrapper><FiMail/></IconWrapper>
	    </Comment>
    </>,
    <>
      <Const>const</Const>{" "}
      <FunctionName>github</FunctionName>{" "}
      = <StringLiteral>
        "<a href="https://github.com/liangtan" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
          https://github.com/liangtan
        </a>"
      </StringLiteral>
      {"; "}
      <Comment>
      // <IconWrapper><FiGithub/></IconWrapper>
      </Comment>
    </>,
    <>
      <Const>const</Const>{" "}
      <FunctionName>linkedin</FunctionName>{" "}
      = <StringLiteral>
        "<a href="https://linkedin.com/in/liangtan521" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
          https://linkedin.com/in/liangtan521
        </a>"
      </StringLiteral>
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
