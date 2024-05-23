import React from 'react';
import '../SpecificVideos/especificVideo.css';
import Navbar from '../../Components/Navbar';
const SpecificVideos = () => {
    return (
        <>

        <Navbar />

        <div className="main-content">
            <div className="quest">
                <h1>Videos</h1>
            </div>
            <div className="pergunta">
                <h2>
                    Disciplinas
                </h2>
            </div>
            <div className="container1">
                <div className="video-container">
                    <i className="bi bi-play-circle"></i>
                    <h3>Vídeos de Matemática</h3>
                    {/* Aqui você pode adicionar seus vídeos de matemática */}
                </div>
                <div className="video-container">
                    <i className="bi bi-play-circle"></i>
                    <h3>Vídeos de Português</h3>
                    {/* Aqui você pode adicionar seus vídeos de português */}
                </div>
                <div className="video-container">
                    <i className="bi bi-play-circle"></i>
                    <h3>Vídeos de Geografia</h3>
                    {/* Aqui você pode adicionar seus vídeos de geografia */}
                </div>
            </div>
            
            <div className="bootstrap-item">
                {/* Espaço para o item do Bootstrap */}
            </div>
        </div>
        </>
    );
}

export default SpecificVideos;
