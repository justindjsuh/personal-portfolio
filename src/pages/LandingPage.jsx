import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const words = [
    " web developer.",
    " software engineer.",
    " musician.",
    " gamer.",
  ];

  const navigate = useNavigate();

  const aboutNav = () => {
    const page = document.querySelector(".App");
    page.classList.add("animate_content");
    setTimeout(() => {
      navigate("/about");
    }, 1000);
  };
  const experienceNav = () => {
    const page = document.querySelector(".App");
    page.classList.add("animate_content");
    setTimeout(() => {
      navigate("/experience");
    }, 1000);
  };
  const projectsNav = () => {
    const page = document.querySelector(".App");
    page.classList.add("animate_content");
    setTimeout(() => {
      navigate("/projects");
    }, 1000);
  };
  const contactNav = () => {
    const page = document.querySelector(".App");
    page.classList.add("animate_content");
    setTimeout(() => {
      navigate("/contact");
    }, 1000);
  };

  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);

    gsap.registerPlugin(TextPlugin);
    let cursor = gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });

    let boxTl = gsap.timeline();

    boxTl.to(".box", {
      duration: 1,
      width: "8vw",
      delay: 2,
      ease: "power4.inOut",
    });
    gsap.from(".hi", {
      y: 100,
      duration: 1,
      delay: 2.5,
      ease: "power3.out",
      onComplete: () => {
        masterTl.play();
      },
    });

    let masterTl = gsap.timeline({ repeat: -1 }).pause();

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(".text", { duration: 1, text: word });
      masterTl.add(tl);
    });
  });

  return (
    <div className="terminal-container">
      <div className="terminal-header">
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
          <p>justins-MB:~ justins-portfolio$ ls</p>
          <p>About Experience Projects Contact</p>
        </div>
        <div className="terminal-main-text">
          <p>
            Hi, I'm <span>Justin.</span>
          </p>
          <p className="gsap-animation">
            <span className="box"></span>
            <span className="hi">I&apos;m a</span>
            <span className="text"></span>
            <span className="cursor">_</span>
          </p>
        </div>
        <div className="terminal-btns">
          <button onClick={aboutNav} className="terminal-btn terminal-btn1">
            cd About/ &#8594;
          </button>
          <button
            onClick={experienceNav}
            className="terminal-btn terminal-btn2"
          >
            cd Experience/ <span>&#8594;</span>
          </button>
          <button onClick={projectsNav} className="terminal-btn terminal-btn3">
            cd Projects/ &#8594;
          </button>
          <button onClick={contactNav} className="terminal-btn terminal-btn4">
            cd Contact/ &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
