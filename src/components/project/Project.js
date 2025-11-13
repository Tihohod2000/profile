import React from "react";

function Project({ project }) {
    return (
        <div className="project">
            <h3>{project.name}</h3>
            <a
                className="link-project"
                target="_blank"
                href={project.link}
                rel="noreferrer"
            >
                {project.link}
            </a>
            <div className="info-from-readme">{project.readMe}</div>
            <div className="language-of-progect">
                Language: {project.language}
            </div>
        </div>
    );
}

export default Project;
