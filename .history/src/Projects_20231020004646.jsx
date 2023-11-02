import "./App.css";
import Project from "./Project";
import ProjectLeft from "./ProjectLeft";


function Projects() {
  return (
    <div className="Projects">
      <h1 id="projects">Project Highlights</h1>
      <h2>Web Design, Software Engineering, and Game Development.</h2>
      <div className="ProjectContainer">
      <Project 
        title = "Joll of Rice Seasoning"
        description = "This is the Joll of Rice Seasoning"
        tags={["HTML","CodeIgnitor PHP Framework", "MySQL"]}
        link="http://tasks.dentrisdms.com/"
        projectimage="https://i.ibb.co/cQrJkSg/dentris-square.png"
      />
        <Project 
        title = "Suya BBQ Seasoning"
        description = "This is the Suya BBQ Seasoning"
        tags={["Next.js","React", "Tailwind CSS", "HTML"]}
        link="https://show.ahinkeskitchen.com/"
        projectimage="https://www.mtroyal.ca/ProgramsCourses/FacultiesSchoolsCentres/Business/Institutes/InstituteInnovationEntrepreneurship/_images/ac_robotics_logo.png"
      />
        <Project
        title = "Chicken Seasoning"
        description = "This is the chicken seasoning."        
        tags={["Javascipt","PHP", "CSS", "MySQL"]}
        link="https://github.com/MRU-CSIS-3512-001-202301-ASG/the-project-nsriv531"
        projectimage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
      />
      </div>
    </div>
  );
}

export default Projects;
