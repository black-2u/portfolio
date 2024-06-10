import React, { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import "./style.css";
import Typed from "typed.js";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import avatar from "../public/personal/avatar-Ninja1.jpg";
import { devil, devilS } from "@/data";

const Grid = () => {
  useEffect(() => {
    var typed = new Typed(".multiple-text", {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Web Developer",
        "UI/UX Designer",
        "Mobile App Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup function to destroy Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="pb-[5rem]  pt-[9rem] containerlarh" id="about">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
          // style={{ backgroundColor: "white" }} // Set background color for the first box
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
          // style={{ backgroundColor: "purple" }} // Set background color for the second box
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
          // style={{ backgroundColor: "blue" }} // Set background color for the third box
        />
      </div>

      <section className="home">
        <div className="home-content">
          <h3>Hello, It&apos;s Me</h3>
          <h1>{devil}</h1>
          <h3>
            And I&apos;m a <span className="multiple-text"></span>
          </h3>
          <p>
            <span className="text-green-500 text-lg border-2 border-spacing-3 border-red-500 rounded-lg">
              {devilS},
            </span>{" "}
            Experienced front-end developer with over 9 years of expertise in
            building dynamic, responsive, and user-friendly web applications
            using React.js, HTML, CSS, and modern JavaScript frameworks.
            Proficient in both front-end and back-end technologies, offering a
            well-rounded skill set for full-stack development.
          </p>

          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/"
              target="blank"
              // style={{ "--i": 7 }}
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/johndor917/"
              target="blank"
              // style={{ "--i": 8 }}
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/"
              target="blank"
              // style={{ "--i": 9 }}
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://linktr.ee/"
              target="blank"
              // style={{ "--i": 10 }}
              rel="noopener noreferrer"
            >
              <FaLink />
            </a>
          </div>
          <a
            href="/resume.pdf"
            className="btn"
            download
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="home-image mt-3 md:mt-0">
          <Image src={avatar} alt="Hero Image" />
        </div>
      </section>
    </div>
  );
};

export default Grid;
