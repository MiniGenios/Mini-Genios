import React from 'react';

function Nav({ openTab }) {
    return (
        <nav>
            <button className="tab-btn" onClick={() => openTab('inicio')}>Início</button>
            <button className="tab-btn" onClick={() => openTab('recursos')}>Recursos</button>
            <button className="tab-btn" onClick={() => openTab('ajuda')}>Ajuda</button>
            <button className="tab-btn" onClick={() => openTab('sobre')}>Sobre</button>
        </nav>
    );
}

export default Nav;
