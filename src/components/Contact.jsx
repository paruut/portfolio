import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contactsection">
      <div>
        <h3 className="text-4xl font-burtons py-1 text-slate-300 text-center mt-10 pt-8 dark:text-gray-700">
          Contact
        </h3>
        <h2 className="text-4xl font-burtons uppercase py-1 text-center pt-1 font-bold text-teal-600">
          With me
        </h2>
      </div>
      <div className="lg:flex mx-auto justify-center max-w-[700px]">
        <Form />
      </div>
      <div className="font-burtons">
        <p className="text-md py-1 text-slate-300 text-center pt-8 dark:text-gray-700">
          Copyright &copy; 2022 Patryk Rutkowski. <br /> All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
