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
        title = "Tasks DentrisDMS"
        description = "Tasks.dentrisDMS is a task system built using the CodeIgnitor framework in PHP. With some basic Javascript and simple styling with CSS was I able to build a simple to-do-list feature allowing users who work for The Pas Dental Clinic to make task assigning easy and practical for business use. This website helps 30 active employees manage their tasks for this dental clinic, making their work extremly efficent."
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
       title = "Ahinke's Kitchen"
        description = "Ahinkes' Kitchen is a local business that runs in the Forest Lawn area of Calgary. During the period of September 2023 and December 2023, I was hired as a web developer intern with the task of maintaing Ahinke's site through SquareSpace. Thisgot me very familar with SqaureSpace as a tool while, allowing me to learn how to work in a dynamic team environment. Through this process I also learned various plugins that are used in a business setting for websites, such as google plugins and others."  
        tags={["HTML", "SquareSpace", "Clover", "Google Plugins"]}
        link="https://www.show.ahinkeskitchen.com/"
        projectimage="https://show.ahinkeskitchen.com/wp-content/uploads/2021/08/Ahinkes-cooking-show-Logo.png"
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
