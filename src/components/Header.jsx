import { useEffect, useState } from "react";
import "./Header.css";
import SideMenu from "./SideMenu";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.getAttribute("data-theme")
  );

  const toggleMenu = () => {
    setIsMounted(!isMounted);
    if (!menuState) setMenuState(true);
  };

  const toggleDarkThemeLanding = () => {
    let attributeVal = document.documentElement.getAttribute("data-theme");
    if (attributeVal === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      setDarkMode("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setDarkMode("dark");
    }
  };

  return (
    <div className="header">
      <nav>
        <div className="left-nav">
          <img src="/logo.png" alt="logo with a hand drawn J" />
        </div>
        <div className="right-nav">
          <div className="toggle-main">
            <input
              onClick={toggleDarkThemeLanding}
              type="checkbox"
              id="toggle-main"
              checked={darkMode === "dark"}
            />
            <label htmlFor="toggle-main"></label>
          </div>
          <div className="menu">
            <SideMenu
              isMounted={isMounted}
              menuState={menuState}
              setMenuState={setMenuState}
              toggleMenu={toggleMenu}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
