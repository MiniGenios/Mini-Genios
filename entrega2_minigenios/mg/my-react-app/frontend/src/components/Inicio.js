import React from 'react';
import TabContent from './TabContent';

function Inicio({ activeTab }) {
  return (
    <TabContent id="inicio" activeTab={activeTab}>
      <h2>Bem-vindo ao site MiniGênios!</h2>
      <p>Explore e divirta-se aprendendo com nossos recursos educacionais!</p>
    </TabContent>
  );
}

export default Inicio;