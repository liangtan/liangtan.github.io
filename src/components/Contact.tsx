import { type FC } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./Contact.module.scss";
import Editor from "./Editor";
import IconWrapper from "./IconWrapper";
import LineNumber from "./LineNumber";
import { Comment, Const, EqualSign, StringLiteral } from "./Shared";

const lines = [
  <><Comment>// find me on the internet</Comment></>,
  <>
    <Const>const</Const> email <EqualSign/>{" "}
    <StringLiteral>
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
    github <EqualSign/>{" "}
    <StringLiteral>
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
    linkedin <EqualSign/>{" "}
    <StringLiteral>
      "<a href="https://linkedin.com/in/liangtan521" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
        https://linkedin.com/in/liangtan521
      </a>"
    </StringLiteral>
    {"; "}
    <Comment>
    // <IconWrapper><FiLinkedin/></IconWrapper>
    </Comment>
  </>
];

const Contact: FC = () => {
  return (
    <div className={styles.container}>
    {/* <div style={codeWrapperStyle}> */}
      <LineNumber count={lines.length}></LineNumber>
      <Editor>
        {lines.map((line, i) => (
          <div key={i} className={styles.line}>
            <span>{line}</span>
          </div>
        ))}
      </Editor>
    </div>
  );
};

export default Contact;
