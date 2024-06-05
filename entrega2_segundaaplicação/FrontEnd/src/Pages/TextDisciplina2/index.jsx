import Navbar from "../../Components/Navbar";
import "../TextDisciplina/textDisciplina.css";
import { useState } from 'react'
import axios from "axios";



function TextDisciplina2() {
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
          Semântica
          </h1>
          <p className="p-main">
          Semântica diz respeito ao significado que as palavras representam, ocupando-se do estudo da sinonímia, antonímia, paronímia, homonímia, polissemia, denotação, conotação, entre outras.{" "}
          </p>{" "}
          <p className="p-main">
          Falar sobre semântica significa, antes de tudo, falar sobre significante e significado.{" "}
          </p>{" "}
          <h2 className="p-main">O que estuda a semântica?</h2>{" "}
          <p className="p-main">
          Munidos agora dessa percepção, concluímos o porquê de o significante e do significado estarem intimamente ligados à semântica, pois ela se caracteriza como a ciência dos significados das palavras. E compreender bem acerca dos significados é fundamental para que possamos escolher de forma adequada e conveniente as palavras que melhor expressam nossas ideias, nossos pensamentos.{" "}
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
      </main>
      </main>
    </>
  );
}

export default TextDisciplina2;
