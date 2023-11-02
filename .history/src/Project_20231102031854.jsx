import "./App.css";

function Project({ title, step1, step2, step3, step4, step5, step6, link, projectimage }) {
    return (
        <div className="Project">
            <div>
                <h2>{title}</h2>
                <p>
                    {step1}
                </p>
                <p>
                    {step2}
                </p>
                <p>
                    {step3}
                </p>
                <p>
                    {step4}
                </p>
                <p>
                    {step5}
                </p>
                <p>
                    {step6}
                </p>
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
