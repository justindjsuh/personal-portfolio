import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });
  return <h1>Projects PAGE</h1>;
};

export default Projects;
