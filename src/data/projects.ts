import { IProject } from "@/interfaces/IProject";

export const projects: IProject[] = [
  {
    id: 1,
    name: "Parallax Effect",
    description:
      "project reflects the nice parallax effect developed in NextJS",
    image_path: "/imgs/projects/Parallax-Effect.png",
    deployed_url: "https://parallax-9get39cng-moayed-s-projects.vercel.app/",
    github_url: "https://github.com/MrMaximeliom/Parallax-Landing-Page",
    category: ["NextJS"],
    key_techs: ["Next JS", "Tailwind CSS"],
  },
  {
    id: 2,
    name: "Simple Countdown",
    description:
      "Simple Countdown is an application helps you to create a nice countdown to your special events",
    image_path: "/imgs/projects/Simple_Countdown.png",
    deployed_url: "https://mrmaximeliom.github.io/React-Countdown",
    github_url: "https://github.com/MrMaximeliom/React-Countdown",
    category: ["React"],
    key_techs: ["React", "Redux"],
  },
  {
    id: 3,
    name: "EuroWeather",
    description:
      "EuroWeather is a simple application uses OpenWeatherApi to provide the users with the tempreature for 6 days ahead of most cities in Europe",
    image_path: "/imgs/projects/EuroWeather.png",
    deployed_url: "https://euro-weather.vercel.app/",
    github_url: "https://github.com/MrMaximeliom/EuroWeather",
    category: ["VanillaJS"],
    key_techs: ["HTML", "VanillaJS", "CSS", "Bootstrap"],
  },
  {
    id: 4,
    name: "project four",
    description: "dsds",
    image_path: "/imgs/projects/covid.jpg",
    deployed_url: "fgfg",
    github_url: "dfd",
    category: ["DotNet", "Mongo", "React"],
    key_techs: ["React", "Material UI"],
  },
  {
    id: 5,
    name: "project five",
    description: "dsds",
    image_path: "/imgs/projects/covid.jpg",
    deployed_url: "fgfg",
    github_url: "dfd",
    category: ["React"],
    key_techs: ["React", "Material UI"],
  },
];
