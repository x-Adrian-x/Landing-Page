import experiencia1 from "../../public/experiencia1.png";
import experiencia2 from "../../public/experiencia2.png";

export const ExperienciaPage = () => {
  return (
    <>
      <div className="md:flex mx-10 md:my-56 my-28 h-full">
        <figure className="md:flex bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800 md:mx-10 md:w-1/2 border-8 border-green-700 md:mb-auto mb-8 shadow-2xl shadow-green-700">
          <img
            className="md:h-20 md:w-44 md:rounded-xl my-auto mx-auto rounded-full ml-auto md:ml-8"
            src={experiencia1}
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-justify text-slate-700">
                Creación de documentos inmobiliarios con Html, gestion de requerimientos a traves de tickets y manejo de la plataforma SmartHome.
              </p>
            </blockquote>
            <figcaption>
              <div className="text-slate-700 font-bold">GaiaTic</div>
              <div className="text-slate-700 font-medium">2020</div>
            </figcaption>
          </div>
        </figure>
        <figure className="md:flex bg-white rounded-xl p-8 md:p-0 dark:bg-slate-800 md:mx-10 md:w-1/2 border-8 border-green-700 shadow-2xl shadow-green-700">
          <img
            className="h-24 w-28 md:h-36 md:w-40 rounded-xl my-auto mx-auto ml-auto md:ml-8"
            src={experiencia2}
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-justify text-slate-700">
                Creación de interfaces con Laravel y Bootstrap, uso de Azure
                DevOps para control de versiones y creación de
                flujo conversacional para chatbots con QnA Maker.
              </p>
            </blockquote>
            <figcaption>
              <div className="text-slate-700 font-bold">BexTechnology</div>
              <div className="text-slate-700 font-medium">2021-2022</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
};
