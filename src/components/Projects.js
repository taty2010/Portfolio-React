import React from "react";

function Projects(el){
    const img = (<img src="https://images.pexels.com/photos/2911545/pexels-photo-2911545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Samsung S9 Photography"></img>)
   const desc = (
    <div className="desc">
    <h3>Samsung S9 Life</h3>
    <p>This website was created to be a personal portfolio for photographs I have take with my Samsung S9</p>
    </div>
    )
    const workBox = (
    <div  className="workImg">
    <div id="samsung">
        <a href="samsung-portfolio/index.html">{img}</a>   
    </div>
    </div>
    )

 return <div class="workBox">
     {desc}
     {workBox}
 </div>
}

export default Projects;

