import Navbar from "../../Components/Navbar";
import "../TextGeografia2/textDisciplina.css";
import { useState } from 'react'
import axios from "axios";



function TextGeografia2() {
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
            Continentes
          </h1>
          <p className="p-main">
            A superfície do planeta Terra se encontra dividida em seis continentes: América, África, Europa, Ásia, Oceania e Antártida.{" "}
          </p>{" "}
          <p className="p-main">
            Continentes são grandes massas de terra banhadas por mares e oceanos. A superfície do planeta Terra se divide hoje em seis grandes continentes, que são África, América, Ásia, Europa, Oceania e Antártida. A sua formação e a atual disposição dos continentes são explicadas por meio da teoria da deriva continental. Com exceção da Antártida, todos os continentes se dividem em unidades territoriais chamadas de países. Alguns países pertencem a mais de um continente ao mesmo tempo, sendo chamados de transcontinentais.{" "}
          </p>{" "}
          <h2 className="p-main">Características dos continentes</h2>{" "}
          <p className="p-main">
            Os continentes são extensas parcelas de terra banhadas pelos oceanos. Eles são formados por uma imensa área emersa e uma extensão situada abaixo do nível da água do mar, que é denominada plataforma continental. Juntos, perfazem uma área de aproximadamente 149 milhões de quilômetros quadrados, o equivalente a 30% da superfície terrestre.{" "}
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

export default TextGeografia2;
