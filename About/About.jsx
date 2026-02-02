import React from "react";
import aboutimg from "../../img/about img.jpg";
import "./About.css";
function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <img className="img" src={aboutimg}></img>
      <p> Welcome to <b>Bella Carry</b> — your destination for trendy, durable,
        and affordable bags!
        At Bella Carry, we believe that a bag is more than just an accessory;
        it’s a reflection of your style, confidence, and personality.</p>
    </div>
  );
}

export default About;


