import { useState } from "react";
import "./Header.css";
import SideMenu from "./SideMenu";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const toggleMenu = () => {
    setIsMounted(!isMounted);
    if (!menuState) setMenuState(true);
  };

  const toggleDarkThemeLanding = () => {
    const root = document.querySelector(":root");
    root.classList.toggle(".dark-theme");
  };

  return (
    <div className="header">
      <nav>
        <div className="left-nav">
          <img src="/logo.png" alt="logo with a hand drawn J" />
        </div>
        <div className="right-nav">
          <div className="toggle">
            <input
              onClick={toggleDarkThemeLanding}
              type="checkbox"
              id="toggle"
            />
            <label htmlFor="toggle"></label>
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
