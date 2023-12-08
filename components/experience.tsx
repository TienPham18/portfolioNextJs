"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import TimelineElement from "./TimelineElement";
import { useSectionInView } from "@/lib/hooks";
// import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section
      ref={ref}
      id="experience"
      className="text-center text-grey-800 scroll-mt-28"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => {
          return <TimelineElement key={index} item={item} />;
        })}
      </VerticalTimeline>
    </section>
  );
}
