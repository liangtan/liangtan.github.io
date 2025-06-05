import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import PackageJson from "../components/PackageJson";

export const routes = [
  { name: "about-me.tsx", path: "/about-me", element: <AboutMe /> },
  { name: "contact.tsx", path: "/contact", element: <Contact />  },
  { name: "package.json", path: "/package", element: <PackageJson />  },
];
