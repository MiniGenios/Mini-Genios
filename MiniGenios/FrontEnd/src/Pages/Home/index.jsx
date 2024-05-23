import Navbar from "../../Components/Navbar";
import "../Home/home.css";
import Section1 from "../../Img/Kids using hand sanitizer at school-rafiki.png";

function Home() {
  return (
    <>
      <Navbar />

      <header>
        <ul className="menu-dropdown">
          <li>
            <a href="">Disciplinas</a>
            <ul class="dropdown">
              <li>
                <a href="diciplinas">Portugues</a>
              </li>
              <li>
                <a href="#">Matematica</a>
              </li>
              <li>
                <a href="#">Ciencias</a>
              </li>
              <li>
                <a href="#">Geografia</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Atividades</a>
            <ul class="dropdown">
              <li>
                <a href="#">Portugues</a>
              </li>
              <li>
                <a href="#">Matematica</a>
              </li>
              <li>
                <a href="#">Ciencias</a>
              </li>
              <li>
                <a href="#">Geografia</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Genio</a>
          </li>
          <li>
            <a href="#">Atividades</a>
            <ul class="dropdown">
              <li>
                <a href="#">Portugues</a>
              </li>
              <li>
                <a href="#">Matematica</a>
              </li>
              <li>
                <a href="#">Ciencias</a>
              </li>
              <li>
                <a href="#">Geografia</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>
      </header>

{/*====================================================SECTION 1===========================================================*/ }

      <main>
        <section className="section1">
          <div className="text-section1">
            <h1 className="h1-section1">Descubra o poder do conhecimento!</h1>
            <h2 className="h2-section1">
              Estamos aqui para transformar a sua jornada educacional em uma
              experiência extraordinária.
            </h2>
          </div>

          <img className="img-section1" src={Section1} alt="" />
        </section>

{/*====================================================SECTION 2===========================================================*/ }

        <section className="section2">
            <h1 className="title-section2">O que a de novo</h1>

            <div className="card-section">

            <div className="card-section2">
              <img
                src="https://img.icons8.com/dusk/100/video.png"
                alt=""
              />
              <h1>Video aulas</h1>
              <p>Escolhidas a dedo no Youtube para um mehor entendimento</p>
            </div>

            <div className="card-section2">
              <img
                src="https://img.icons8.com/color/100/classroom.png"
                alt=""
              />
              <h1>Atividades</h1>
              <p>Uma ferramenta importante para testar seus conhecimentos</p>
            </div>

            <div className="card-section2">
              <img
                src="https://img.icons8.com/external-soft-fill-juicy-fish/100/external-robo-automation-technology-soft-fill-soft-fill-juicy-fish.png"
                alt=""
              />
              <h1>Gênio</h1>
              <p>Uma IA feita para tirar todas as suas duvidas sobre as matérias</p>
            </div>
            </div>
        </section>
      </main>

      {/*====================================================FOOTER===========================================================*/ }
    <footer className="footer">
        <h1 className="title-footer">MiniGênios</h1>
        <p className="text-footer">© 2024 MiniGênios. Todos os direitos reservados.</p>
    </footer>
    </>
  );
}

export default Home;
