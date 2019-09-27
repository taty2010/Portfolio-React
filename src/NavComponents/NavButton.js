import React from "react";
import NavChanges from "./NavChanges.js"

export default function NavButton(prop){
    
    return (
    <button onClick = {()=>{const body = document.querySelector("body");
  
    return (
      body.style.backgroundColor = '#00000A'
    );}}
    className = "openNav">
    <i className="fas fa-arrow-alt-circle-right"></i>
    </button>
    )
}