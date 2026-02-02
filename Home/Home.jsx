import React from "react";
import homebg from "../../img/background bag.jpg";
import "./Home.css";
function Home() {
  return (
    <div className="home"
      style={{
        backgroundImage: `url(${homebg})`,
      }}>
      <div className="home-content">
        <h1>Welcome to Bella Carry</h1>
        <p>Discover stylish and durable bags for every occasion at Bella Carry</p>
      </div>
    </div>
  );
}

export default Home;
