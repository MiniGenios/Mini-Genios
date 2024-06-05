import Navbar from "../../Components/Navbar";
import "../TextMatematica1/textDisciplina.css";
import { useState } from 'react'
import axios from "axios";



function TextMatematica1() {
  const [result, setResult] = useState('');
  const [prompt, setPrompt] = useState('');


  const handleClick = async () => {
    // envia uma requisição do tipo POST para o endpoint programado no backend 
    // a pergunta está guardada na constante prompt
    // a constante response guarda a resposta enviada pelo backend
    const response = await axios.post(
      "http://localhost:4000/genio",
      { prompt: prompt }
    );
    // atribui a constante resposta para o campo result na tela
    setResult(response.data);

  }


  return (
    <>
      <Navbar />

      <main className="text-main">

        <section>
          <h1 className="title-main">
            Análise combinatória
          </h1>
          <p className="p-main">
            Análise combinatória é um campo da matemática que desenvolve teorias de contagem, 
            possibilitando melhor desenvolvimento nesses processos.
            {" "}
          </p>{" "}
          <p className="p-main">
          A análise combinatória é um campo de estudo da matemática associado com as regras de contagem. 
          No início do século XVIII, o estudo sobre jogos envolvendo dados e cartas fez com que as teorias 
          de contagem tivessem grande desenvolvimento
          {" "}
          </p>{" "}
          <h2 className="p-main">Para que serve a análise combinatória? </h2>{" "}
          <p className="p-main">
          A analise combinatória está associada com o processo de contagem, ou seja, 
          o estudo dessa área da matemática possibilita-nos desenvolver ferramentas 
          que nos auxiliam na realização de contagens de maneira mais eficiente.{" "}
          </p>{" "}
          <p className="p-main">
            {" "}
            {" "}
          </p>{" "}
          <p className="p-main">
            
          </p>{" "}
          <p className="p-main">
            
          </p>
        </section>

        {/*=====================================================GENIO=======================================================*/}

        <main className="main-genio">
        <h1>Tire Suas dúvidas com o Gênio</h1>

        <section className="genio-container">
          <div className="result-genio">{result}</div>

          <div className="form-genio">
            <input
              className="input-genio"
              placeholder="Escreva aqui"
              type="text"
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button className="buttom-genio" onClick={handleClick}>
              Enviar
            </button>
          </div>
        </section>
      </main>
      </main>
    </>
  );
}

export default TextMatematica1;
