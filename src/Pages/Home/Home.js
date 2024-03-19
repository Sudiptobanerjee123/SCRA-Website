import React from "react";
import { useTypingText } from "./useTypingText";
import visionImage from "../../Images/Home.jpg";
import "./Home.css";
import Dashboard from "../Dashboard/Dashboard"; // Adjust the path based on your project structure

const Home = () => {
  const constantText = "";
  const dynamicWords = ["Innovate", "Ideate", "Implement"];
  const words = dynamicWords.map((word) => constantText + " " + word);

  const { text, stop, start } = useTypingText(words, 130, 10);

  return (
    <div className="page-container">
      <div className="vision-section">
        <div className="image-container">
          <img src={visionImage} alt="Our Vision" className="blurred-image" />
        </div>
        <div className="overlay">
          <h2>{text}</h2>
          <div className="line"></div>
          <div className="social-links">
            <a href="https://www.linkedin.com/showcase/scraiit/" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/scraiit" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <Dashboard />
    </div>
  );
};

export default Home;
