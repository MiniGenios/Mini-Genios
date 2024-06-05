import React, { useState } from "react";
import "../QuestionPage/telaPerguntas.css";
import Navbar from "../../Components/Navbar";
import "../../Fonts/Lato-Bold.ttf"
import "../../Fonts/Lato-Regular.ttf"

const QuestionPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o envio do formulário padrão

    if (selectedOption) {
      // Desabilita todas as opções
      document
        .querySelectorAll('.option input[type="radio"]')
        .forEach(function (input) {
          input.disabled = true;
        });

      // Lógica para verificar se a opção selecionada está correta
      if (selectedOption === "D") {
        // Destaca a alternativa correta
        document
          .getElementById("option-d")
          .parentElement.classList.add("correct-answer");
      } else {
        // Destaca a alternativa selecionada como errada
        document
          .getElementById(`option-${selectedOption.toLowerCase()}`)
          .parentElement.classList.add("wrong-answer");
        // Encontra e destaca a alternativa correta
        document
          .getElementById("option-d")
          .parentElement.classList.add("correct-answer");
      }
    }
  };

  return (
    <>
      <Navbar />

      <main className="main">
        <div className="cabecalhoQuestao">
          <h1 className="h1-questao">Questões</h1>

          <h2>Diferença dos porquês</h2>
        </div>

        <section className="cardQuestao">
            <div className="question-container">
              <div className="container-header">
                <div className="question">Exercício 1</div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="title-questao">
                  <h3>A Alternativa correta sobre o uso do porquê é:</h3>
                </div>
                <div className="options-container">
                  <div className="option">
                    <input
                      type="radio"
                      id="option-a"
                      name="answer"
                      value="A"
                      onChange={() => setSelectedOption("A")}
                    />
                    <label htmlFor="option-a">A</label>
                    <p>Ele não veio por que estava doente.</p>
                  </div>
                  <div className="option">
                    <input
                      type="radio"
                      id="option-b"
                      name="answer"
                      value="B"
                      onChange={() => setSelectedOption("B")}
                    />
                    <label htmlFor="option-b">B</label>
                    <p>Eis o por que da minha viagem.</p>
                  </div>
                  <div className="option">
                    <input
                      type="radio"
                      id="option-c"
                      name="answer"
                      value="C"
                      onChange={() => setSelectedOption("C")}
                    />
                    <label htmlFor="option-c">C</label>
                    <p>Estavam ansiosos porquê o dia já havia amanhecido.</p>
                  </div>
                  <div className="option">
                    <input
                      type="radio"
                      id="option-d"
                      name="answer"
                      value="D"
                      onChange={() => setSelectedOption("D")}
                    />
                    <label htmlFor="option-d">D</label>
                    <p>Por que ela faltou hoje?</p>
                  </div>
                </div>
                <button type="submit" className="submit-button">
                  Enviar Resposta
                </button>
              </form>
            </div>
        </section>
      </main>
    </>
  );
};

export default QuestionPage;
