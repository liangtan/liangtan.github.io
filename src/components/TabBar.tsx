import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { activeTabStyle, tabBarStyle, tabStyle } from "../constants/styles";
import { routes } from "../routes/Routes";

const TabBar: FC = () => {
  const location = useLocation();

  return (
    <div style={tabBarStyle}>
      {routes.map((tab) => (
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
