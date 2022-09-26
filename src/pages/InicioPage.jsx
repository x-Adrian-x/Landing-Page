import inicioFoto from "../../public/inicioFoto.png";

export const InicioPage = () => {
  return (
    <>
      <div className="md:flex w-screen md:mb-auto mb-10 flex justify-center">

        <div className="md:flex md:justify-center md:h-auto md:mt-28 w-1/3 mb-10 md:mb-auto">
          <img
            src={inicioFoto}
            alt="Fotografia"
            className="md:mt-auto mt-28 md:ml-auto ml-2 border-8 border-l-slate-700 border-b-slate-700 border-t-green-700  border-r-green-700"
          />
        </div>

        <div className="md:flex md:h-screen md:items-center w-1/2 text-left md:mr-auto mr-3 md:mt-auto mt-28 md:ml-auto ml-5">
          <div>
            <h2 className="md:text-3xl text-1xl text-slate-700 font-bold">Hola!</h2>
            <h2 className="md:text-6xl text-2xl mb-3 text-green-700 font-bold">
              Soy Adrian Cubides
            </h2>
            <h2 className="md:text-3xl  text-slate-700 font-bold md:mb-16 mb-4">
              Desarrollador Junior
            </h2>
            <a
              href="https://github.com/x-Adrian-x"
              target="_blank"
              className="bg-green-700 mr-2 text-white md:text-2xl font-bold md:px-8 px-4 md:py-2 py-1 rounded-full"
            >
              <i class="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </div>

      </div>
    </>
  );
};
