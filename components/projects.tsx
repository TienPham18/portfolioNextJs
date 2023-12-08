"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  // });
  // const { setActiveSection } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView) {
  //     setActiveSection("Projects");
  //   }
  // }, [inView, setActiveSection]);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 text-center">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[25rem] sm:mb-8 last:mb- even:pl-8 hover:bg-gray-200 transition">
      <div className="py-4 px-7 pb-7 sm:pl-15 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col items-center justify-center h-full">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <Link
          href="https://github.com/TienPham18/hotel-tishjama"
          target="_blank"
          className="group2 bg-black/[0.7] text-white px-6 py-2 mt-2 mb-6 max-w-[11rem] flex items-center justify-center gap-2 rounded-full
          outline-none focus:scale-110 group-hover:scale-110 group-hover:bg-[#6D9773] active:scale-80 transition"
        >
          Repository{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-3 transition" />
        </Link>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-4 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt="Projects I worked on"
        quality={95}
        className="absolute top-8 -right-40 w-[28rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.05]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        "
      />
    </section>
  );
}