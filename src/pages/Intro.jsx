import { useNavigate } from "react-router-dom";
import "./Intro.css";

function Intro() {
  // const navigate = useNavigate
  const navigate = useNavigate();
  const handleStart = () => {
    const page = document.querySelector(".App");
    page.classList.add("animate_content");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const toggleDarkThemeLanding = () => {
    let attributeVal = document.documentElement.getAttribute("data-theme");
    if (attributeVal === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  return (
    <div className="App">
      <input onClick={toggleDarkThemeLanding} type="checkbox" id="switch" />
      <div className="app">
        <div className="body">
          <div className="content">
            <div className="circle">
              <div className="crescent"></div>
            </div>
            <p className="heading">Choose a theme</p>
            <p>Before I show you around, do you prefer light or dark mode?</p>
            <label htmlFor="switch">
              <div className="toggle"></div>
              <div className="names">
                <p className="light">Light</p>
                <p className="dark">Dark</p>
              </div>
            </label>
            <button onClick={handleStart} className="start-btn">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
