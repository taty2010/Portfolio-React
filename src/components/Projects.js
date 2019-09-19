import React from "react";


function Projects(el){
    const img = (<img src="https://images.pexels.com/photos/2911545/pexels-photo-2911545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Samsung S9 Photography"></img>)
   const proj1 = (
    <div className ="projContainer">
    <div className="desc">
    <h3>Project I</h3>
    <p>This website was created to be a personal portfolio for photographs I have take with my Samsung S9</p>
    </div>
    <div  className="workImg">
    <div className="imgWrap">
        <a href="samsung-portfolio/index.html">{img}</a>   
    </div>
    </div>
    </div>
    )

    const proj2 = (
        <div className ="projContainer">
        <div className="desc">
        <h3>Project II</h3>
        <p>This website was created to be a personal portfolio for photographs I have take with my Samsung S9</p>
        </div>
        <div  className="workImg">
        <div className="imgWrap">
            <a href="samsung-portfolio/index.html">{img}</a>   
        </div>
        </div>
        </div>
    )

    const proj3 = (
        <div className ="projContainer">
        <div className="desc">
        <h3>Project II</h3>
        <p>This website was created to be a personal portfolio for photographs I have take with my Samsung S9</p>
        </div>
        <div  className="workImg">
        <div className="imgWrap">
            <a href="samsung-portfolio/index.html">{img}</a>   
        </div>
        </div>
        </div>
    )

    const proj4 = (
        <div className ="projContainer">
        <div className="desc">
        <h3>Project II</h3>
        <p>This website was created to be a personal portfolio for photographs I have take with my Samsung S9</p>
        </div>
        <div  className="workImg">
        <div className="imgWrap">
            <a href="samsung-portfolio/index.html">{img}</a>   
        </div>
        </div>
        </div>
    )

 return <div className = "projectWrapper">
     <div className="workBox">
     {proj1}
     {proj2}
     {proj3}
     {proj4}
    </div>
    
    </div>
}

export default Projects;

