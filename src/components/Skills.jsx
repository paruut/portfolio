import React from "react";
import { useState } from "react";

const Skills = () => {
  const [toggleState, setTogggleState] = useState(1);

  const toggleTab = (index) => {
    setTogggleState(index);
  };

  return (
    <section className="font-burtons">
      {/* tabs start */}
      <div className="flex justify-center flex-wrap gap-5 xl:gap-10">
        <span
          className={`${
            toggleState === 1 ? "tabs active-tabs" : "tabs"
          } xl:text-2xl text-xl text-center mt-10 pt-8 cursor-pointer text-gray-600 hover:text-teal-500`}
          onClick={() => toggleTab(1)}
        >
          Skills
        </span>
        <span
          className={`${
            toggleState === 2 ? "tabs active-tabs" : "tabs"
          } xl:text-2xl text-xl text-center mt-10 pt-8 cursor-pointer text-gray-600 hover:text-teal-500`}
          onClick={() => toggleTab(2)}
        >
          Experience
        </span>
        <span
          className={`${
            toggleState === 3 ? "tabs active-tabs" : "tabs"
          } xl:text-2xl text-xl text-center mt-10 pt-8 cursor-pointer text-gray-600 hover:text-teal-500`}
          onClick={() => toggleTab(3)}
        >
          Education
        </span>
      </div>

      {/* tabs end */}

      <div className="content-tabs">
        <div
          className={`${
            toggleState === 1 ? "content active-content" : "content"
          } text-center mx-auto max-w-[400px] s:w-[100%] shadow-sm shadow-teal-600 p-10 rounded-xl mt-10 border-gray-700 border-2 bg-gray-800 dark:bg-slate-100`}
        >
          <p className="text-lg py-2 tracking-wider text-stone-300 dark:text-gray-600">
            HTML5, <br />
            CSS/SCSS, <br />
            JavaScript, <br />
            TailwindCSS, <br />
            Styled-components, <br />
            React, <br />
            React Router, <br />
            Redux, <br />
            REST API, <br />
            Git/GitHub
          </p>
        </div>

        <div
          className={`${
            toggleState === 2 ? "content active-content" : "content"
          } text-center mx-auto max-w-[400px] s:w-[100%] shadow-sm shadow-teal-600 p-10 rounded-xl mt-10 border-2 border-gray-700 bg-gray-800 dark:bg-slate-100`}
        >
          <span className="text-lg py-2 uppercase tracking-wider text-teal-600">
            Aug 2022 - Sep 2022
          </span>
          <h3 className="text-2xl py-2 font-bold tracking-wider text-stone-300 dark:text-gray-600">
            Junior Frontend Developer
          </h3>
          <h4 className="text-lg py-1 tracking-wider text-stone-400 dark:text-gray-600">
            IBPM S.A., Warsaw
          </h4>
          <p className="text-lg py-1 tracking-wider text-stone-400 dark:text-gray-600">
            Intern
          </p>
        </div>
        <div
          className={`${
            toggleState === 2 ? "content active-content" : "content"
          } text-center mx-auto max-w-[400px] s:w-[100%] shadow-sm shadow-teal-600 p-10 rounded-xl mt-10 border-2 border-gray-700 bg-gray-800 dark:bg-slate-100`}
        >
          <span className="text-lg py-2 uppercase tracking-wider text-teal-600">
            Sep 2022 - Jan 2023
          </span>
          <h3 className="text-2xl py-2 font-bold tracking-wider text-stone-300 dark:text-gray-600">
            Junior Frontend Developer
          </h3>
          <h4 className="text-lg py-1 tracking-wider text-stone-400 dark:text-gray-600">
            DKSoftware
          </h4>
          <p className="text-md py-1 tracking-wider text-stone-50 dark:text-gray-600">
            - I was responsible for creating web applications using technologies
            such as HTML5, CSS, TailwindCSS, JavaScript, and React;<br></br>- built
            single page applications using REST API communication;
          </p>
        </div>
        <div
          className={`${
            toggleState === 2 ? "content active-content" : "content"
          } text-center mx-auto max-w-[400px] s:w-[100%] shadow-sm shadow-teal-600 p-10 rounded-xl mt-10 border-2 border-gray-700 bg-gray-800 dark:bg-slate-100`}
        >
          <span className="text-lg py-2 tracking-wider text-teal-600">
            JAN 2023 - Currently
          </span>
          <h3 className="text-2xl py-2 font-bold tracking-wider text-stone-300 dark:text-gray-600">
            Junior Frontend Developer
          </h3>
          <h4 className="text-lg py-1 tracking-wider text-stone-400 dark:text-gray-600">
            Teldasoft
          </h4>
        </div>

        <div
          className={`${
            toggleState === 3 ? "content active-content" : "content"
          } text-center mx-auto max-w-[400px] s:w-[100%] shadow-sm shadow-teal-600 p-10 rounded-xl mt-10 border-2 border-gray-700 bg-gray-800 dark:bg-slate-100`}
        >
          <span className="text-lg py-2 capitalize tracking-wider text-teal-600">
            2022 - 2025
          </span>
          <h3 className="text-2xl pt-2 font-bold tracking-wider text-stone-300 dark:text-gray-600">
            Computer Science
          </h3>
          <p className="text-lg tracking-wider text-stone-500 dark:text-gray-600">
            Engineer's degree
          </p>
          <h4 className="text-lg py-1 tracking-wider text-stone-400 dark:text-gray-600">
            WSB Warsaw University
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Skills;
