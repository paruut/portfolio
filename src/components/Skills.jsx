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
          <h3 className="text-lg uppercase font-bold tracking-widest text-stone-500 dark:text-gray-600">
            Programming languages
          </h3>
          <p className="text-md py-2 tracking-wider text-stone-300 dark:text-gray-600">
            HTML <br />
            JavaScript <br />
            CSS (SCSS, Tailwind CSS, styled-components) <br />
          </p>
          <h3 className="text-lg uppercase font-bold tracking-widest text-stone-500 dark:text-gray-600">
            Technologies
          </h3>
          <p className="text-md py-2 tracking-wider text-stone-300 dark:text-gray-600">
            React / Router / Redux <br />
            Electron <br />
            Electron-builder <br />
            RWD <br />
            Jest / Vitest <br />
            Vite <br />
          </p>
          <h3 className="text-lg uppercase font-bold tracking-widest text-stone-500 dark:text-gray-600">
            Other
          </h3>
          <p className="text-md py-2 tracking-wider text-stone-300 dark:text-gray-600">
            Git / GitHub / Bitbucket <br />
            REST API <br />
            Figma <br />
            ESLint <br />
            Material-UI (MUI) <br />
            daisyUI <br />
          </p>
          <h3 className="text-lg uppercase font-bold tracking-widest text-stone-500 dark:text-gray-600">
            Soft skills
          </h3>
          <p className="text-md py-2 tracking-wider text-stone-300 dark:text-gray-600">
            Effective communication <br />
            Problem-solving <br />
            Creativity, open-mindedness <br />
            Self-discipline <br />
            Time menagement <br />
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
            such as HTML5, CSS, TailwindCSS, JavaScript, and React;
          </p>
          <p className="text-md py-1 tracking-wider text-stone-50 dark:text-gray-600">
            - built single page applications using REST API communication;
          </p>
        </div>
        <div
          className={`${
            toggleState === 2 ? "content active-content" : "content"
          } text-center mx-auto max-w-[400px] s:w-[100%] shadow-sm shadow-teal-600 p-10 rounded-xl mt-10 border-2 border-gray-700 bg-gray-800 dark:bg-slate-100`}
        >
          <span className="text-lg py-2 tracking-wider text-teal-600">
            JAN 2023 - Present
          </span>
          <h3 className="text-2xl py-2 font-bold tracking-wider text-stone-300 dark:text-gray-600">
            Junior Frontend Developer
          </h3>
          <h4 className="text-lg py-1 tracking-wider text-stone-400 dark:text-gray-600">
            Teldasoft
          </h4>
          <p className="text-md py-1 tracking-wider text-stone-50 dark:text-gray-600">
            - I am responsible for developing an application in React. My tasks
            include creating and modifying user interface components, managing
            application state using React state management, and integrating the
            application with the backend;
          </p>
          <p className="text-md py-1 tracking-wider text-stone-50 dark:text-gray-600">
            - I also try to acquire new skills in other technologies that may be
            useful in my work as a frontend developer;
          </p>
          <p className="text-md py-1 tracking-wider text-stone-50 dark:text-gray-600">
            - Additionally, I aminvolved in configuring Electron to enable
            desktop functionality forthe application. This involves utilizing
            Electron's capabilities to package and deploy the React application
            as a standalone desktop application formultiple platforms.
          </p>
        </div>

        <div
          className={`${
            toggleState === 3 ? "content active-content" : "content"
          } text-center mx-auto max-w-[400px] s:w-[100%] shadow-sm shadow-teal-600 p-10 rounded-xl mt-10 border-2 border-gray-700 bg-gray-800 dark:bg-slate-100`}
        >
          <span className="text-lg py-2 capitalize tracking-wider text-teal-600">
            2022 - Present
          </span>
          <h3 className="text-2xl pt-2 font-bold tracking-wider text-stone-300 dark:text-gray-600">
            Computer Science
          </h3>
          <p className="text-lg tracking-wider text-stone-500 dark:text-gray-600">
            Engineer's degree
          </p>
          <h4 className="text-lg py-1 tracking-wider text-stone-400 dark:text-gray-600">
            WSB Merito Warsaw University
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Skills;
