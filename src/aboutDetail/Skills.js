
const Skills = () => {
  const skills = [
    { name: "JavaScript", image: "js.png" },
    { name: "React", image: "react.png" },
    { name: "HTML", image: "html5.png" },
    { name: "CSS", image: "css3.png" },
    { name: "TypeScript", image: "ts.png" },
    { name: "Git", image: "git.png" },
    { name: "GitHub", image: "github.png" },
  ];

  return (
    <div className="item">
      <span className="material-symbols-outlined">code_blocks</span>
      <div className="itemTitle">Skills</div>

      <div>
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={require(`../../public/images/skillLogo/${skill.image}`)} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
