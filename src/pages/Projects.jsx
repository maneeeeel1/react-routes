import React from "react";
import projects from "../data/projects.js";

function Projects(){
    return(
        <div>
            <h2>Mis Proyectos:</h2>
            <ul>
                {projects.map((project) =>(
                    <li key={project.id}>
                        <h3>{project.name}</h3>
                        <img src={project.image} alt={project.name} />
                        <p>{project.description}</p>
                        <a href={project.url}>Ver Proyecto</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Projects;