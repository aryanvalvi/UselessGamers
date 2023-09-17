import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="logo">LOGO.</div>
        <div className="navbar">
          <ul className="flexchilde">
            <li>Tournament</li>
            <li>News</li>
            <li>Guide</li>
            <li>About us</li>
          </ul>
          <button className="nav-btn">Login</button>
        </div>
        <div className="info">
          <h3>E-sport community</h3>
          <h1>
            We Organize esport tournaments for professional and amatuer gamers
          </h1>
          <button className="btn btn-home nav-btn:active nav-btn">
            Tournament
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
