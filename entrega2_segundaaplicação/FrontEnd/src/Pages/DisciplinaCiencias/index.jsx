import Navbar from '../../Components/Navbar';
import "../Discipinas/style.css"
import { Link } from 'react-router-dom';

function DisciplinaCiencias() {
    
  return (
    <>
        <Navbar />

    <main className='main'>
        <div className='cabecalho'>
          <h1 className='spacing'>Ciências</h1>
        </div>

        <form className='spacing' action="">
          <input type="text" className='search' placeholder='Digite aqui a aula de interesse' />
        </form>

      <section className='cardGroup'>

      <Link to="/TextCiencias1">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Combustíveis</p>
          </div>
      </Link>

      <Link to="/TextCiencias2">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Anatomia humana</p>
          </div>
      </Link>

      <Link to="/TextCiencias3">
          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Eletromagnetismo</p>
          </div>
      </Link>

      </section>
    </main>
    </>
  );
}

export default DisciplinaCiencias;