import React from "react";
import "../SpecificVideos/especificVideo.css";
import Navbar from "../../Components/Navbar";
import "../../Fonts/Lato-Bold.ttf";
import { Link } from "react-router-dom";
const SpecificVideos = () => {
  return (
    <>
      <Navbar />

      <main>
        <div className="title-video">
          <h1>Video aulas de português</h1>
        </div>

        <section className="card-group-video">
          
          <Link to="https://www.youtube.com/watch?v=EGwOB3a_Uc4">
          <div className="card-video">
            <img
              className="img-video"
              src="https://img.icons8.com/dusk/100/video.png"
              alt=""
            />
            <p className="p-video">Diferença dos porquês</p>
          </div>
          </Link>

          <div className="card-video">
            <img
              className="img-video"
              src="https://img.icons8.com/dusk/100/video.png"
              alt=""
            />
            <p className="p-video">Substantivo</p>
          </div>

          <div className="card-video">
            <img
              className="img-video"
              src="https://img.icons8.com/dusk/100/video.png"
              alt=""
            />
            <p className="p-video">Verbos</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default SpecificVideos;
