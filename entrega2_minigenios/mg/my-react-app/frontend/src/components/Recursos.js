import React from 'react';
import TabContent from './TabContent';

function Recursos({ activeTab, toggleMiniSecao }) {
  return (
    <TabContent id="recursos" activeTab={activeTab}>
      <h2>Recursos Educacionais</h2>
      <p>Explore nosso conteúdo de alta qualidade e mergulhe no mundo do aprendizado divertido!</p>
      <p>Aqui você encontrará uma ampla variedade de recursos educacionais, incluindo:</p>
      <button className="mini-secao-btn" onClick={() => toggleMiniSecao('atividades-divertidas')}>Atividades Divertidas</button>
      <div id="atividades-divertidas" className="mini-secao" style={{ display: 'none' }}>
        <button className="mini-secao-btn" onClick={() => toggleMiniSecao('quebra-cabeca')}>Quebra-cabeça</button>
        <div id="quebra-cabeca" className="mini-secao" style={{ display: 'none' }}>
          <ul>
            <li><a href="https://www.jigsawplanet.com/">Quebra-Cabeça de Animais</a> (Jigsaw Planet)</li>
            <li><a href="https://kids.nationalgeographic.com/games/">Quebra-Cabeça de Natureza</a> (National Geographic Kids)</li>
            <li><a href="https://www.jigsawexplorer.com/">Quebra-Cabeça de História</a> (Jigsaw Explorer)</li>
          </ul>
        </div>
        <button className="mini-secao-btn" onClick={() => toggleMiniSecao('quizzes')}>Quizzes</button>
        <div id="quizzes" className="mini-secao" style={{ display: 'none' }}>
          <ul>
            <li><a href="https://www.math-quiz.co.uk/">Matemática</a> (Math-Quiz)</li>
            <li><a href="https://www.sciencekids.co.nz/quizzes.html">Ciências</a> (Science Kids)</li>
            <li><a href="https://kids.nationalgeographic.com/games/">Geografia</a> (National Geographic Kids)</li>
            <li><a href="https://www.ducksters.com/history/">História</a> (Ducksters)</li>
          </ul>
        </div>
      </div>
      <button className="mini-secao-btn" onClick={() => toggleMiniSecao('livros-digitais')}>Livros Digitais</button>
      <div id="livros-digitais" className="mini-secao" style={{ display: 'none' }}>
        <button className="mini-secao-btn" onClick={() => toggleMiniSecao('historias')}>Histórias Infantis</button>
        <div id="historias" className="mini-secao" style={{ display: 'none' }}>
          <ul>
            <li><a href="https://www.gutenberg.org/ebooks/11">Alice no País das Maravilhas</a></li>
            <li><a href="https://www.gutenberg.org/ebooks/257">O Pequeno Príncipe</a></li>
            <li><a href="https://www.gutenberg.org/ebooks/7153">Harry Potter e a Pedra Filosofal</a></li>
          </ul>
        </div>
        <button className="mini-secao-btn" onClick={() => toggleMiniSecao('lingua-portuguesa')}>Língua Portuguesa</button>
        <div id="lingua-portuguesa" className="mini-secao" style={{ display: 'none' }}>
          <ul>
            <li><a href="https://www.gutenberg.org/ebooks/36606">Gramática de Português</a></li>
            <li><a href="https://www.gutenberg.org/ebooks/33521">Dicionário Português</a></li>
          </ul>
        </div>
        <button className="mini-secao-btn" onClick={() => toggleMiniSecao('matematica')}>Matemática</button>
        <div id="matematica" className="mini-secao" style={{ display: 'none' }}>
          <ul>
            <li><a href="https://www.gutenberg.org/ebooks/33283">Fundamentos de Matemática</a></li>
            <li><a href="https://www.gutenberg.org/ebooks/21030">Problemas de Matemática para Crianças</a></li>
          </ul>
        </div>
        <button className="mini-secao-btn" onClick={() => toggleMiniSecao('ciencias')}>Ciências</button>
        <div id="ciencias" className="mini-secao" style={{ display: 'none' }}>
          <ul>
            <li><a href="https://www.gutenberg.org/ebooks/39284">Ciências para Crianças</a></li>
            <li><a href="https://www.gutenberg.org/ebooks/29019">Experimentos Científicos para Crianças</a></li>
          </ul>
        </div>
        <button className="mini-secao-btn" onClick={() => toggleMiniSecao('geografia')}>Geografia</button>
        <div id="geografia" className="mini-secao" style={{ display: 'none' }}>
          <ul>
            <li><a href="https://www.gutenberg.org/ebooks/34177">Geografia Mundial</a></li>
            <li><a href="https://www.gutenberg.org/ebooks/24418">Atlas Geográfico para Crianças</a></li>
          </ul>
        </div>
        <button className="mini-secao-btn" onClick={() => toggleMiniSecao('historia')}>História</button>
        <div id="historia" className="mini-secao" style={{ display: 'none' }}>
          <ul>
            <li><a href="https://www.gutenberg.org/ebooks/32656">História para Crianças</a></li>
            <li><a href="https://www.gutenberg.org/ebooks/28298">Biografias de Personagens Históricos</a></li>
          </ul>
        </div>
        <button className="mini-secao-btn" onClick={() => toggleMiniSecao('ingles')}>Inglês</button>
        <div id="ingles" className="mini-secao" style={{ display: 'none' }}>
          <ul>
            <li><a href="https://www.gutenberg.org/ebooks/16551">Inglês para Crianças</a></li>
            <li><a href="https://www.gutenberg.org/ebooks/37185">Dicionário Inglês-Português</a></li>
          </ul>
        </div>
      </div>
    </TabContent>
  );
}

export default Recursos;
