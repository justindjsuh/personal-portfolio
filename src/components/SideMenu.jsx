import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Styles for conditional side menu animations
const mountedStyle = {
  animation: "fadeIn 1s ease-in-out",
};

const unmountedStyle = {
  animation: "fadeOut 1s ease-in-out",
  animationFillMode: "forwards",
};

/*
 * @isMounted: boolean | determine whether the side menu is opened or not
 * @menuState: boolean | determines whether the side menu should be open or not
 * @setMenuState: setter function | sets menuState state variable
 * @toggleMenu: function | sets both isMounted and menuState to the opposing boolean
 *
 */
const SideMenu = ({
  isMounted,
  setIsMounted,
  menuState,
  setMenuState,
  toggleMenu,
}) => {
  const navigate = useNavigate();

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
    gsap.registerPlugin(TextPlugin);

    const navLinks = document.querySelectorAll(".nav-option");
    if (navLinks.length && isMounted) {
      gsap.from(navLinks, {
        duration: 1,
        x: 300,
        delay: 0.5,
        ease: "power3.out",
      });
    }
  });

  return (
    <div className="side-menu">
      <div className="burger-icon" onClick={toggleMenu}>
        <div className={`burger burger1 ${menuState ? "isOpen" : ""}`} />
        <div className={`burger burger2 ${menuState ? "isOpen" : ""}`} />
        <div className={`burger burger3 ${menuState ? "isOpen" : ""}`} />
      </div>
      {menuState && (
        <div
          style={isMounted ? mountedStyle : unmountedStyle}
          className="screen-cover"
        ></div>
      )}
      {menuState && (
        <div
          className={`menu-container`}
          style={isMounted ? mountedStyle : unmountedStyle}
          onAnimationEnd={() => {
            if (!isMounted) setMenuState(false);
          }}
        >
          <ul>
            <li>
              <div className="nav-option">
                <p>01</p>
                <p className="nav-link" onClick={handleNavigate}>
                  Home
                </p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>02</p>
                <p className="nav-link" onClick={handleNavigate}>
                  About
                </p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>03</p>
                <p className="nav-link" onClick={handleNavigate}>
                  Experience
                </p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>04</p>
                <p className="nav-link" onClick={handleNavigate}>
                  Projects
                </p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>05</p>
                <p className="nav-link" onClick={handleNavigate}>
                  Contact
                </p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
