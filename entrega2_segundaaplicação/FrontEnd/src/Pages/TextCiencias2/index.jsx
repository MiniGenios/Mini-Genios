import Navbar from "../../Components/Navbar";
import "../TextDisciplina/textDisciplina.css";
import { useState } from 'react'
import axios from "axios";



function TextCiencias2() {
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
            Anatomia humana
          </h1>
          <p className="p-main">
            Anatomia humana é a parte da biologia voltada para o estudo da forma e
            estrutura do nosso corpo. Sem ela seria impossível compreender o funcionamento
            do organismo.{" "}
          </p>{" "}
          <p className="p-main">
            Anatomia humana é o campo da biologia responsável por estudar a forma e a
            estrutura do organismo humano, bem como as suas partes. O nome anatomia
            origina-se do grego ana, que significa “parte”, e tomnei, que significa cortar,
            ou seja, é a parte da biologia que se preocupa com o isolamento de estruturas e
            seu estudo.{" "}
          </p>{" "}
          <h2 className="p-main">A história da anatomia humana </h2>{" "}
          <p className="p-main">
            Acredita-se que as primeiras dissecações em seres humanos tenham acontecido
            no século II a.C., por intermédio de Herófilo e Erasístrato, em Alexandria.
            Após esse período, a área ficou praticamente estagnada, principalmente em decorrência
            da pressão da Igreja, que não aceitava esse tipo de pesquisa.{" "}
          </p>{" "}
          <p className="p-main">
            {" "}
            Os estudos na área retornaram com maior força durante o Renascimento,
            destacando-se, nesse período, as obras de Leonardo da Vinci e Andreas Vesalius.
            Aquele ganhou notoriedade na anatomia por seus espetaculares desenhos do corpo
            humano, nos quais trabalhou por 15 anos. Para a feitura deles, esse
            importante artista fez vários estudos, participando, inclusive, de dissecações.{" "}
          </p>{" "}
          <p className="p-main">
            O primeiro atlas de anatomia, o De humani corporis fabrica, foi produzido,
            em 1543, por Vesalius, atualmente considerado o pai da anatomia moderna.
            Seu livro quebrou falsos conceitos e contribuiu para um aprofundamento maior na
            área, marcando, assim, sua fase moderna.
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

export default TextCiencias2;
