import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });
  return <h1>Contact PAGE</h1>;
};

export default Contact;
