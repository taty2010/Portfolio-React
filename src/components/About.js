import React from "react";

function About() {
  const AboutText = (
    <div className="aboutTitle">
      <h2>Hello,</h2>
      <p>My name is Tatyana Novell, I am a Web Content Editor
         currently attending Lambda School to become a Software Engineer.
         Checkout what I've learned so far and take a peak at all the projects I've completed.

      </p>
    </div>
  );
  return <div className="about">{AboutText}</div>;
}

export default About;
