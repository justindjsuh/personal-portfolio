import { useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });
  return (
    <div className="projects-page-container">
      <div className="projects-landing">
        <p className="project-headline">
          Don't show people your plans. Show them your <span>results.</span>
        </p>
        <a href="#" className="ca3-scroll-down-link ca3-scroll-down-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              className="down-chevron"
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </a>
      </div>
      <div className="projects-container">
        <div className="project">
          <div className="project-img">
            <a
              href="https://peakfitness.netlify.app/"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/peak-landing.PNG"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 class="project-title">Peak Performance</h2>
            <p>
              Designed and implemented a website from scratch with a team of 5
              developers, utilizing Next.js, Figma, Supabase (a Firebase
              alternative), and MaterialUI to create a sleek and seamless
              experience to help users maintain healthy habits and hit their
              fitness goals.
            </p>
            <div className="project-tools">
              <p>Next.js</p>
              <p>MaterialUI</p>
              <p>Supabase</p>
              <p>Node.js</p>
              <p>PostgreSQL</p>
            </div>
            <div className="project-btns">
              <a
                href="https://peakfitness.netlify.app/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Demo
              </a>
              <a
                href="https://github.com/peak-fitness/peak"
                target="_blank"
                rel="noopen noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
