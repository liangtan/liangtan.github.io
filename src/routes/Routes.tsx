import AboutMe from "../components/tabs/AboutMe";
import Contact from "../components/tabs/Contact";
import PackageJson from "../components/tabs/PackageJson";
import { ReadMe } from "../components/tabs/ReadMe";

export const routes = [
  { name: "about-me.tsx", path: "/about-me", element: <AboutMe /> },
  { name: "contact.tsx", path: "/contact", element: <Contact /> },
  { name: "package.json", path: "/package", element: <PackageJson /> },
  { name: "README.md", path: "/readme", element: <ReadMe /> },
];
