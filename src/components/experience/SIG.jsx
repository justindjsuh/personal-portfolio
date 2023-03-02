const SIG = () => {
  return (
    <>
      <div className="experience sig">
        <p className="experience-role">IT Support Co-op</p>
        <p className="experience-company">Susquehanna Int'l Group</p>
        <div className="experience-description">
          <ul>
            <li>
              Consulted for several teams with issues pertaining to technology
              failure, license troubleshooting, hardware malfunctions, and
              network bugs
            </li>
            <li>
              Assembled hardware for workstations and integrated necessary
              software in machines that would be used in production for users
              throughout the company
            </li>
            <li>
              Publicized documentation for the workstation hardware build
              process, improving the readability and technical accuracy
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-toolkit-container">
        <div className="experience-toolkit">
          <img src="/toolkit-logos/confluence.png" alt="confluence logo" />
          <img src="/toolkit-logos/powershell.png" alt="powershell logo" />
          <img src="/toolkit-logos/markdown.png" alt="markdown logo" />
          <img src="/toolkit-logos/jira.png" alt="jira logo" />
        </div>
      </div>
    </>
  );
};

export default SIG;
