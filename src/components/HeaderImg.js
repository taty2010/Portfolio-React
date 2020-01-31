import React from "react";

function HeaderImg() {
  //const url = 'https://images.pexels.com/photos/2911527/pexels-photo-2911527.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
  //return <img src={url} alt="image of desk" />;
  const HeroText = (
    <div className="heroText">
      <h1 className="name">Tatyana Novell</h1>
      <h2 className="front">Web Developer</h2>
    </div>
  );
  return <div className="hero">{HeroText}</div>;
}

export default HeaderImg;
