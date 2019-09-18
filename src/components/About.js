import React from "react";

function About() {
  const AboutText = (
    <div className="aboutTitle">
      <h2>Hello,</h2>
      <p>My name is Tatyana Novell and I am currently attending Lambda School to become a Software Engineer</p>
    </div>
  );
  return <div className="about">{AboutText}</div>;
}

export default About;
