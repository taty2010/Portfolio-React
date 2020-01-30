import React from "react";
import {proj1, proj2, proj3, proj4, proj5, proj6} from '../components/ProjectsLists'


function Projects(el){


 return <div id='projects'className = "projectWrapper">
     <div className="workBox">
    <h2>Projects</h2>
     {proj1}
     {proj2}
     {proj3}
     {proj4}
     {proj5}
     {proj6}
    </div>
    
    </div>
}

export default Projects;

