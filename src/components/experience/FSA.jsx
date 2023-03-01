const FSA = () => {
  return (
    <>
      <div className="experience fsa">
        {/* <p className="experience-role"></p> */}
        <p className="experience-company-fsa">Fullstack Academy</p>
        <div className="experience-description">
          <p>
            Immersive 13-week program for Full-stack web development utilizing
            the PERN stack.
          </p>
          <ul>
            <li>
              Front end development: JavaScript, CSS, HTML, React, Redux
              (toolkit)
            </li>
            <li>
              Back end development: Node.js, Express, Axios, Services and APIs
            </li>
            <li>Data Systems: PostgreSQL, Sequelize, pg</li>
            <li>Security and Authentication: JSON Web Tokens, Bcrypt</li>
            <li>
              Object Oriented Programming, full-stack applications, Single-Page
              Applications
            </li>
            <li>
              Expertise in developer tools & debugging: Git, Bash, Visual Studio
              Code, Chrome Developer Tools, Mocha and Chai testing frameworks,
              Firebase
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-toolkit-container">
        <div className="experience-toolkit">
          <img src="/toolkit-logos/node.png" alt="node logo" />
          <img src="/toolkit-logos/express.png" alt="express logo" />
          <img src="/toolkit-logos/react.png" alt="react logo" />
          <img src="/toolkit-logos/postgres.png" alt="postgres logo" />
        </div>
      </div>
    </>
  );
};

export default FSA;
