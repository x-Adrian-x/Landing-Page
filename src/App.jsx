import Navbar from "./components/Navbar";
import { InicioPage } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { EstudiosPage } from "./pages/EstudiosPage";
import { ExperienciaPage } from "./pages/ExperienciaPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { ContactoPage } from "./pages/ContactoPage";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="inicio" className="h-auto">
        <InicioPage />
      </section>
      <section id="perfil" className="bg-slate-700 h-auto">
        <PerfilPage />
      </section>
      <section id="estudios" className="h-auto">
        <EstudiosPage />
      </section>
      <section id="experiencia" className="bg-slate-700 h-auto">
        <ExperienciaPage />
      </section>
      <section id="portafolio" className="h-auto">
        <PortafolioPage />
      </section>
      <section id="contacto" className="bg-slate-700 h-auto">
        <ContactoPage />
      </section>
      <section id="footer" className="h-20">
        <Footer />
      </section>
    </>
  );
}

export default App;
