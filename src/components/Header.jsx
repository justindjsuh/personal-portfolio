import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import SideMenu from "./SideMenu";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.getAttribute("data-theme")
  );
  const navigate = useNavigate();

  const handleHome = () => {
    const page = document.querySelector(".App");
    page.classList.add("animate_content");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

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
          <button onClick={handleHome}>
            <img src="/logo.png" alt="logo with a hand drawn J" />
          </button>
        </div>
        <div className="right-nav">
          <div className="toggle-main">
            <input
              onClick={toggleDarkThemeLanding}
              type="checkbox"
              id="toggle-main"
              defaultChecked={darkMode === "dark"}
            />
            <label htmlFor="toggle-main"></label>
          </div>
          <div className="menu">
            <SideMenu
              isMounted={isMounted}
              setIsMounted={setIsMounted}
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
