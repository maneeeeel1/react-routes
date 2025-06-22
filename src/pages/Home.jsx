import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
        <>
        <h1>Bienvenido a mi Portfolio</h1>
        <ul>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/resume">Curriculum</Link></li>
        </ul>
        </>
    )
}

export default Home;