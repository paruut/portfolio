import React from "react";
import Navigation from "./Navigation";
import PersonalAnimate from "./PersonalAnimate";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Hero() {
  return (
    <section className="pb-20">
      <Navigation />
      <PersonalAnimate />
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700">
        <a
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://github.com/paruut"
        >
          <AiFillGithub className="cursor-pointer border-2 rounded-full border-gray-600 hover:text-teal-600 hover:border-teal-600 duration-300 ease-in-out" />
        </a>
        <a
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://www.linkedin.com/in/patryk-r-410219228/"
        >
          <AiFillLinkedin className="cursor-pointer border-2 rounded-lg border-gray-600 hover:text-teal-600 hover:border-teal-600 duration-300 ease-in-out" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
