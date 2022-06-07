import React from 'react'
import './Reservas.css'
import hotel from '../../Assets/Imagens/hotel.jpg'

function Reservas() {
  // const[dados, setDados] = useState([])
  // const [mostraForm, setMostraForm] = useState(false)
  // const [dadosEdit, setDadosEdit] = useState()

  return (
    <main className='main'>

      <section className='reservas'>
        <h1 className='txtReservas'>
          Bem vindo a Grande Hotel Resília
        </h1>

      <img src={hotel} alt="" className='imgHotel'/>
      
      <form className='form'>

        <div className='sessao-input'>
        <div className='check'>
        <p className='txt-input'>check-in</p>
        </div>
        <div className='data-check'>
        <input type= 'date' className='data'/>
        </div>
        </div>

        <div className='sessao-input'>
        <div className='check'>
        <p className='txt-input'>check-out</p>
        </div>
        <div className='data-check'>
        <input type= 'date' className='data'/>
        </div>
        </div>

        <div className='sessao-input'>
          <div className='num'>
          <p  className='txt-numero'>N° de Adultos</p>
          </div>
          <div className='input-nun'>
          <input type='number' className='numeros'></input>
          </div>
        </div>

        <div className='sessao-input'>
          <div className='num'>
          <p  className='txt-numero'>N° de crianças</p>
          </div>
          <div className='input-nun'>
          <input type='number' className='numeros'/>
          </div>
        </div>
  
        <button className='btnForm'>Enviar</button>
      </form>

      </section>
      <section className='resposta'><h1>olá</h1></section>
    </main>
  )
}

export default Reservas