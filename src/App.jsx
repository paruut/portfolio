import * as React from "react";
import Hero from "./components/Hero";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <main className="bg-gray-900 px-10 md:px-20 lg:px-40 dark:bg-slate-50">
        <Hero />
        <Personal />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default App;
