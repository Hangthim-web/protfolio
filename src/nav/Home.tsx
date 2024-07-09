import React from "react";

import { Link } from "react-router-dom";
import my_photo from "../static/images/personal_photo.jpg";
import "../style/home.css";
import resume from "../assets/portfolio-cv.pdf";

const Home = () => {
  return (
    <>
      <div className="homeWrapper">
        <div className="container mx-auto">
          <div className="hero-section-container flex justify-between items-center">
            <div className="self-description animate-slide-in-left">
              <div>
                <p>Hello, I'm Hangthim</p>
                <p className="text-[50px]">
                  <span>Full Stack Developer</span>
                </p>
              </div>
              <div className="flex justify-start items-center">
                <div>
                  <Link
                    to="/contact"
                    className="underline underline-offset-4 hover:text-slate-300"
                  >
                    Contact Me
                  </Link>
                </div>
                <div>
                  <button className="bg-slate-700 p-[10px] ml-[20px] transition-all duration-200 ease-in-out hover:bg-slate-800">
                    <a href={resume} download="resume">
                      Download CV
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="imageContainer">
              <img src={my_photo} alt="photo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
