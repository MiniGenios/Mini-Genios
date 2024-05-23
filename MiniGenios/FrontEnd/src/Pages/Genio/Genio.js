import React from 'react';
import { useState } from "react";
import axios from "axios";
import '../Genio/genio.css'

const Genio = () => {

      // combinacao de constante e função para controlar o valor da pergunta e da resposta
  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");


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
  };



    return (
        <div className="content">
            <header className="header">
                <nav className="nav container">
                    <div className="nav__data">
                        <a href="/" className="nav__logo">
                            <i className="bi bi-spellcheck"></i>
                            <div className="minigenios">Mini<span className="genios">Gênios</span></div>
                        </a>
                        <div className="nav__toggle" id="nav-toggle">
                            <i className="ri-menu-line nav__burger"></i>
                            <i className="ri-close-line nav__close"></i>
                        </div>
                    </div>
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li><a href="/" className="nav__link">Pagina Inicial</a></li>
                            <li><a href="/questions" className="nav__link">Perguntas</a></li>
                            <li><a href="/videos" className="nav__link">Videos</a></li>
                            <li><a href="/specific-video" className="nav__link">Video Específico</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="container-h1">
                <h1 className='text-container'>
                    Tire Suas dúvidas com o Gênio
                </h1>
                <input type="text" onChange={(e) => setPrompt(e.target.value)} />
                <button onClick={handleClick}>Enviar</button>
                <div className="resultDiv">Resultado: {result}</div>
                
            </div>
        </div>
    );
}

export default Genio;
