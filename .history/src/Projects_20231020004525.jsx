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
        description = " Durign our revamp to a non-for-profit student run organization, the web team and I decided to make a website from scratch representing AC Robotics. This website is built using NextJS, a rapid React Framework, as well as Tailwind CSS for styling and design. This site was very important as it allows many members to  gain information about our projects, as well as potential First Recruits on our FIRST Robotics teams that I help run with The Hive. "
        tags={["Next.js","React", "Tailwind CSS", "HTML"]}
        link="https://show.ahinkeskitchen.com/"
        projectimage="https://www.mtroyal.ca/ProgramsCourses/FacultiesSchoolsCentres/Business/Institutes/InstituteInnovationEntrepreneurship/_images/ac_robotics_logo.png"
      />
        <Project
        title = "Chicken Seasoning"
        description = "The Project was a term-long project that I made over the course of my Winter 2023 Semester for my advanced Web Class, Web-II. In this class, I made an advanced website using Javascript and PHP, with a user facing side and an admin side. This site I was using complex queries in SQL to get an assortment of images with various filters."        
        tags={["Javascipt","PHP", "CSS", "MySQL"]}
        link="https://github.com/MRU-CSIS-3512-001-202301-ASG/the-project-nsriv531"
        projectimage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
      />
      </div>
    </div>
  );
}

export default Projects;
