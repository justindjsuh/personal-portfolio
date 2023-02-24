import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });
  return <h1>ABOUT PAGE</h1>;
};

export default About;
