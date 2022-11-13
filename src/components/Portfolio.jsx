import React from "react";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";
import web9 from "../public/web9.png";

const Portfolio = () => {
  return (
    <section>
      <div>
        <h3 className="text-4xl font-burtons py-1 text-slate-300 text-center mt-10 pt-8 dark:text-gray-700">
          Portfolio
        </h3>
        <h2 className="text-4xl font-burtons uppercase py-1 text-center pt-1 font-bold text-teal-600">
          Latest works
        </h2>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="overlay basis-1/3 flex-1 relative">
          <img
            src={web1}
            className="rounded-lg object-cover h-[380px] w-[100%]"
            layout="responsive"
          />
          <div className="overlay-description flex flex-col gap-5 justify-center items-center p-4 absolute w-[100%] h-[100%] inset-0 opacity-0">
            <h2 className="text-teal-600 font-burtons text-2xl lg:text-3xl font-semibold">
              Bank Modern App
            </h2>
            <p className="text-slate-300 font-burtons text-lg xl:text-xl">
              Responsive React JS application consisting of a stunning hero
              section, high-quality assets and gradients, business stats,
              reusable feature sections with call-to-action buttons,
              testimonials, and more!
            </p>
            <p className="text-teal-600 font-burtons font-semibold text-lg lg:text-xl">
              Tools: React JS, Tailwind
            </p>
            <a
              className="py-3 px-3 no-underline text-center text-xl mt-2 font-semibold uppercase text-slate-300 rounded-lg bg-gray-800 border border-teal-600"
              href="https://modern-bank-app-react.netlify.app/"
              target="_blank"
            >
              live version
            </a>
          </div>
        </div>
        <div className="overlay basis-1/3 flex-1 relative">
          <img
            src={web2}
            className="rounded-lg object-cover h-[380px] w-[100%]"
            layout="responsive"
          />
          <div className="overlay-description font-burtons flex flex-col gap-5 justify-center items-center p-4 absolute w-[100%] h-[100%] inset-0 opacity-0">
            <h2 className="text-teal-600 font-burtons text-2xl lg:text-3xl font-semibold">
              Lyriks - Music App
            </h2>
            <p className="text-slate-300 font-burtons text-lg lg:text-xl">
              Responsive React JS music application. Improved version of
              Spotify.
            </p>
            <p className="text-teal-600 font-burtons font-semibold text-lg lg:text-xl">
              Tools: React, Redux, Tailwind, RapidAPI
            </p>
            <a
              className="py-3 px-3 no-underline text-center text-xl mt-2 font-semibold uppercase text-slate-300 rounded-lg bg-gray-800 border border-teal-600"
              href="https://lyr-music-app.netlify.app/"
              target="_blank"
            >
              live version
            </a>
          </div>
        </div>
        <div className="overlay basis-1/3 flex-1 relative">
          <img
            src={web3}
            className="rounded-lg object-cover h-[380px] w-[100%]"
            layout="responsive"
          />
          <div className="overlay-description flex flex-col gap-5 justify-center items-center p-4 absolute w-[100%] h-[100%] inset-0 opacity-0">
            <h2 className="text-teal-600 font-burtons text-2xl lg:text-3xl font-semibold">
            Rest Countries API With Color Theme
            </h2>
            <p className="text-slate-300 font-burtons text-lg xl:text-xl">
              Responsive application with information about a given country such as population, region, capital. Dark/Light mode is available.
            </p>
            <p className="text-teal-600 font-burtons font-semibold text-lg lg:text-xl">
              Tools: HTML, CSS, JavaScript, Rest API
            </p>
            <a
              className="py-3 px-3 no-underline text-center text-xl mt-2 font-semibold uppercase text-slate-300 rounded-lg bg-gray-800 border border-teal-600"
              href="https://rest-countries-api-with-color-them.netlify.app/"
              target="_blank"
            >
              live version
            </a>
          </div>
        </div>
        <div className="overlay basis-1/3 flex-1 relative">
          <img
            src={web4}
            className="rounded-lg object-cover h-[380px] w-[100%]"
            layout="responsive"
          />
          <div className="overlay-description flex flex-col gap-5 justify-center items-center p-4 absolute w-[100%] h-[100%] inset-0 opacity-0">
            <h2 className="text-teal-600 font-burtons text-2xl lg:text-3xl font-semibold">
            Weather App API
            </h2>
            <p className="text-slate-300 font-burtons text-lg xl:text-xl">
              The application shows information about the weather, wind strength
              and humidity for the selected city. After entering any city to
              search, you can use the Enter button on the keyboard or
              right-click on the magnifying glass.
            </p>
            <p className="text-teal-600 font-burtons font-semibold text-lg lg:text-xl">
              Tools: HTML, CSS, JavaScript, Rest API
            </p>
            <a
              className="py-3 px-3 no-underline text-center text-xl mt-2 font-semibold uppercase text-slate-300 rounded-lg bg-gray-800 border border-teal-600"
              href="https://wweather-app-api.netlify.app/"
              target="_blank"
            >
              live version
            </a>
          </div>
        </div>
        <div className="overlay basis-1/3 flex-1 relative">
          <img
            src={web5}
            className="rounded-lg object-cover h-[380px] w-[100%]"
            layout="responsive"
          />
          <div className="overlay-description font-burtons flex flex-col gap-5 justify-center items-center p-4 absolute w-[100%] h-[100%] inset-0 opacity-0">
            <h2 className="text-teal-600 font-burtons text-2xl lg:text-3xl font-semibold">
              Olkarline website
            </h2>
            <p className="text-slate-300 font-burtons text-lg lg:text-xl">
              Olkarline website. Website made by me to the client's
              specifications.
            </p>
            <p className="text-teal-600 font-burtons font-semibold text-lg lg:text-xl">
              Tools: HTML, CSS, JavaScript, PHP
            </p>
            <a
              className="py-3 px-3 no-underline text-center text-xl mt-2 font-semibold uppercase text-slate-300 rounded-lg bg-gray-800 border border-teal-600"
              href="https://olkarline.netlify.app/"
              target="_blank"
            >
              live version
            </a>
          </div>
        </div>
        <div className="overlay basis-1/3 flex-1 relative">
          <img
            src={web6}
            className="rounded-lg object-cover h-[380px] w-[100%]"
            layout="responsive"
          />
          <div className="overlay-description font-burtons flex flex-col gap-5 justify-center items-center p-4 absolute w-[100%] h-[100%] inset-0 opacity-0">
            <h2 className="text-teal-600 font-burtons text-2xl lg:text-3xl font-semibold">
            Tip Calculator App
            </h2>
            <p className="text-slate-300 font-burtons text-lg lg:text-xl">
            An application that allows you to calculate tips.
            </p>
            <p className="text-teal-600 font-burtons font-semibold text-lg lg:text-xl">
              Tools: HTML, CSS, JavaScript
            </p>
            <a
              className="py-3 px-3 no-underline text-center text-xl mt-2 font-semibold uppercase text-slate-300 rounded-lg bg-gray-800 border border-teal-600"
              href="https://tip-calculator-appp.netlify.app/"
              target="_blank"
            >
              live version
            </a>
          </div>
        </div>
        <div className="overlay basis-1/3 flex-1 relative">
          <img
            src={web7}
            className="rounded-lg object-cover h-[380px] w-[100%]"
            layout="responsive"
          />
          <div className="overlay-description font-burtons flex flex-col gap-5 justify-center items-center p-4 absolute w-[100%] h-[100%] inset-0 opacity-0">
            <h2 className="text-teal-600 font-burtons text-2xl lg:text-3xl font-semibold">
            E-commerce Website
            </h2>
            <p className="text-slate-300 font-burtons text-lg lg:text-xl">
              Responsive e-commerce website with option to add or remove products from the shopping basket.
            </p>
            <p className="text-teal-600 font-burtons font-semibold text-lg lg:text-xl">
              Tools: HTML, CSS, JavaScript
            </p>
            <a
              className="py-3 px-3 no-underline text-center text-xl mt-2 font-semibold uppercase text-slate-300 rounded-lg bg-gray-800 border border-teal-600"
              href="https://ecommerce-pro-duct-page.netlify.app/"
              target="_blank"
            >
              live version
            </a>
          </div>
        </div>
        <div className="overlay basis-1/3 flex-1 relative">
          <img
            src={web8}
            className="rounded-lg object-cover h-[380px] w-[100%]"
            layout="responsive"
          />
          <div className="overlay-description font-burtons flex flex-col gap-5 justify-center items-center p-4 absolute w-[100%] h-[100%] inset-0 opacity-0">
            <h2 className="text-teal-600 font-burtons text-2xl lg:text-3xl font-semibold">
            Rock, Paper, Scissors
            </h2>
            <p className="text-slate-300 font-burtons text-lg lg:text-xl">
              Rock, Paper, Scissors - game
            </p>
            <p className="text-teal-600 font-burtons font-semibold text-lg lg:text-xl">
              Tools: HTML, CSS, JavaScript
            </p>
            <a
              className="py-3 px-3 no-underline text-center text-xl mt-2 font-semibold uppercase text-slate-300 rounded-lg bg-gray-800 border border-teal-600"
              href="https://ro-ck-pa-per-sciss-ors.netlify.app/"
              target="_blank"
            >
              live version
            </a>
          </div>
        </div>
        <div className="overlay basis-1/3 flex-1 relative">
          <img
            src={web9}
            className="rounded-lg object-cover h-[380px] w-[100%]"
            layout="responsive"
          />
          <div className="overlay-description font-burtons flex flex-col gap-5 justify-center items-center p-4 absolute w-[100%] h-[100%] inset-0 opacity-0">
            <h2 className="text-teal-600 font-burtons text-2xl lg:text-3xl font-semibold">Starbucks Website Clon Design</h2>
            <p className="text-slate-300 font-burtons text-lg lg:text-xl">
              Starbucks website
            </p>
            <p className="text-teal-600 font-burtons font-semibold text-lg lg:text-xl">
              Tools: HTML, CSS, JavaScript
            </p>
            <a
              className="py-3 px-3 no-underline text-center text-xl mt-2 font-semibold uppercase text-slate-300 rounded-lg bg-gray-800 border border-teal-600"
              href="https://starbucks-clon-website.netlify.app/"
              target="_blank"
            >
              live version
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
