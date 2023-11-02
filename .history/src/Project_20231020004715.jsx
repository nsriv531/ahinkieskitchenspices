import "./App.css";

function Project({ title, description, link, projectimage }) {
    return (
        <div className="Project">
            <div>
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
                <div className="ProjectTags">
                    {tags.map((tag, index) => (
                        <div key={index}>{tag}</div>
                    ))
                    }
                </div>
                <a className="ProjectLink" href={link} target="_blank">
                    View Instructions
                </a>
            </div>
            <div class="image-container">
            <img src={projectimage} alt="Project 1" />
            </div>
             </div>
    );
}

export default Project;
