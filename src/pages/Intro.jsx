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
  return (
    <div className="App">
      <input type="checkbox" id="switch" />
      <div className="app">
        <div className="body">
          <div className="content">
            <div className="circle">
              <div className="crescent"></div>
            </div>
            <p className="heading">Choose a theme</p>
            <p>
              Before I show you around, do you prefer light or dark mode?
              &#40;there&apos;s a right answer&#41;
            </p>
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
