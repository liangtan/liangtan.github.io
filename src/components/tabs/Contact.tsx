import { type FC } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { email, github, linkedin } from "../../constants/contacts";
import Editor from "../Editor";
import IconWrapper from "../IconWrapper";
import { Comment, Const, EqualSign, StringLiteral } from "../Shared";
import styles from "./Contact.module.scss";

const lines = [
  <><Comment>// find me on the internet</Comment></>,
  <>
    <Const>const</Const> email <EqualSign/>{" "}
    <StringLiteral>
      "<a href={`mailto:${email}`} style={{ color: "inherit", textDecoration: "none" }}>
      { email }
    </a>"
    </StringLiteral>
    {"; "}
    <Comment>
      // <IconWrapper><FiMail/></IconWrapper>
    </Comment>
  </>,
  <>
    <Const>const</Const> github <EqualSign/>{" "}
    <StringLiteral>
      "<a href={github} target="_blank" style={{ color: "inherit", textDecoration: "none" }}>
        {github}
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
      "<a href={linkedin} target="_blank" style={{ color: "inherit", textDecoration: "none" }}>
        {linkedin}
      </a>"
    </StringLiteral>
    {"; "}
    <Comment>
    // <IconWrapper><FiLinkedin/></IconWrapper>
    </Comment>
  </>
];

const Contact: FC = () => (
  <Editor numLines={lines.length}>
    {lines.map((line, index) => (
      <div key={index} className={styles.line}>
        <span>{line}</span>
      </div>
    ))}
  </Editor>
);

export default Contact;
