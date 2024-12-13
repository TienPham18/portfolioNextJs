"use client";
import Link from "next/link";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  // const { ref, inView } = useInView({
  //   threshold: 0.75,
  // });
  // const { setActiveSection } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("About");
  //   }
  // }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-10 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.7,
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        After graduating with a degree in{" "}
        <span className="font-medium">Nature Science</span>, I decided to pursue
        my passion for programming. I enrolled in a coding bootcamp at{" "}
        <Link
          href="https://www.neuefische.de/en"
          target="_blank"
          className="underline text-gray-500"
        >
          neue Fische GmbH{" "}
        </Link>
        and learned <span className="font-medium">web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies or hitting the gym. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
