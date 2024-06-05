import Navbar from '../../Components/Navbar';
import "../Discipinas/style.css"
import { Link } from 'react-router-dom';

function Disciplinas() {
    
  return (
    <>
        <Navbar />

    <main className='main'>
        <div className='cabecalho'>
          <h1 className='spacing'>Língua Portuguesa</h1>
        </div>

        <form className='spacing' action="">
          <input type="text" className='search' placeholder='Digite aqui a aula de interesse' />
        </form>

      <section className='cardGroup'>

      <Link to="/textdisciplina">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Diferença dos porquês</p>
          </div>
      </Link>

      <Link to="/textdisciplina2">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Semântica</p>
          </div>
      </Link>

      <Link to="/textdisciplina3">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Linguística</p>
          </div>
      </Link>

      </section>
    </main>
    </>
  );
}

export default Disciplinas;