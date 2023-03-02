import { useEffect, useState } from "react";
import Bloomberg from "../components/experience/Bloomberg";
import FSA from "../components/experience/FSA";
import SIG from "../components/experience/SIG";
import "./Experience.css";

const Experience = () => {
  const [fsa, setFSA] = useState(true);
  const [bloomberg, setBloomberg] = useState(false);
  const [sig, setSIG] = useState(false);

  const handleFSAClick = () => {
    setFSA(true);
    setBloomberg(false);
    setSIG(false);
  };

  const handleBloombergClick = () => {
    setBloomberg(true);
    setFSA(false);
    setSIG(false);
  };

  const handleSIGClick = () => {
    setSIG(true);
    setFSA(false);
    setBloomberg(false);
  };

  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });

  return (
    <div className="experience-container">
      <p className="experience-header">Experience</p>
      <div className="experience-terminal-container">
        <div className="experience-terminal-header">
          <div className="header-btns">
            <div className="header-btn header-btn1"></div>
            <div className="header-btn header-btn2"></div>
            <div className="header-btn header-btn3"></div>
          </div>
          <div className="header-text">
            <p>justins-portfolio &#8212; -bash</p>
          </div>
        </div>
        <div className="terminal-body">
          <div className="terminal-bg-text">
            <p>justins-MB:Experience justins-portfolio$ ls</p>
            <div className="experience-terminal-btns">
              <button
                onClick={handleFSAClick}
                className="experience-terminal-btn terminal-btn1"
              >
                cat FSA.txt/ &#8594;
              </button>
              <button
                onClick={handleBloombergClick}
                className="experience-terminal-btn terminal-btn2"
              >
                cat Bloomberg.txt/ <span>&#8594;</span>
              </button>
              <button
                onClick={handleSIGClick}
                className="experience-terminal-btn terminal-btn3"
              >
                cat SIG.txt/ &#8594;
              </button>
            </div>
          </div>
          <div className="terminal-content">
            <div className="terminal-experience-text">
              {fsa && <FSA />}
              {bloomberg && <Bloomberg />}
              {sig && <SIG />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
