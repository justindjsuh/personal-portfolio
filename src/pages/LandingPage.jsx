import gsap from "gsap";
import { useEffect } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const words = ["web developer", "software engineer", "musician", "gamer"];

  useEffect(() => {
    let cursor = gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });

    let boxTl = gsap.timeline();

    boxTl.to(".box", {
      duration: 1,
      width: "180px",
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
          <p>justins-porfolio &#8212; -bash</p>
        </div>
      </div>
      <div className="terminal-body">
        <div className="terminal-bg-text">
          <p>justins-MB:~ justins-porfolio$ ls</p>
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
          <button className="terminal-btn terminal-btn1">
            cd About/ &#8594;
          </button>
          <button className="terminal-btn terminal-btn2">
            cd Experience/ &#8594;
          </button>
          <button className="terminal-btn terminal-btn3">
            cd Projects/ &#8594;
          </button>
          <button className="terminal-btn terminal-btn4">
            cd Contact/ &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
