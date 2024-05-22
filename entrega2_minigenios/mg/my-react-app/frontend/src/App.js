import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Container from './components/Container';
import Inicio from './components/Inicio';
import Recursos from './components/Recursos';
import Ajuda from './components/Ajuda';
import Sobre from './components/Sobre';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleMiniSecao = (secaoId) => {
    const secao = document.getElementById(secaoId);
    if (secao.style.display === "none" || secao.style.display === "") {
      secao.style.display = "block";
    } else {
      secao.style.display = "none";
    }
  };

  return (
    <div className="App">
      <Header />
      <Nav openTab={openTab} />
      <Container>
        <Inicio activeTab={activeTab} />
        <Recursos activeTab={activeTab} toggleMiniSecao={toggleMiniSecao} />
        <Ajuda activeTab={activeTab} />
        <Sobre activeTab={activeTab} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
