import { useState } from "react";
import "./Header.css";
import SideMenu from "./SideMenu";

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div className="header">
      <nav>
        <div className="left-nav">
          <img src="/logo.png" alt="logo with a hand drawn J" />
        </div>
        <div className="right-nav">
          <div className="toggle">
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle"></label>
          </div>
          <div className="menu">
            <SideMenu menuState={menuState} toggleMenu={toggleMenu} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
