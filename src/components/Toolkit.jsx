import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../pages/About.css";

const Toolkit = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-down" className="toolkit-container">
      <p id="toolkit" className="toolkit-bg-header">
        Toolkit
      </p>
      <div className="toolkit">
        <div className="tool-section frontend">
          <p className="tool-section-header frontend-header">Frontend</p>
          <div className="tool-logos">
            <div className="single-tool-container">
              <img src="/toolkit-logos/javascript.png" alt="javascript logo" />
              <p>JavaScript</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/react.png" alt="react logo" />
              <p>React.js</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/html.png" alt="html logo" />
              <p>HTML</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/css.png" alt="css logo" />
              <p>CSS</p>
            </div>
          </div>
        </div>
        <div className="tool-section backend">
          <p className="tool-section-header backend-header">Backend</p>
          <div className="tool-logos">
            <div className="single-tool-container">
              <img src="/toolkit-logos/express.png" alt="express logo" />
              <p>Express.js</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/node.png" alt="node logo" />
              <p>Node.js</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/sequelize.png" alt="sequelize logo" />
              <p>Sequelize</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/postgres.png" alt="postgres logo" />
              <p>PostgreSQL</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/rest-api.png" alt="rest-api logo" />
              <p>REST API</p>
            </div>
          </div>
        </div>
        <div className="tool-section tools">
          <p className="tool-section-header tools-header">Tools</p>
          <div className="tool-logos">
            <div className="single-tool-container">
              <img src="/toolkit-logos/webpack.png" alt="webpack logo" />
              <p>Webpack</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/git.png" alt="git logo" />
              <p>Git</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/vscode.png" alt="vscode logo" />
              <p>VS Code</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/next-js.png" alt="next-js logo" />
              <p>Next.js</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/github.png" alt="github logo" />
              <p>GitHub</p>
            </div>
          </div>
        </div>
        <div className="tool-section learning">
          <p className="tool-section-header learning-header">Learning</p>
          <div className="tool-logos">
            <div className="single-tool-container">
              <img src="/toolkit-logos/typescript.png" alt="ts-logo logo" />
              <p>TypeScript</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/java.png" alt="java logo" />
              <p>Java</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/python.png" alt="python logo" />
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
