import React from "react";

export const ContactoPage = () => {
  return (
    <>
        <div className="md:my-36 my-28 bg-slate-700 border-8 border-white text-green-700 md:font-normal md:text-2xl text-auto rounded-xl mx-auto p-auto md:p-0 md:py-12 md:px-36 shadow-2xl shadow-white">
          <div className="bg-slate-700 flex">
            <i class="fa-solid fa-user bg-white md:py-auto py-2 md:px-auto px-2 mx-auto md:mx-10 my-auto rounded-full md:ml-0"></i>
            <p className="bg-white rounded-xl my-4 md:mr-auto py-2 px-8">Adrian Cubides</p>
          </div>
          <div className="bg-slate-700 flex">
            <i class="fa-solid fa-phone bg-white md:py-auto py-2 md:px-auto px-2 mx-auto md:mx-10 my-auto rounded-full md:ml-0"></i>
            <p className="bg-white rounded-xl my-4 py-2 px-8">+57 3167731532</p>
          </div>
          <div className="bg-slate-700 flex">
            <i class="fa-solid fa-envelope bg-white md:py-auto py-2 md:px-auto px-2 mx-auto md:mx-10 my-auto rounded-full md:ml-0"></i>
            <p className="bg-white rounded-xl my-4 py-2 md:px-8 px-2">adrianesteban98@hotmail.com</p>
          </div>
          <div className="bg-slate-700 flex">
            <i class="fa-solid fa-house bg-white md:py-auto py-2 md:px-auto px-2 mx-auto md:mx-10 my-auto rounded-full md:ml-0"></i>
            <p className="bg-white rounded-xl my-4 py-2 px-8">Fusagasugá - Colombia</p>
          </div>
        </div>
    </>
  );
};
