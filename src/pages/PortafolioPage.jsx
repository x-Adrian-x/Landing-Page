import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";

export const PortafolioPage = () => {
  return (
    <>
    <div className="md:flex h-full md:my-auto my-20">
      {proyectos.map((proyecto) => (
        <MyCard
          key={proyecto.id}
          url={proyecto.url}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          url_preview={proyecto.url_preview}
          url_github={proyecto.url_github}
        />
      ))}
      </div>
    </>
  );
};
