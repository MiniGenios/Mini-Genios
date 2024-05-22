import React from 'react';
import TabContent from './TabContent';

function Sobre({ activeTab }) {
  return (
    <TabContent id="sobre" activeTab={activeTab}>
      <h2>Sobre Nós</h2>
      <p>O MiniGênios é um site dedicado a tornar o aprendizado divertido e acessível para crianças entre 6 e 13 anos.</p>
      <p>Nosso objetivo é ajudar as crianças a alcançarem seu máximo potencial acadêmico através de recursos educacionais interativos e de alta qualidade.</p>
      <p>Estamos comprometidos em oferecer uma experiência educativa envolvente, intuitiva e segura para nossos usuários.</p>
    </TabContent>
  );
}

export default Sobre;