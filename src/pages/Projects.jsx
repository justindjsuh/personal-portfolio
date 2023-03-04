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
        <div className="project-headline">
          <div className="project-header-img">
            <img src="/testimg.jpg" />
          </div>
          <div className="project-page-header">
            <p>
              WHERE<br></br>IDEAS<br></br>
              <span>BEGIN.</span>
            </p>
            <div className="project-page-headline-btn">
              <a href="#project">See my work</a>
            </div>
          </div>
        </div>
      </div>
      <div id="project" className="projects-container">
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
            <h2 className="project-title">Peak Performance</h2>
            <p>
              A website that serves as a medium for anyone who aspires to reach
              their fitness goals. The interface serves as a seamless
              integration of several bookkeeping services, achievements, and
              even a social media feature. Designed and implemented with a team
              of 5 developers, utilizing Next.js, Figma, Supabase (a Firebase
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
        <div className="project">
          <div className="project-img">
            <a
              href="https://alibi-esports.onrender.com/"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/alibi-esports-landing.PNG"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Alibi Esports</h2>
            <p>
              A website for the organization Alibi Esports, used to host
              organization information, tournament registration, and
              communication to players. This was developed by incorporating
              UX/UI, form handling, RESTful API, and database development to
              create an interactive and dynamic environment that handled
              communication and tournament registration while streamlining the
              user experience.
            </p>
            <div className="project-tools">
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Express.js</p>
              <p>Node.js</p>
              <p>PostgreSQL</p>
            </div>
            <div className="project-btns">
              <a
                href="https://alibi-esports.onrender.com/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Demo
              </a>
              <a
                href="https://github.com/justindjsuh/alibi-esports-fe"
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
