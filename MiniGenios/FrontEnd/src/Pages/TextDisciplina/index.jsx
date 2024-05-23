import Navbar from "../../Components/Navbar";
import "../TextDisciplina/textDisciplina.css";

function TextDisciplina() {
  return (
    <>
      <Navbar />

      <main className="text-main">

      <section>
        <h1 className="title-main">
          O uso dos porquês: por que, por quê, porque ou porquê?
        </h1>
        <p className="p-main">
          O uso dos porquês depende do sentido que pretendemos atribuir a uma
          frase. Assim, com a utilização de por que, por quê, porque ou porque,
          é possível perguntar ou afirmar.{" "}
        </p>{" "}
        <p className="p-main">
          "Por que, por quê, porque ou porquê? É comum ter essa dúvida na hora
          de escrever. O uso dos porquês depende do sentido que queremos dar a
          uma frase. Confira algumas dicas rápidas e, depois, aprofunde-se no
          conteúdo para entender melhor o assunto.{" "}
        </p>{" "}
        <h2 className="p-main">Dicas rápidas para o uso dos porquês: </h2>{" "}
        <p className="p-main">
          Por que: normalmente usado em perguntas. Exemplo: "Por que você não
          foi à escola ontem?".{" "}
        </p>{" "}
        <p className="p-main">
          {" "}
          Por quê: normalmente usado no fim de perguntas.  Exemplo: "A festa
          acabou, mas por quê?".{" "}
        </p>{" "}
        <p className="p-main">
          Porque: normalmente usado em respostas. Exemplo: "A festa acabou
          porque houve uma grande confusão."
        </p>{" "}
        <p className="p-main">
          Porquê:  tem valor de substantivo e aparece acompanhado de
          determinanto (um artigo, por exemplo). Exemplo: "Queria saber o porquê
          de sua tristeza para poder ajudá-lo.""
        </p>
        </section>

{/*=====================================================GENIO=======================================================*/}

        <section>
        <div className="container-h1">
                <h1 className='text-container'>
                    Tire Suas dúvidas com o Gênio
                </h1>
                <div className="main-container">
                    {/* Conteúdo adicional da página inicial */}
                </div>
                <textarea></textarea>
            </div>
        </section>
      </main>
    </>
  );
}

export default TextDisciplina;
