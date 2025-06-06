import AboutMe from "../components/tabs/AboutMe";
import Contact from "../components/tabs/Contact";
import PackageJson from "../components/tabs/PackageJson";
import { ReadMe } from "../components/tabs/ReadMe";

export const routes = [
  { name: "about-me.tsx", path: "/about-me", level:"src", element: <AboutMe /> },
  { name: "contact.ts", path: "/contact", level:"src", element: <Contact /> },
  { name: "package.json", path: "/package", level:"root", element: <PackageJson /> },
  { name: "README.md", path: "/readme", level:"root", element: <ReadMe /> },
];
