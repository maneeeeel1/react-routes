import React from "react";
import {studies, experiences} from "../data/resume.js";

function Resume(){
    return(
        <div>
            <h2>Experiencia:</h2>
            <ul>
                {experiences.map((exp) =>(
                    <li key={exp.id}>
                        <h3>{exp.title}-{exp.company}</h3>
                        <p>{exp.date}</p>
                    </li>
                ))}
            </ul>

            <h2>Estudios:</h2>
            <ul>
                {studies.map((std) =>(
                    <li key={std.id}>
                        <h3>{std.title}-{std.institution}</h3>
                        <p>{std.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Resume;