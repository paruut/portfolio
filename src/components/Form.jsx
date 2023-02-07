import React from "react";


const Form = () => {

  return (
    <form
      action="https://formspree.io/f/xyyvlqbg"
      method="POST"
      className="w-[100%] shadow-sm shadow-teal-600 p-10  text-slate-50 rounded-xl my-10 border-gray-700 border-2 bg-gray-800 dark:bg-slate-100"
    >
      <div className="flex flex-col">
        <label className="py-1 px-1 text-slate-300 dark:text-gray-700" htmlFor="name">
          Full Name:
        </label>
        <input
          className="mt-1 block w-full px-3 py-2 bg-gray-700 dark:bg-white dark:text-black border border-gray-600 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
                  focus:border-teal-600 focus:ring-1 focus:ring-teal-600 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 invalid:text-pink-600
                  focus:invalid:border-pink-500  focus:invalid:ring-pink-500"
          type="text"
          placeholder="First and Last"
          name="name"
          required
          minlength="3"
        />
      </div>
      <div className="flex flex-col">
        <label className="pt-4 pb-1 px-1 text-slate-300 dark:text-gray-700" htmlFor="email">
          Email Address:
        </label>
        <input
          type="email"
          name="email"
          placeholder="email@domain.tld"
          className="mt-1 block w-full px-3 py-2 bg-gray-700 dark:bg-white dark:text-black border border-gray-600 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-1
                   focus:ring-teal-600 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:text-pink-600
                    focus:invalid:border-pink-500  focus:invalid:ring-pink-500"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="pt-4 pb-1 px-1 text-slate-300 dark:text-gray-700" htmlFor="message">
          Message:
        </label>
        <textarea
          className="mt-1 block w-full px-3 pt-2 pb-12 bg-gray-700 dark:bg-white dark:text-black  border border-gray-600 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
                  focus:border-teal-600 focus:ring-1 focus:ring-teal-600 disabled:bg-gray-700 disabled:text-slate-500 disabled:border-slate-200 invalid:text-pink-600
                  focus:invalid:border-pink-500  focus:invalid:ring-pink-500"
          id="message"
          name="message"
          required
          minlength="5"
        />
      </div>
      <div className="flex justify-center">
      <button
        className="text-center mt-5 rounded-md shadow-sm bg-gray-700 focus:border-teal-600 dark:bg-white text-slate-300 dark:text-gray-700 w-[auto] sm:w-[30%] px-3 py-2 border-2 border-gray-600"
        type="submit"
      >
        Send
      </button>
      </div>
    </form>
  );
};

export default Form;
