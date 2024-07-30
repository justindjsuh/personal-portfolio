const Comcast = () => {
    return (
      <>
        <div className="experience comcast">
          <p className="experience-role">Full Stack Developer</p>
          <p className="experience-company">Comcast</p>
          <div className="experience-description">
            <ul>
              <li>
                Contributed to the development of a product that reduced operational costs by $12 million annually, 
                working collaboratively with cross-functional teams to ensure successful integration and deployment
              </li>
              <li>
                Engineered, maintained, and delivered over 10 high-impact features, enhancing the workflow for 
                hundreds of network engineers managing a network of 300,000 devices
              </li>
              <li>
                Authored comprehensive documentation on feature usage and the complexities of networking devices, 
                empowering users and internal teams with critical knowledge for effective operation and troubleshooting
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-toolkit-container">
          <div className="experience-toolkit">
            <img src="/toolkit-logos/node.png" alt="node logo" />
            <img src="/toolkit-logos/express.png" alt="express logo" />
            <img src="/toolkit-logos/react.png" alt="react logo" />
            <img src="/toolkit-logos/typescript.png" alt="typescript logo" />
          </div>
        </div>
      </>
    );
  };
  
  export default Comcast;
  