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
const SideMenu = ({ isMounted, menuState, setMenuState, toggleMenu }) => {
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
                <p>Home</p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>02</p>
                <p>About</p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>03</p>
                <p>Experience</p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>04</p>
                <p>Projects</p>
              </div>
            </li>
            <li>
              <div className="nav-option">
                <p>05</p>
                <p>Contact</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
