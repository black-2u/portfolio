export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Skills", link: "#Topskills" },
  { name: "Services", link: "#Services" },
  { name: "Contact", link: "#contact" },
];

export const devilL = "Black Wang";
export const devil = "Black W.";
export const devilS = "Black";

export const gridItems = [
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "WellCorner - HealthCare",
    des: "Developed a React web app to provide healthcare information for cancer patients. Created functionalities to take simple and complex user surveys. Matched wireframes and used React and React Testing Library for unit tests.",
    img: "/projects/wellCorner.png",
    // techs: react, next, tailwind, ts
    iconLists: [
      "/icons/react.svg",
      "/icons/next.svg",
      "icons/tailwindcss.svg",
      "/icons/typescript.svg",
    ],
    link: "https://www.wellcorner.com/",
    toptext: "HealthCare",
  },
  {
    id: 2,
    title: "Feather - Rental",
    des: "Developed a smart and tidy Landing page with Next.js. Used Tailwind CSS for styling and React for interactivity.",
    img: "/projects/feather-landing.png",
    // techs: next, ts, tailwind
    iconLists: [
      "/icons/figma.png",
      "/icons/next.svg",
      "/icons/tailwindcss.svg",
      "/icons/typescript.svg",
    ],
    link: "https://livefeather.com/",
    toptext: "Rental Website",
  },
  {
    id: 3,
    title: "Mymories -Sharing Images Without Losing Data",
    des: "A service to share images easily with multiple people at an event without losing data, such as a party, wedding, or holiday. Users can also display live images on a screen. I conceived, designed, and developed the idea from scratch, including the React Native application, the React web front end, and the back end hosted via google cloud functions.",
    img: "/projects/mymories-landing.png",
    // techs: react, next, tailwind, ts, cloud
    iconLists: [
      "/icons/react.svg",
      "/icons/tailwindcss.svg",
      "/icons/typescript.svg",
      "/icons/cloud.svg",
    ],
    link: "https://mymories.de",
    toptext: "An App for Sharing Images Without Losing Data",
  },
  {
    id: 4,
    title: "E-commerce Website",
    des: "As a part of the team, I developed new features for the upcoming Ford EV infotainment system. I also improved coding and testing practices.",
    img: "/projects/greenCarReports-guides.PNG",
    iconLists: [
      "/icons/react.svg",
      "/icons/tailwindcss.svg",
      "/icons/bootstrap.png",
      "/icons/redux.png",
    ],
    link: "https://www.greencarreports.com/news/1128304_ford-mustang-mach-e",
    toptext: "E-commerce Website",
  },
];

export const testimonials = [
  {
    quote:
      "Working with " +
      devil +
      " was an outstanding experience. Their expertise in frontend development is evident in the high-quality, responsive code they deliver. They are reliable, communicative, and truly committed to meeting project deadlines. Highly recommend!",
    name: "Michael Johnson",
    // title: "Director of AlphaStream Technologies",
    title: "Client",
    imgURL: "/clients/clientOne.jpeg",
  },
  {
    quote:
      devilS +
      " brought our vision to life with exceptional attention to detail and a deep understanding of modern frontend technologies. Their professionalism and willingness to go the extra mile made the collaboration seamless. Looking forward to future projects together!",
    name: "Adrian Jaston",
    title: "Client",
    imgURL: "/clients/clientTwo.jpeg",
  },
  {
    quote:
      devilS +
      " is a phenomenal UI/UX designer. They transformed our initial ideas into an intuitive and visually stunning user interface. Their creativity and dedication to user experience were instrumental in making our project a success. Highly recommended!",
    name: "Sekosda Luma",
    title: "Client",
    imgURL: "/clients/clientFour.jpeg",
  },
  {
    quote:
      "Collaborating with " +
      devilL +
      " was a pleasure. Their innovative design solutions and user-focused approach significantly enhanced our product's usability and appeal. They are highly skilled, communicative, and a true professional in every sense.",
    name: "Alexander",
    title: "Founder/ CTO of AimTraction",
    imgURL: "/clients/clientThree.jpeg",
  },
  {
    quote:
      devilS +
      " exceeded our expectations as a web developer. They delivered robust, scalable solutions and were always quick to address any challenges that arose. Their technical expertise and commitment to quality were evident throughout the project. Highly recommend their services!",
    name: "Tomasz Rygulski",
    title: "Co-founder of IDO Electronics NSG 4L",
    imgURL: "/clients/clientfive.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Next.js",
    img: "/companies/NEXTICONSK.png",
    nameImg: "/companies/nexttext.jpeg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/companies/app.svg",
    nameImg: "/companies/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/companies/host.svg",
    nameImg: "/companies/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/companies/s.svg",
    nameImg: "/companies/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/companies/dock.svg",
    nameImg: "/companies/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Programming Languages",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/workXP/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/workXP/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/workXP/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/workXP/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "../public/socialMedia/git.svg",
    link: "https://github.com/black-2U/",
  },
  // {
  //   id: 2,
  //   img: "../public/socialMedia/link1.png",
  //   link: "https://linktr.ee/",
  // },
  {
    id: 2,
    img: "../public/socialMedia/link.svg",
    link: "https://www.linkedin.com/in/",
  },
];
