import { useInView } from "react-intersection-observer";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import React from "react";

export default function TimelineElement({ item }) {
  const { ref, inView } = useInView({
    triggerOne: true,
  });
  return (
    <React.Fragment ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "0.2rem solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
        visible={true}
      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="font-normal !mt-0">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </React.Fragment>
  );
}
