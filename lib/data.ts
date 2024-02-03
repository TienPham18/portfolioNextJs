import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import Tishjama from "@/public/Tishjama.png";
import carHub from "@/public/carHub.png";
import TravelApp from "@/public/TravelApp.png";
import portfolio from "@/public/portfolio.png";

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
  // {
  //   title: "Java Developer - Oracle Certified Professional, Java SE Programmer",
  //   location: "ComCave.College GmbH Bielefeld, Germany",
  //   description:
  //     "I am certified as an Oracle Certified Associate, Java SE 8 Programmer.",
  //   icon: React.createElement(FaJava),
  //   date: "06-08.2024",
  // },
  // {
  //   title: "Java Developer - Oracle Certified Associate, Java SE Programmer",
  //   location: "ComCave.College GmbH Bielefeld, Germany",
  //   description:
  //     "I am certified as an Oracle Certified Associate, Java SE 8 Programmer.",
  //   icon: React.createElement(FaJava),
  //   date: "03-05.2024",
  // },
  {
    title: "Python-Developer inkl. PCEP-certified",
    location: "ComCave.College GmbH Bielefeld, Germany",
    description: "Python Cerified Entry-Level Python Programmer-Zertifikat",
    icon: React.createElement(FaPython),
    date: "01.2024",
  },
  {
    title: "Java Internship",
    location: "Ecomify GmbH Bielefeld, Germany",
    description: "I worked on the assigned tasks with Java and MySQL.",
    icon: React.createElement(FaJava),
    date: "11.2023",
  },
  {
    title: "Graduated Bootcamp | Neuefische GmbH - Web Development",
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
    title: "Service Booking-App",
    description:
      "Login Data as Service manager (Email: service-manager@hotel-tishjama.com Pass: 1234) to edit the service. As Guest (Email: guest1@home.com Pass: 101) to book the service",
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
    urls: ["https://hotel-tishjama.vercel.app/"],
    repos: ["https://github.com/TienPham18/hotel-tishjama"],
  },
  {
    title: "CarHub",
    description:
      "Find, book, and unlock cars near you. CarHub is a car sharing service that allows you to book a car, unlock it, and drive it for as long as you need.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: carHub,
    urls: ["https://car-world-blush.vercel.app"],
    repos: ["https://github.com/TienPham18/Car_World"],
  },
  {
    title: "Travel-App",
    description:
      "We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one apppublic web app for quick analytics on text.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: TravelApp,
    urls: ["https://travel-app-rosy-one.vercel.app"],
    repos: ["https://github.com/TienPham18/Travel-app"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal Portfolio to show all the projects have been done.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Context API",
      "React Hooks",
    ],
    imageUrl: portfolio,
    urls: ["https://portfolio-next-js-tienpham18.vercel.app"],
    repos: ["https://github.com/TienPham18/portfolioNextJs"],
  },
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
  "Python",
] as const;
