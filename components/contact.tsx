"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-28 text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:tienphamvanfuv@gmail.com">
          tienphamvanfuv@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg border border-black/10 mb-4"
          name="senderEmail"
          type="email"
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 px-4 py-2 rounded-lg border border-black/10"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 mt-4 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all"
        >
          Submit <FaPaperPlane />{" "}
        </button>
      </form>
    </section>
  );
}
