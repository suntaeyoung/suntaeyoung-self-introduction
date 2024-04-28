import projectData from "./projectData/projectData";

const Project = () => {

  return (
    <div className="projectPage">
      <div className="projectTitle">My Projects</div>

      <div className="projectInner">

        {projectData.map((project, index) => (
          <div className="projectList" key={index}>

            <img src={project.image} alt={project.title} />
            <div className="imgDescription">
              <div>{project.title}</div>
              <div className="imgSubDescription">{project.description}</div>
              <div className="linksContainer">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">github</a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">demo</a>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Project;