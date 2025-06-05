import React from 'react';
import ReactMarkdown from 'react-markdown';
import { github, linkedin, portfolio } from '../../constants/contacts';

const markdown = `
# 👋 Hi, I'm Liang

> A passionate software engineer with a love for building things that people enjoy using.

---

## 🧰 Tech Stack

\`\`\`ts
const skills = [
  "TypeScript",
  "JavaScript",
  "Java",
  "Python",
  "React",
  "Angular",
  "Node"
  "and more..."
];
\`\`\`

---

## 🧠 Philosophy

> Make things people like to use.

---

## 🔗 Links

- [Portfolio](${portfolio})
- [GitHub](${github})
- [LinkedIn](${linkedin})
`;

export const ReadMe: React.FC = () => (
  <div>
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </div>
);

export default ReadMe;
