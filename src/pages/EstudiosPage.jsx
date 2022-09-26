import estudio1 from "../../public/estudio1.png"
import estudio2 from "../../public/estudio2.png"
import estudio3 from "../../public/estudio3.png"
import estudio4 from "../../public/estudio4.png"

export const EstudiosPage = () => {
  return (
    <div className="md:w-screen grid md:grid-cols-2 gap-8 justify-center content-center md:my-40 my-28">

      <figure className="md:flex bg-slate-700 rounded-xl p-8 md:p-0 mx-5 my-auto md:ml-16 md:mr-6 border-8 border-green-700 shadow-2xl shadow-slate-700">
        <img
          className="w-20 h-30 md:w-20 md:h-28 my-auto md:rounded-none rounded-xl mx-auto md:my-6 md:mx-10"
          src={estudio1}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:pr-10 text-center md:text-left space-y-4 md:mr-10">
          <blockquote>
            <p className="text-white text-lg font-bold">
              Ingenieria de Sistemas
            </p>
          </blockquote>
          <figcaption className="text-white font-normal">
            <div>Universidad de Cundinamarca</div>
            <div>Fusagasugá - 2019</div>
          </figcaption>
        </div>
      </figure>

      <figure className="md:flex bg-slate-700 rounded-xl p-8 md:p-0 mx-5 my-auto md:ml-6 md:mr-16 border-8 border-green-700 shadow-2xl shadow-slate-700">
        <img
          className="w-20 h-28 md:w-24 md:h-28 my-auto mx-auto md:mx-12"
          src={estudio2}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center md:text-left space-y-4 md:mr-10">
          <blockquote>
            <p className="text-white text-lg font-bold">
              Habilidades en Programación con enfasis en Aplicaciones Web
            </p>
          </blockquote>
          <figcaption className="text-white font-normal">
            <div>UNAB - MinTIC</div>
            <div className="pb-4">2021</div>
          </figcaption>
        </div>
      </figure>

      <figure className="md:flex bg-slate-700 rounded-xl p-8 md:p-0 mx-5 my-auto md:ml-16 md:mr-6 border-8 border-green-700 shadow-2xl shadow-slate-700">
        <img
          className="w-28 h-28 md:w-28 md:h-28 md:my-6 my-auto md:rounded-none rounded-xl mx-auto md:mx-6"
          src={estudio3}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center md:text-left space-y-4 md:mr-10">
          <blockquote>
            <p className="text-white text-lg font-bold">
              Programming Essentials in Python
            </p>
          </blockquote>
          <figcaption className="text-white font-normal">
            <div>Python Institute - MinTIC</div>
            <div>2021</div>
          </figcaption>
        </div>
      </figure>

      <figure className="md:flex bg-slate-700 rounded-xl p-8 md:p-0 mx-5 my-auto md:ml-6 md:mr-16 border-8 border-green-700 shadow-2xl shadow-slate-700">
        <img
          className="w-24 h-24 md:w-28 md:h-28 my-auto md:mx-8 mx-auto md:my-6 rounded-full"
          src={estudio4}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center md:text-left space-y-4 md:mr-10">
          <blockquote>
            <p className="text-white text-lg font-bold">
              Diplomado en Desarrollo Front-end con ReactJS
            </p>
          </blockquote>
          <figcaption className="text-white font-normal">
            <div>Campus FIMLM - LiveVox - TdeA</div>
            <div>2022</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};
