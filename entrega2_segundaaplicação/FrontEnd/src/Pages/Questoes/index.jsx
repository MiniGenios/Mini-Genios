import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import "../Questoes/style.css"

function Questoes() {
    
  return (
    <>
        <Navbar />

    <main className='main'>
        <div className='cabecalho-question'>
          <h1 className='h1-question'>Questões</h1>

          <h2>Lingua Portuguesa</h2>
        </div>

      <section className='cardGroup'>

        <Link to="/questionpage">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Diferença dos porques</p>
          </div>
        </Link>
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Substantivo</p>
          </div>


          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Verbos</p>
          </div>

      </section>
    </main>
    </>
  );
}

export default Questoes;