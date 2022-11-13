import React from "react";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navigation = () => {
  const darkModeState = checkThemeState();
  const [darkMode, setDarkMode] = useState(darkModeState);

  function checkThemeState() {
    return JSON.parse(localStorage.getItem("darkMode")) === true;
  }

  useEffect(() => {
    if (darkMode == true) {
      localStorage.setItem("darkMode", JSON.stringify(true));
      document.body.classList.add("dark");
      console.log(darkMode);
    } else {
      localStorage.setItem("darkMode", JSON.stringify(false));
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="py-10 mb-12 flex justify-between">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl text-center font-burtons border-2 text-slate-300 border-teal-600 w-[40px] h-[40px] rounded-full dark:text-gray-800">
          P
        </h1>
      </div>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl text-slate-300 dark:text-gray-800"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/50 text-white px-4 py-2 rounded-md ml-8"
            href="#contactsection"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
