import Navbar from '../../Components/Navbar';
import "../Discipinas/style.css"

function Disciplinas() {
    
  return (
    <>
        <Navbar />

    <main className='main'>
        <div className='cabecalho'>
          <h1 className='spacing'>Lingua Portuguesa</h1>
        </div>

        <form className='spacing' action="">
          <input type="text" className='search' placeholder='Digite aqui a materia de interesse' />
        </form>

      <section className='cardGroup'>

          <div className='card1'>
            <img src="https://img.icons8.com/ios-filled/100/FFBA08/questions.png" alt="" />
            <p>Diferença dos porques</p>
          </div>

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

export default Disciplinas;