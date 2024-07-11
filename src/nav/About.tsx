
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import "../style/about.css";

const About = () => {
  return (
    <>
      <div className="aboutWrapper mt-[100px]">
        <div className="container mx-auto">
          <div className="animate-slide-in-left flex justify-between items-start">
            <div>
              <p className="font-robotoItalic text-[20px]">Hangthim Limbu</p>
              <p className="text-[100px]">
                <span className="text-[50px]">Full Stack</span>Developer
              </p>
              <p>
                Hello, I'm Hangthim. A Passionate full stack web developer with{" "}
                <br />a strong focus on creating a strong an seamless user
                experience <br />
                and dynamic web applications.
              </p>
            </div>
            <div className="">
              <h1 className="text-xl mr-[200px]  mb-[10px]" id="text-header">
                My Skills
              </h1>
              <div className="skillSet grid grid-cols-3 gap-2">
                <div className="skillContainer">
                  <FaPython />
                  <p>Python</p>
                </div>
                <div className="skillContainer">
                  <FaHtml5 />
                  <p>HTML</p>
                </div>
                <div className="skillContainer">
                  <FaPython />
                  <p>Python</p>
                </div>
                <div className="skillContainer ">
                  <FaCss3Alt />
                  <p>CSS</p>
                </div>
                <div className="skillContainer">
                  <RiTailwindCssFill />
                  <p>Tailwind</p>
                </div>
                <div className="skillContainer">
                  <IoLogoJavascript />
                  <p>Javascript</p>
                </div>
                <div className="skillContainer">
                  <DiJqueryLogo />
                  <p>Jquery</p>
                </div>
                <div className="skillContainer">
                  <FaPhp />
                  <p>PHP</p>
                </div>
                <div className="skillContainer">
                  <FaLaravel />
                  <p>Laravel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
