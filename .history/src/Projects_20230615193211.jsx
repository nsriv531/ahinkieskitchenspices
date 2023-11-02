import "./App.css";

function Projects() {
  return (
    <div className="Projects">
      <h1 id="projects">Project Highlights</h1>
      <h2>Web Design, Software Engineering, and Game Development.</h2>
      <div className="ProjectContainer">
        <div className="Project">
          <img src="https://img.itch.zone/aW1nLzYyNjQwMTcucG5n/315x250%23c/Zq1vLj.png" alt="Project 1" />
          <div>
            <h2>Rhythmic Time Strategy</h2>
            <p>
              Rhythmic Time Strategy is a game I developed with some friends over the GMTK Game Jam 2021.
              In this project, I used Godot 3.0 along with some pixel art skills to make a fun RTS game.
              This was made using the theme "Connect".
            </p>
            <div className="ProjectTags">
              <div>Godot</div>
              <div>C#</div>
              <div>Pixel Art</div>
            </div>
            <a class="ProjectLink" href="https://nashdashin.itch.io/rhythmic-time-strategy">
              View Project
            </a>
          </div>
        </div>
        <div className="Project">
          <div>
            <h2>Web II - The Project</h2>
            <p>
              The Project was a term-long project that I made over the course of my Winter 2023 Semester 
              for my advanced Web Class, Web-II. In this class, I made an advanced website using Javascript and PHP,
              with a user facing side and an admin side. This site I was using complex queries in SQL to get
              an assortment of images with various filters.
            </p>
            <div className="ProjectTags">
              <div>CSS</div>
              <div>JavaScript</div>
              <div>SQL</div>
            </div>
            <a class="ProjectLink" href="https://www.google.com">
              View Project
            </a>
          </div>
          <img src="https://via.placeholder.com/600" alt="Project 1" />
        </div>
        <div className="Project">
          <img src="https://via.placeholder.com/600" alt="Project 1" />
          <div>
            <h2>Dosage Calculator</h2>
            <p>
              This is a dosage Calculator that performs simple calculations for a dental practise in Northern Manitoba.
              This simple mobile app that I developed through android studio allows a user to input a patients weight,
              for which a calculation will appear showcasing the the dosages for tylenol and amoxicillan for that persons
              weight amount. Over 20 people use this app and it has been used to help thousands of patients in a clinical sense,
              providing fast and easy means of calculating medical dosages.
            </p>
            <div className="ProjectTags">
              <div>Java</div>
              <div>Android Studio</div>
            </div>
            <a class="ProjectLink" href="https://www.google.com">
              View Project
            </a>
          </div>
        </div>
        <div className="Project">
          <img src="https://via.placeholder.com/600" alt="Project 1" />
          <div>
            <h2>CANIS</h2>
            <p>
              CANIS is an open source project that I worked on at AC Robotics. CANIS is a fully functional robot dog
              that is using reverse kinematics and was modeled after the boston-dynamics dog project. CANIS uses complex
              ROS along with advanced software engieering princples for movement and autonomous functionality. On this project,
              I learned a lot about ROS, along with Software Engineering princples.
            </p>
            <div className="ProjectTags">
              <div>ROS</div>
              <div>C#</div>
              <div>Engieering Foundations</div>
            </div>
            <a class="ProjectLink" href="https://www.google.com">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
