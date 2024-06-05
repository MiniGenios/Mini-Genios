import Navbar from '../../Components/Navbar';
import "../Discipinas/style.css"
import { Link } from 'react-router-dom';

function DisciplinaMatematica() {
    
  return (
    <>
        <Navbar />

    <main className='main'>
        <div className='cabecalho'>
          <h1 className='spacing'>Matemática</h1>
        </div>

        <form className='spacing' action="">
          <input type="text" className='search' placeholder='Digite aqui a aula de interesse' />
        </form>

      <section className='cardGroup'>

      <Link to="/TextMatematica1">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Análise combinatória</p>
          </div>
      </Link>

      <Link to="/TextMatematica2">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Conjuntos</p>
          </div>
      </Link>

      <Link to="/TextMatematica3">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Equação</p>
          </div>
      </Link>
      </section>
    </main>
    </>
  );
}

export default DisciplinaMatematica;