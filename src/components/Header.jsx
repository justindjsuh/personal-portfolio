import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import SideMenu from "./SideMenu";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.getAttribute("data-theme")
  );
  const [currentRoute, setCurrentRoute] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleHome = () => {
    const page = document.querySelector(".App");
    page.classList.add("animate_content");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const toggleMenu = () => {
    const html = document.querySelector("html");
    html.classList.toggle("menu-open");

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

  const handleNavigate = (e) => {
    const html = document.querySelector("html");
    const page = document.querySelector(".App");
    page.classList.add("animate_content");
    html.classList.remove("menu-open");
    if (e.target.innerHTML === "Home") {
      setTimeout(() => {
        setMenuState(false);
        setIsMounted(false);
        navigate("/home");
      }, 1000);
    } else if (e.target.innerHTML === "About") {
      setTimeout(() => {
        setMenuState(false);
        setIsMounted(false);
        navigate("/about");
      }, 1000);
    } else if (e.target.innerHTML === "Experience") {
      setTimeout(() => {
        setMenuState(false);
        setIsMounted(false);
        navigate("/experience");
      }, 1000);
    } else if (e.target.innerHTML === "Projects") {
      setTimeout(() => {
        setMenuState(false);
        setIsMounted(false);
        navigate("/projects");
      }, 1000);
    } else if (e.target.innerHTML === "Contact") {
      setTimeout(() => {
        setMenuState(false);
        setIsMounted(false);
        navigate("/contact");
      }, 1000);
    }
  };

  useEffect(() => {
    setCurrentRoute(location.pathname);
  });

  return (
    <div className="header">
      <nav>
        <div className="left-nav">
          <button onClick={handleHome}>
            <img src="/logo.png" alt="logo with a hand drawn J" />
          </button>
        </div>
        {currentRoute === "/home" ? null : (
          <div className="nav-btns">
            <button
              className={
                currentRoute === "/about" ? "nav-btn current-page" : "nav-btn"
              }
              onClick={handleNavigate}
            >
              About
            </button>
            <button
              className={
                currentRoute === "/experience"
                  ? "nav-btn current-page"
                  : "nav-btn"
              }
              onClick={handleNavigate}
            >
              Experience
            </button>
            <button
              className={
                currentRoute === "/projects"
                  ? "nav-btn current-page"
                  : "nav-btn"
              }
              onClick={handleNavigate}
            >
              Projects
            </button>
            <button
              className={
                currentRoute === "/contact" ? "nav-btn current-page" : "nav-btn"
              }
              onClick={handleNavigate}
            >
              Contact
            </button>
          </div>
        )}
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
