import { Link, useLocation } from "react-router-dom";
import { activeTabStyle, tabBarStyle, tabStyle } from "../constants/styles";

const tabs = [
  { name: "about-me.tsx", path: "/about-me" },
  { name: "contact.tsx", path: "/contact" },
];

const TabBar: React.FC = () => {
  const location = useLocation();

  return (
    <div style={tabBarStyle}>
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.path}
          style={location.pathname === tab.path ? activeTabStyle : tabStyle}
          draggable={false}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default TabBar;
