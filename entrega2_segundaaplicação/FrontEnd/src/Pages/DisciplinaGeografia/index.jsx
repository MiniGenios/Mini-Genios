import Navbar from '../../Components/Navbar';
import "../Discipinas/style.css"
import { Link } from 'react-router-dom';

function DisciplinaGeografia() {
    
  return (
    <>
        <Navbar />

    <main className='main'>
        <div className='cabecalho'>
          <h1 className='spacing'>Geografia</h1>
        </div>

        <form className='spacing' action="">
          <input type="text" className='search' placeholder='Digite aqui a aula de interesse' />
        </form>

      <section className='cardGroup'>

      <Link to="/TextGeografia1">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Cartografia</p>
          </div>
      </Link>

      <Link to="/TextGeografia2">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Continentes</p>
          </div>
      </Link>

      <Link to="/TextGeografia3">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Demografia</p>
          </div>
      </Link>

      </section>
    </main>
    </>
  );
}

export default DisciplinaGeografia;