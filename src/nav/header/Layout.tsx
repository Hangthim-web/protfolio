import { Link, Outlet } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "../../style/navbar.css";
import React from "react";
const Layout = () => {
  return (
    <>
      <div className="the_main_wrapper mb-[30px]">
        <div className="container mx-auto">
          <div className="navbarWrapper flex justify-between items-center">
            <div className="hero-section-logo">
              <Link to="/">
                <h1 className="">Hang's Portfolio</h1>
              </Link>
            </div>
            <div className="navbarContainer">
              <nav>
                <ul className="flex">
                  <div className="flex">
                    <li className="transition ease-in-out duration-300 hover:text-slate-300">
                      <Link
                        to="/"
                        className="focus-within:underline underline-offset-4"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="transition ease-in-out duration-300 hover:text-slate-300">
                      <Link
                        to="/about"
                        className="focus-within:underline underline-offset-4"
                      >
                        About
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li className="ml-[500px]">
                      <a
                        href="https://github.com/Hangthim-web?tab=repositories"
                        target="blank"
                      >
                        <FaGithub style={{ fontSize: "30px" }} />
                      </a>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
