import React from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";
// langs
import htmlLogo from "../public/icons/html.png";
import cssLogo from "../public/icons/css.png";
import jsLogo from "../public/icons/js.png";
import tsLogo from "../public/icons/typescript.svg";
import phpLogo from "../public/icons/php.svg";
// libs
import reactLogo from "../public/icons/react.svg";
import jqueryLogo from "../public/icons/jquery.png";
import nodeLogo from "../public/icons/node-js.svg";
import sassLogo from "../public/icons/sass.png";
import apiLogo from "../public/icons/api.svg";
// frameworks
import nextLogo from "../public/icons/next-js.svg";
import bootstrapLogo from "../public/icons/bootstrap.png";
import tailwindLogo from "../public/icons/tailwindcss.svg";
import muiLogo from "../public/icons/mui.png";
import reduxLogo from "../public/icons/redux.png";
// platforms
import vscodeLogo from "../public/icons/vscode.png";
import githubLogo from "../public/icons/github.png";
import gitLogo from "../public/icons/git.png";
import chatGptLogo from "../public/icons/chatgpt.jpg";
import figmaLogo from "../public/icons/figma.png";
import vercelLogo from "../public/icons/vercel.svg";

const skills = [
  {
    category: "Languages",
    items: [
      { logo: htmlLogo, name: "HTML" },
      { logo: cssLogo, name: "CSS" },
      { logo: jsLogo, name: "JavaScript" },
      { logo: tsLogo, name: "TypeScript" },
      { logo: phpLogo, name: "PHP" },
    ],
  },
  {
    category: "Libraries",
    items: [
      { logo: reactLogo, name: "ReactJS" },
      { logo: jqueryLogo, name: "JQuery" },
      { logo: sassLogo, name: "SASS" },
      { logo: nodeLogo, name: "NodeJS" },
      { logo: apiLogo, name: "APIs" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { logo: nextLogo, name: "NEXT.js" },
      { logo: bootstrapLogo, name: "Bootstrap" },
      { logo: tailwindLogo, name: "TailwindCSS" },
      { logo: muiLogo, name: "Material-UI" },
      { logo: reduxLogo, name: "Redux" },
    ],
  },
  {
    category: "Platforms",
    items: [
      { logo: vscodeLogo, name: "VS Code" },
      { logo: figmaLogo, name: "Figma" },
      { logo: githubLogo, name: "GitHub" },
      { logo: gitLogo, name: "Git" },
      { logo: vercelLogo, name: "Vercel" },
      { logo: chatGptLogo, name: "ChatGPT" },
    ],
  },
];

const Experience = () => {
  return (
    <div className="py-20 w-full mt-[8rem]" id="Topskills">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple">Top Skills</span>
      </h1>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-4 md:px-2">
        {skills.map((skillCategory, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="flex flex-col p-6 gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  {skillCategory.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        height={32}
                        style={{ height: 32, width: "auto" }}
                        className="mb-2"
                      />
                      <p className="text-gray-800 dark:text-white font-medium">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
