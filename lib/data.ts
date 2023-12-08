import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Tishjama from "@/public/Tishjama.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bootcamp",
    location: "Remote - Bielefeld, Germany",
    description:
      "I graduated of intensive studying at Bootcamp. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "07.2023 - 10.2023",
  },
  {
    title: "Product Developer",
    location: "Detmold, Germany",
    description:
      "I worked as a product developer for 2.5 years in Sonae Arauco GmbH",
    icon: React.createElement(CgWorkAlt),
    date: "03.2021 - 06.2023",
  },
  {
    title: "Research Associate",
    location: "Göttingen, Germany",
    description:
      "I worked as a research associate in the University of Göttingen for 4 years",
    icon: React.createElement(CgWorkAlt),
    date: "11.2016 - 12.2020",
  },
] as const;

export const projectsData = [
  {
    title: "Hotel Tishjama",
    description:
      "I worked on this Capstone Project. The App offers both service manager and guests ease and convenience when it comes to effortlessly booking, creating, deleting or editing services offered by the hotel.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Styled Components",
      "Cloudinary",
      "Mongoose",
      "useSWR",
    ],
    imageUrl: Tishjama,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Mongoose",
  "Agile methods",
  "REST API",
  "Cloudinary",
  "Java",
  "MySQL",
  "Framer Motion",
] as const;
