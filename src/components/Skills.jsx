import React from "react";
import { useState } from "react";

const Skills = () => {
  const [toggleState, setTogggleState] = useState(1);

  const toggleTab = (index) => {
    setTogggleState(index);
  };

  return (
    <section className="font-burtons">
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
            CSS (SCSS/Sass/Tailwind) <br />
            JavaScript <br />
          </p>
          <h3 className="text-lg uppercase font-bold tracking-widest text-stone-500 dark:text-gray-600">
            Technologies
          </h3>
          <p className="text-md py-2 tracking-wider text-stone-300 dark:text-gray-600">
            React/Router <br />
            Redux/Context API for state management <br />
            Electron/Electron-builder <br />
            RWD <br />
            Jest/Vitest <br />
          </p>
          <h3 className="text-lg uppercase font-bold tracking-widest text-stone-500 dark:text-gray-600">
            Other
          </h3>
          <p className="text-md py-2 tracking-wider text-stone-300 dark:text-gray-600">
            Git/GitHub <br />
            REST API/Axios <br />
            Webpack/Babel <br />
            BitBucket/Jira/YouTrack <br />
            Figma <br />
            ESlint <br />
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
            Independence <br />
          </p>
        </div>
        <div
          className={`${
            toggleState === 2 ? "content active-content" : "content"
          } text-center mx-auto max-w-[400px] s:w-[100%] shadow-sm shadow-teal-600 p-10 rounded-xl mt-10 border-2 border-gray-700 bg-gray-800 dark:bg-slate-100`}
        >
          <span className="text-lg py-2 tracking-wider text-teal-600">
            JAN 2023 - curently
          </span>
          <h3 className="text-2xl py-2 font-bold tracking-wider text-stone-300 dark:text-gray-600">
            Junior Frontend Developer
          </h3>
          <h4 className="text-lg py-1 tracking-wider text-stone-400 dark:text-gray-600">
            Teldasoft - 3 projects
          </h4>
          <p className="text-md py-1 tracking-wider text-stone-50 dark:text-gray-600">
            - Developing applications in React, including creating and modifying
            user interface components, managing application state with React
            state management, and integrating with the backend;
          </p>
          <p className="text-md py-1 tracking-wider text-stone-50 dark:text-gray-600">
            - Configured Electron to enable desktop functionality, utilizing its
            capabilities to package and deploy the React application as a
            standalone desktop application across multiple platforms;
          </p>
          <p className="text-md py-1 tracking-wider text-stone-50 dark:text-gray-600">
            - Contributed to three projects, enhancing my development skills and
            experience as a frontend developer. This hands-on experience
            complemented my proactive approach to acquiring new skills in other
            valuable technologies;
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
            DKSoftware - 1 project
          </h4>
          <p className="text-md py-1 tracking-wider text-stone-50 dark:text-gray-600">
            - Developed web applications withHTML, CSS, TailwindCSS, JavaScript,
            and React;
          </p>
          <p className="text-md py-1 tracking-wider text-stone-50 dark:text-gray-600">
            - Created single-page applications with REST API communication;
          </p>
          <p className="text-md py-1 tracking-wider text-stone-50 dark:text-gray-600">
            - Actively participated in a project, learning and implementing
            components that contributed to its overall success;
          </p>
        </div>
        <div
          className={`${
            toggleState === 3 ? "content active-content" : "content"
          } text-center mx-auto max-w-[400px] s:w-[100%] shadow-sm shadow-teal-600 p-10 rounded-xl mt-10 border-2 border-gray-700 bg-gray-800 dark:bg-slate-100`}
        >
          <span className="text-lg py-2 capitalize tracking-wider text-teal-600">
            2022 - currently
          </span>
          <h3 className="text-2xl pt-2 font-bold tracking-wider text-stone-300 dark:text-gray-600">
            WSB Merito Warsaw University
          </h3>
          <p className="text-xl tracking-wider text-stone-500 dark:text-gray-600">
            Computer Science
          </p>
          <h4 className="text-lg py-1 tracking-wider text-stone-400 dark:text-gray-600">
            Engineer's degree
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Skills;
