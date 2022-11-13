import React from "react";

const Personal = () => {
  return (
    <section>
      <div>
        <h3 className="text-4xl font-burtons text-slate-300 py-1 text-center pt-8 dark:text-gray-700">
          Main info
        </h3>
        <h2 className="text-4xl font-burtons uppercase py-1 text-center pt-1 font-bold text-teal-600">
          About me
        </h2>
        <p className="text-lg py-5 leading-8 text-white md:trxt-xl max-w-2xl mx-auto dark:text-gray-700">
          My name is Patryk Rutkowski. I am training towards a Front End
          Developer. I would describe myself as an ambitious person, constantly
          striving for self-development and broadening his own horizons. Due to
          my interest in Front-end Development, I started improving my
          programming skills and I have been constantly learning new tools and technologies. I am open to
          learn new things and libraries to make me a better developer.
        </p>
      </div>
    </section>
  );
};

export default Personal;
