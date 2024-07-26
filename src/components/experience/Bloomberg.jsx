const Bloomberg = () => {
  return (
    <>
      <div className="experience bloomberg">
        <p className="experience-role">Data Engineer Co-op</p>
        <p className="experience-company">Bloomberg</p>
        <div className="experience-description">
          <ul>
            <li>
              Automated a previously manual JIRA process, achieving a 95% reduction in employee time 
              spent and streamlining workflow efficiency by deprecating outdated procedures
            </li>
            <li>
              Created comprehensive documentation for a newly formed team, covering the 
              fundamentals of web acquisition and data analysis to support onboarding and operational efficiency
            </li>
            <li>
              Developed, maintained, and performed quality assurance on web crawlers for data acquisition and analysis, 
              contributing to the real-time data feed displayed on the Bloomberg Terminal, 
              a critical platform for financial professionals
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-toolkit-container">
        <div className="experience-toolkit">
          <img src="/toolkit-logos/python.png" alt="python logo" />
          <img src="/toolkit-logos/javascript.png" alt="javascript logo" />
          <img
            src="/toolkit-logos/jupyter-notebook.png"
            alt="jupyter-notebook logo"
          />
          <img src="/toolkit-logos/jira.png" alt="jira logo" />
        </div>
      </div>
    </>
  );
};

export default Bloomberg;
