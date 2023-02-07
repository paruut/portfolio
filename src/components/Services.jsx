import React from "react";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

const Services = () => {
  return (
    <section>
      <div>
        <h3 className="text-4xl font-burtons text-slate-300 py-1 text-center mt-10 pt-8 dark:text-gray-700">
          Services
        </h3>
        <h2 className="text-4xl font-burtons uppercase py-1 text-center pt-1 font-bold text-teal-600">
          What I do
        </h2>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center s:w-[100%] lg:w-[33.3%] shadow-sm shadow-teal-600 p-10 rounded-xl my-10 border-2 bg-gray-800 border-gray-700 dark:bg-slate-100">
          <img
            src={design}
            alt="design-img"
            className="mx-auto"
            width={100}
            height={100}
          />
          <h3 className="text-lg font-medium pt-8 pb-2 text-slate-300 dark:text-black">
            Beautiful Web Designs
          </h3>
          <p className="py-2 text-stone-300 dark:text-gray-600">
            Creating elegant responsive designs suited for your needs following
            core design theory.
          </p>
        </div>
        <div className="text-center s:w-[100%] lg:w-[33.3%] shadow-sm shadow-teal-600 p-10 rounded-xl my-10 border-2 bg-gray-800 border-gray-700 dark:bg-slate-100">
          <img
            src={code}
            alt="code-img"
            className="mx-auto"
            width={100}
            height={100}
          />
          <h3 className="text-lg font-medium pt-8 pb-2 text-slate-300 dark:text-black">
            Code your dream project
          </h3>
          <p className="py-2 text-stone-300 dark:text-gray-600">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
        </div>
        <div className="text-center s:w-[100%] lg:w-[33.3%] shadow-sm shadow-teal-600 p-10 rounded-xl my-10 border-2 bg-gray-800 border-gray-700 dark:bg-slate-100">
          <img
            src={consulting}
            alt="consulting-img"
            className="mx-auto"
            width={100}
            height={100}
          />
          <h3 className="text-lg font-medium pt-8 pb-2 text-slate-300 dark:text-black">
            Clean Code
          </h3>
          <p className="py-2 text-stone-300 dark:text-gray-600">
            Easy to read and understand as well as easy for any developer to
            maintain and modify.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
