import Navbar from "../../Components/Navbar";
import "../TextGeografia3/textDisciplina.css";
import { useState } from 'react'
import axios from "axios";



function TextGeografia3() {
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
            Demografia
          </h1>
          <p className="p-main">
            Demografia é a ciência responsável pelo estudo das populações humanas fazendo uso de análises estatísticas e conceitos que auxiliam na compreensão da evolução desses grupos.{" "}
          </p>{" "}
          <p className="p-main">
            A demografia estuda o perfil e a evolução das populações humanas no tempo e no espaço. Para isso, faz uso de conceitos e indicadores demográficos expressos quantitativamente, ou seja, na forma de dados estatísticos.{" "}
          </p>{" "}
          <h2 className="p-main">O que é demografia?</h2>{" "}
          <p className="p-main">
            A demografia é a área do conhecimento responsável pelo estudo das populações humanas. Esse estudo abrange a formação e evolução dos grupos populacionais em seus mais variados aspectos, que são o seu tamanho, distribuição espacial e composição (por idade, sexo, cor ou raça etc.), os quais são analisados dentro de um intervalo de tempo.{" "}
          </p>{" "}

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
        </main>      </main>
    </>
  );
}

export default TextGeografia3;
