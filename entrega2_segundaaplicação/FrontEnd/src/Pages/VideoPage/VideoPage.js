import React from "react";
import "../VideoPage/videos.css";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
const Videos = () => {
  return (
    <>
      <Navbar />

      <main className="main">
        <div className="cabecalho">
          <h1>Videos</h1>

          <h2>Lingua Portuguesa</h2>
        </div>

        <section className="cardGroup">
          <Link to="/questionpage">
            <div className="card1">
              <img
                src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png"
                alt=""
              />
              <p>Diferença dos porques</p>
            </div>
          </Link>
          <div className="card1">
            <img
              src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png"
              alt=""
            />
            <p>Substantivo</p>
          </div>

          <div className="card1">
            <img
              src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png"
              alt=""
            />
            <p>Verbos</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Videos;
