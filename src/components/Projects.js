import React from "react";
import {proj1, proj2, proj3, proj4} from '../components/ProjectsLists'


function Projects(el){


 return <div id='projects'className = "projectWrapper">
     <div className="workBox">
     {proj1}
     {proj2}
     {proj3}
     {proj4}
    </div>
    
    </div>
}

export default Projects;

