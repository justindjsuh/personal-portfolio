import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });
  return <h1>Experience PAGE</h1>;
};

export default Experience;