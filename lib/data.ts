import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaReact } from "react-icons/fa";
import Tishjama from "@/public/Tishjama.png";
import carHub from "@/public/carHub.png";
import TravelApp from "@/public/TravelApp.png";

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
    title: "Internship",
    location: "Ecomify GmbH Bielefeld, Germany",
    description: "I worked on the assigned tasks with Java and MySQL.",
    icon: React.createElement(FaJava),
    date: "11.2023",
  },
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
    title: "Service Booking-App",
    description:
      "The App offers both service manager and guests ease and convenience when it comes to effortlessly booking, creating, deleting or editing services offered by the hotel.",
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
  },
  {
    title: "CarHub",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: carHub,
    urls: ["https://car-world-blush.vercel.app"],
  },
  {
    title: "Travel-App",
    description:
      "We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one apppublic web app for quick analytics on text.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    imageUrl: TravelApp,
    urls: ["https://travel-app-rosy-one.vercel.app"],
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
] as const;
