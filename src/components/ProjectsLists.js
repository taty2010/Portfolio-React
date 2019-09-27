
      import React from "react";
    import proj1Img from '../img/proj1ImgSq.png'
    import proj2Sq from '../img/proj2Sq.png'
    import proj3Sq from '../img/proj3Sq.png'
    import proj4Sq from '../img/proj4Sq.png'
      
       const img = (<img src="https://images.pexels.com/photos/2911545/pexels-photo-2911545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Samsung S9 Photography"></img>)
      export const proj1 = (
        <div className ="projContainer">
        <div className="desc">
        <h3>Innovation Demand </h3>
        <p>Created a responsive website using Flexbox </p>
        </div>
        <div  className="workImg">
        <div className="imgWrap">
            <a href="https://taty2010.github.io/UI-III-Flexbox/"><img src={proj1Img}></img></a>   
        </div>
        </div>
        </div>
        )
   
        export const proj2 = (
        <div className ="projContainer">
        <div className="desc">
        <h3>Resume</h3>
        <p>Created as resume mockup purely with HTML and CSS </p>
        </div>
        <div  className="workImg">
        <div className="imgWrap">
            <a href="https://taty2010.github.io/Preprocessing-I/"><img src={proj2Sq}></img></a>   
        </div>
        </div>
        </div>
    )

    export const proj3 = (
        <div className ="projContainer">
        <div className="desc">
        <h3>American Football Scoreboard</h3>
        <p>Scoreboard created in react that changes the score of either team.</p>
        </div>
        <div  className="workImg">
        <div className="imgWrap">
            <a href="https://frosty-poitras-e4606d.netlify.com/"><img src={proj3Sq}></img></a>   
        </div>
        </div>
        </div>
    )

    export const proj4 = (
        <div className ="projContainer">
        <div className="desc">
        <h3>Art Portfolio</h3>
        <p>Splash Page of a Portfolio Website created in a team envrionment.</p>
        </div>
        <div  className="workImg">
        <div className="imgWrap">
            <a href="https://team-art.github.io/Splash_Page/"><img src={proj4Sq}></img></a>   
        </div>
        </div>
        </div>
    )