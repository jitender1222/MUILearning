import React from "react";
import { Link } from "react-router-dom";
import hero from "../images/Foods.jpg";
import "../Component/HeaderStyle.css";
const Home = () => {
  return (
    <>
      <div
        className="home"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="hero">
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to={"/menu"}>
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
