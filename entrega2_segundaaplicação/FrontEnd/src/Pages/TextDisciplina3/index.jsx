import Navbar from "../../Components/Navbar";
import "../TextDisciplina/textDisciplina.css";
import { useState } from 'react'
import axios from "axios";



function TextDisciplina3() {
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
            Linguística
          </h1>
          <p className="p-main">
            A Linguística é concebida como a ciência que se ocupa do estudo acerca dos fatos da linguagem, cujo precursor foi Ferdinand de Saussure.{" "}
          </p>{" "}
          <p className="p-main">
            O termo “Linguística” pode ser definido como a ciência que estuda os fatos da linguagem. Para que possamos compreender o porquê de ela ser caracterizada como uma ciência, tomemos como exemplo o caso da gramática normativa, uma vez que ela não descreve a língua como realmente se evidencia, mas sim como deve ser materializada pelos falantes, constituída por um conjunto de sinais (as palavras) e por um conjunto de regras, de modo a realizar a combinação desses. {" "}
          </p>{" "}
          <h2 className="p-main">Significante X Significado</h2>{" "}
          <p className="p-main">
            Para Saussure, o signo linguístico se compõe de duas faces básicas: a do
            significado – relativo ao conceito, isto é, à imagem acústica, e a do
            significante – caracterizado pela realização material de tal
            conceito, por meio dos fonemas e letras. Falando em signo, torna-se relevante
            dizer acerca do caráter arbitrário que o nutre, pois, sob a visão saussuriana,
            nada existe no conceito que o leve a ser denominado pela sequência de fonemas,
            como é o caso da palavra casa, por exemplo, e de tantas outras. Fato esses que bem
            se comprova pelas diferenças existentes entre as línguas, visto que um mesmo
            significado é representado por significantes distintos, como é ocaso da palavra
            cachorro (em português); dog (inglês); perro (espanhol); chien (francês) e
            cane (italiano).
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

export default TextDisciplina3;
