import Navbar from "../../Components/Navbar";
import "../TextDisciplina/textDisciplina.css";

function Sobre() {

  return (
    <>
      <Navbar />

      <main className="text-main">

        <section>
          <h1 className="title-main">
            Sobre Nós
          </h1>
          <p className="p-main">
            O MiniGênios é um site dedicado a tornar o aprendizado divertido e acessível para crianças
            entre 6 e 13 anos.{" "}
          </p>{" "}
          <p className="p-main">
            Nosso objetivo é ajudar as crianças a alcançarem seu máximo potencial acadêmico através
            de recursos educacionais interativos e de alta qualidade.{" "}
          </p>{" "}

          <p className="p-main">
            Estamos comprometidos em oferecer uma experiência educativa envolvente, intuitiva e
            segura para nossos usuários.{" "}
          </p>{" "}

        </section>

     

      </main>
    </>
  );
}

export default Sobre;
