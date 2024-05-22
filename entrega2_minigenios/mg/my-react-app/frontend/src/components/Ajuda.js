import React, { useState } from 'react';
import TabContent from './TabContent';
import axios from 'axios';

function Ajuda({ activeTab }) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    try {
      const response = await axios.post('http://localhost:4000/pergunte-ao-chatgpt', { prompt: input });
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResult('Desculpe, algo deu errado. Tente novamente.');
    }

    setInput(''); // Limpa o campo de entrada após enviar a mensagem
  };

  return (
    <TabContent id="ajuda" activeTab={activeTab}>
      <h2>Ajuda e Suporte</h2>
      <p>Para obter mais ajuda e suporte envie uma mensagem para o chatbot abaixo.</p>
      <div className="chat-container">
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua pergunta..."
          />
          <button onClick={handleSend}>Enviar</button>
        </div>
        {result && (
          <div className="response">
            <strong>Resposta:</strong> {result}
          </div>
        )}
      </div>
    </TabContent>
  );
}

export default Ajuda;
