import { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="toolkit-container">
        <p>Toolkit</p>
        <div className="toolkit">
          <div className="tool-section frontend"></div>
          <div className="tool-section backend"></div>
          <div className="tool-section tools"></div>
          <div className="tool-section learning"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
