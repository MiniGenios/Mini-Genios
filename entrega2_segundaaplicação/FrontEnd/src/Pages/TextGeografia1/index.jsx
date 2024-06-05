import Navbar from "../../Components/Navbar";
import "../TextGeografia1/textDisciplina.css";
import { useState } from 'react'
import axios from "axios";



function TextGeografia1() {
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
            Cartografia
          </h1>
          <p className="p-main">
            A cartografia é uma área do conhecimento que se dedica à representação da superfície terrestre em escala reduzida e ao desenvolvimento de técnicas para a leitura de mapas.{" "}
          </p>{" "}
          <p className="p-main">
            A cartografia é uma área do conhecimento geográfico que se dedica ao estudo e ao desenvolvimento de técnicas para a representação da superfície terrestre em escala reduzida e para a leitura e compreensão de mapas. Os produtos cartográficos servem para a localização e orientação no espaço, bem como para o conhecimento detalhado de diferentes recortes espaciais, o que apresenta aplicação tanto acadêmica quanto prática.{" "}
          </p>{" "}
          <h2 className="p-main">O que é cartografia?</h2>{" "}
          <p className="p-main">
            A cartografia é uma área do conhecimento geográfico que se dedica ao estudo e ao desenvolvimento de técnicas para a reprodução da superfície terrestre e de diversos aspectos do espaço geográfico em um plano reduzido, bem como para a leitura de mapas. Essa definição é muito parecida com aquela apresentada pela Associação Cartográfica Internacional (ICA, na sigla em inglês). Segundo a ICA, a cartografia é “a disciplina que se ocupa com a arte, a ciência e a tecnologia da produção de mapas”.{" "}
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

export default TextGeografia1;
