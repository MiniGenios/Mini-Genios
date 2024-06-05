import Navbar from "../../Components/Navbar";
import "../TextDisciplina/textDisciplina.css";
import { useState } from 'react'
import axios from "axios";



function TextCiencias3() {
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
            Eletromagnetismo
          </h1>
          <p className="p-main">
            O eletromagnetismo é uma área da Física que estuda a eletricidade e o
            magnetismo simultaneamente. É importante para o desenvolvimento de dispositivos
            elétricos e eletrônicos.{" "}
          </p>{" "}
          <p className="p-main">
            O eletromagnetismo é uma das grandes áreas estudadas na Física, seu objeto de
            estudo é a conexão entre os fenômenos da eletricidade e do magnetismo.
            Seu estudo teve enormes implicações na tecnologia, já que permitiu o
            desenvolvimento de motores, baterias, televisores, celulares, computadores,
            energia elétrica, internet e muito mais{" "}
          </p>{" "}
          <h2 className="p-main">O que é eletromagnetismo? </h2>{" "}
          <p className="p-main">
            O eletromagnetismo é uma área de estudo da Física que analisa os fenômenos
            elétricos e os fenômenos magnéticos de maneira unificada. Durante o ensino médio,
            para facilitar a compreensão, o eletromagnetismo é estudado separado em duas áreas:
            eletricidade e magnetismo. A eletricidade abrange os estudos da eletrostática,
            desde lei de Coulomb até a lei de Gauss, e da eletrodinâmica, desde potencial
            elétrico até circuitos elétricos. Já o magnetismo abrange os estudos desde o campo
            magnético até as equações de Maxwell.{" "}
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

export default TextCiencias3;
