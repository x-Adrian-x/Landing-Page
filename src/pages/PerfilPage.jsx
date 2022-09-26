import React from "react";

export const PerfilPage = () => {
  return (
    <>
      <div className="md:flex md:mx-10 md:justify-center md:w-screen md:my-36 my-20">

        <div className="bg-white border-8 border-green-700 text-slate-700 font-semibold md:text-2xl text-auto w-5/6 text-justify rounded-xl mx-auto md:my-auto my-10 p-8 md:p-0 md:mx-10 md:py-10 md:px-10 shadow-2xl shadow-green-700">
          <p className="">
            Soy un Ingeniero de sistemas con poca trayectoria pero con mucho
            entusiasmo, creatividad, disciplina y me gusta trabajar en equipo.
          </p>
          <p className="mt-6">
            Mi objetivo principal es desarrollarme profesionalmente de modo
            que busco oportunidades que me permitan hacerlo.
          </p>
          <p className="mt-6">
            Tengo conocimientos basicos de Html, Css, JavaScript, React y
            Python.
          </p>
        </div>
        <div className="bg-white text-green-700 border-8 border-green-700 md:px-6 mx-auto my-auto rounded-xl h-60 w-5/6 md:flex md:justify-around md:items-center p-8 md:p-0 md:mx-10 md:mb-auto mb-10 shadow-2xl shadow-green-700">
          <i className="fa-brands fa-html5 fa-5x"></i>
          <i className="fa-brands fa-css3-alt fa-5x"></i>
          <i className="fa-brands fa-square-js fa-5x"></i>
          <i className="fa-brands fa-react fa-5x"></i>
          <i className="fa-brands fa-python fa-5x"></i>
        </div>

      </div>
    </>
  );
};
