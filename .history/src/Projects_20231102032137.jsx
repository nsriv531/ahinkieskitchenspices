import "./App.css";
import Project from "./Project";
import ProjectLeft from "./ProjectLeft";


function Projects() {
  return (
    <div className="Projects">
      <h1 id="projects">Recipes with Instructions</h1>
      <div className="ProjectContainer">

      <Project 
        title = "Grandmas Remedy"
        step1 = "- Bring your water to boil"
        step2 = "Place your tea bag in a cup of choice"
        step3 = "Add water"
        step4 = "- Add one spoon of honey or as desired"
        step5 = "- Add half lemon"
        step6 = "- Stir and enjoy"
        link="http://tasks.dentrisdms.com/"
        projectimage="https://imageupload.io/ib/WwvAYOJE5KAJ3ce_1698916477.png"
      /> 
      <Project 
        title = "Joll of Rice Seasoning "
        description = "This is the Joll of Rice Seasoning "
        link="http://tasks.dentrisdms.com/"
        projectimage="https://imageupload.io/ib/Gm8RMd0ZzXL0SVU_1698916527.png"
      />
        <Project 
        title = "Suya BBQ Seasoning"
        description = "This is the Suya BBQ Seasoning"
        link="https://show.ahinkeskitchen.com/"
        projectimage="https://imageupload.io/ib/04jNsXFGa5FTapi_1698916158.png"
      />
        <Project
        title = "Chicken Seasoning"
        description = "This is the chicken seasoning."      
        link="https://github.com/MRU-CSIS-3512-001-202301-ASG/the-project-nsriv531"
        projectimage="https://imageupload.io/ib/244ogj9znFCjtLw_1698916411.png"
      />
      </div>
    </div>
  );
}

export default Projects;
