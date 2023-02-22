const SideMenu = ({ menuState, toggleMenu }) => {
  return (
    <div className="side-menu">
      <div className="burger-icon" onClick={toggleMenu}>
        <div className={`burger burger1 ${menuState ? "isOpen" : ""}`} />
        <div className={`burger burger2 ${menuState ? "isOpen" : ""}`} />
        <div className={`burger burger3 ${menuState ? "isOpen" : ""}`} />
      </div>
      {menuState ? (
        <>
          <div className="screen-cover"></div>
          <div className="menu-container">
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
        </>
      ) : null}
    </div>
  );
};

export default SideMenu;
